import dotenv from "dotenv";
dotenv.config();
import path from 'path'
import cors from 'cors'
import router from './src/routes'
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import express from "express";
import upload from 'express-fileupload';
// const upload = require('express-fileupload')
// const errorMidleware = require('./middlewares/error')
// const passport = require('passport')
// import HttpError from "./utils/HttpError";
const app = express();
app.use(cookieParser());

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
app.use(helmet());
app.use(morgan("common"));

app.use(upload());
app.use(cors({
    origin: true, //included origin as true
    credentials: true, //included credentials as true
}));

app.use('/api', router);

const PORT = process.env.PORT || 6000

//middleware for errors
// app.use((error, req, res, next) => {
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500).json({message: error.message || 'An unknown error occurred!'});
// })

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