import { B_I2, T_I4 } from "shared/constants/genericApiRoutes";
import { ObjectType } from "./helpers";

export async function addModel(src: string, color: string, context: any, width: number, height: number) {
	const img: HTMLImageElement = new Image();
	img.src = await colorImage(src, color, width, height);
	await new Promise((res) => {
		img.onload = res;
	})
	context.drawImage(img, 0, 0, width, height);
}

async function colorImage(image: string, color: string, width: number, height: number): Promise<string> {
	const img = new Image();
	img.src = image
	await new Promise((res) => {
		img.onload = res
	})
	const imageCtx = document.createElement("canvas").getContext("2d");
	
	if (!imageCtx) return "";
	
	imageCtx.canvas.width = width;
	imageCtx.canvas.height = height;
	imageCtx.save();
	//Then export our canvas to png image
	imageCtx.clearRect(0, 0, width, height);
	imageCtx.drawImage(img, 0, 0, width, height);
	
	if (color) {
		const imageData = imageCtx.getImageData(0, 0, width, height);
		const data = imageData.data;
		const hex = parseInt(color.substring(1), 16);
		const newR = (hex & 0xff0000) >> 16;
		const newG = (hex & 0x00ff00) >> 8;
		const newB = hex & 0x0000ff;
		let greylevel;
		for (let i = 0; i < data.length; i += 4) {
			if (data[i + 3] > 0) {
				greylevel = (((data[i] / 255) + (data[i + 1] / 255) + (data[i + 2] / 255) + (data[i + 3] / 255)) / 4); //for tint
				data[i] = newR * greylevel; // red
				data[i + 1] = newG * greylevel; // green
				data[i + 2] = newB * greylevel; // blue
			}
		}
		imageCtx.putImageData(imageData, 0, 0);
	}
	return imageCtx.canvas.toDataURL("image/png");
}

export async function addImageProcess(printImageURL: string, imageSrc: string, width: number, height: number, rangeValue: number) {
	
	const image = new Image();
	image.src = imageSrc;
	await new Promise(res => {
		image.onload = res
	})
	// image.crossOrigin = "anonymous";
	if (!printImageURL) return image;
	const cnv = document.createElement('canvas')
	const ctx = cnv.getContext('2d');
	if (!ctx) return image;
	ctx.canvas.width = width;
	ctx.canvas.height = height;
	// ctx.save();
	ctx.clearRect(0, 0, width, height);
	ctx.drawImage(image, 0, 0, width, height);
	const imageData = ctx.getImageData(0, 0, width, height);
	const data = imageData.data;
	let img = new Image()
	img.src = printImageURL
	await new Promise(res => {
		img.onload = res
	})
	img.crossOrigin = "http://localhost:8001";
	const ctxBg = document.createElement('canvas').getContext('2d')
	if (!ctxBg) return image;
	ctxBg.canvas.width = width;
	ctxBg.canvas.height = height;
	// ctxBg.save();
	ctxBg.globalAlpha = 1;
	ctxBg.globalCompositeOperation = 'multiply';
	ctx.clearRect(0, 0, width, height);
	ctxBg.drawImage(image, 0, 0, width, height);
	
	ctxBg.drawImage(img, 0, 0, width, height);
	// for (let i = 0; i * width * rangeValue <= width; i++) {
	// 	for (let j = 0; j * height * rangeValue <= height; j++) {
	// 		ctxBg.drawImage(img, 50, 50, width, height,  i * width * rangeValue, j * height * rangeValue, width * rangeValue, height * rangeValue);
	// 	}
	// }
	const bgImageData = ctxBg.getImageData(0, 0, width, height);
	const bgData = bgImageData.data;
	for (let i = 0; i < data.length; i += 4) {
		bgData[i + 3] = data[i + 3]
	}
	ctxBg.putImageData(bgImageData, 0, 0);
	const x = new Image();
	x.src = ctxBg.canvas.toDataURL("image/png");
	
	return x;
}

export const getModelData = (activeColor: string = '', activePrint: ObjectType = {}) => {
	return [
		{src: B_I2, color: activeColor, printImageURL: activePrint?.highresurl},
		{src: T_I4, color: activeColor, printImageURL: activePrint?.highresurl},
	  ]
}
