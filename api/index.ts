import dotenv from "dotenv";
import path from 'path'
import cors from 'cors'
import router from './src/routes'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import express from "express";
import bodyParser from "body-parser";
const upload = require('express-fileupload');
// const errorMidleware = require('./middlewares/error')
// const passport = require('passport')
// import HttpError from "./utils/HttpError";
const app = express();

dotenv.config();

// const storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, "public/images");
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, req.body.name);
// 	},
// });

// const upload = multer({ storage: storage });
app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true })); //this line is already mentioned above
app.use(bodyParser.json());//add this line
app.use(helmet());
app.use(morgan("common"));

app.use(upload());
app.use(cors());

app.use('/api', router);

const PORT = process.env.PORT || 6000

//Middleware
// app.use(errorMidleware)

async function start() {
	try {
		await mongoose
			.connect(process.env.MONGODB_URL || '')
			.then(() => console.log("Database connected!"))
			.catch((err: any) => console.log(err));

		app.listen(PORT, () => {
			console.log(`Backend server is running on port ${PORT}!`);
		});
	} catch (error) {
		console.log(error);
	}
}

start()