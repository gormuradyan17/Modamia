import {ObjectType} from "./helpers";

export async function addModel(src: string, color: string, context: any, width: number, height: number) {
	if(!src) return;
	const img: HTMLImageElement = new Image();
	img.src = await colorImage(src, color, width, height);
	await new Promise((res) => {
		img.onload = res;
	})
	context.drawImage(img, 0, 0, width, height);
}

async function colorImage(image: string, color: string, width: number, height: number): Promise<string> {
	const img = new Image();
	img.src = image;
	img.crossOrigin="*"
	await new Promise((res) => {
		img.onload = res
	})
	const imageCtx = document.createElement("canvas").getContext("2d");
	
	if (!imageCtx) return "";
	
	imageCtx.canvas.width = width;
	imageCtx.canvas.height = height;
	// imageCtx.save();
	//Then export our canvas to png image
	imageCtx.clearRect(0, 0, width, height);
	imageCtx.drawImage(img, 0, 0, width, height);	
	
	if (color) {
		const imageData = imageCtx.getImageData(0, 0, width, height);
		const data = imageData.data;
		let hex = parseInt(color.substring(1), 16);
		if (color.substring(1).length === 3) {
			let x = '';
			for (let i = 0; i < 3; i++) {
				x += color.substring(1)[i] + color.substring(1)[i]
			}
			hex = parseInt(x, 16);
		}
		const newR = (hex & 0xff0000) >> 16;
		const newG = (hex & 0x00ff00) >> 8;
		const newB = hex & 0x0000ff;
		let greylevel;
		for (let i = 0; i < data.length; i += 4) {
			// if (data[i + 3] > 0) {
			greylevel = (((data[i] / 255) + (data[i + 1] / 255) + (data[i + 2] / 255) + (data[i + 3] / 255)) / 4); //for tint
			data[i] = newR * greylevel; // red
			data[i + 1] = newG * greylevel; // green
			data[i + 2] = newB * greylevel; // blue
			// }
		}
		imageCtx.putImageData(imageData, 0, 0);
	}
	return imageCtx.canvas.toDataURL("image/png");
}

export async function addImageProcess(printImageURL: string, imageSrc: string, context: any, width: number, height: number, rangeValue: number) {
	if (!imageSrc) return context;
	const image = new Image();
	image.src = imageSrc;
	image.crossOrigin = "*";
	await new Promise(res => {
		image.onload = res
	})
	if (!context) return context.drawImage(image, 0, 0, width, height);
	if (!printImageURL) return context.drawImage(image, 0, 0, width, height);
	const cnv = document.createElement('canvas')
	const ctx = cnv.getContext('2d');
	if (!ctx) return context.drawImage(image, 0, 0, width, height);
	ctx.canvas.width = width;
	ctx.canvas.height = height;
	// ctx.save();
	ctx.clearRect(0, 0, width, height);
	ctx.drawImage(image, 0, 0, width, height);
	const imageData = ctx.getImageData(0, 0, width, height);
	const data = imageData.data;
	let img = new Image()
	img.src = printImageURL;
	img.crossOrigin = "*";
	await new Promise(res => {
		img.onload = res
	})
	const ctxBg = document.createElement('canvas').getContext('2d')
	if (!ctxBg) return context.drawImage(image, 0, 0, width, height);
	ctxBg.canvas.width = width;
	ctxBg.canvas.height = height;
	// ctxBg.save();
	ctxBg.globalAlpha = 1;
	ctxBg.globalCompositeOperation = 'multiply';
	ctxBg.clearRect(0, 0, width, height);
	ctxBg.drawImage(image, 0, 0, width, height);
	// ctxBg.drawImage(img, 0, 0, width, height);	
	for (let i = 0; i * img.width * rangeValue < width; i++) {
		for (let j = 0; j * height * rangeValue < height; j++) {
			
			ctxBg.drawImage(img, 0, 0, width, height,  i * img.width * rangeValue, j * height * rangeValue, width * rangeValue, height * rangeValue);
		}
	}
	const bgImageData = ctxBg.getImageData(0, 0, width, height);
	const bgData = bgImageData.data;
	for (let i = 0; i < data.length; i += 4) {
		bgData[i + 3] = data[i + 3]
	}
	ctxBg.putImageData(bgImageData, 0, 0);
	const x = new Image();
	x.src = ctxBg.canvas.toDataURL("image/png");
	await new Promise(res => x.onload = res);
	return context.drawImage(x, 0, 0, width, height);
}

export const getModelData = (url: string = '', activeColor: string = '', activePrint: ObjectType = {}, category = 'silhouette') => {
	return {src: url, color: activeColor, printImageURL: activePrint?.highresurl, category: category}
	
}
