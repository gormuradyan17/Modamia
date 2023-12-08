import { BASE_UPLOADS_MANNEQUINS_BACKS_URL, BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from "shared/constants/genericApiRoutes";
import { updateArrWithElem } from "./helpers";

const arr: ({ img: HTMLImageElement; position: string; widthImg: string; heightImg: any; order: number;id:string,frontBack:string } | undefined)[]=[]

export async function addModel(elem:any, width: number, height: number,frontBack:string,updateElem:any,fromBasket:boolean) {	
	const src =elem.src || updateElem.src;
	const color =elem.color ||  updateElem.color;
	const position =elem.position ||  updateElem.position;
	const order =elem.order ||  updateElem.order ;
	const widthImg = fromBasket ? elem.width/10 : elem.width || updateElem.width;
	const heightImg = fromBasket ? elem.height/10 : elem.height ||  updateElem.height;
	const id = elem.id || updateElem.id 	
	if (!src) return;
	const img: HTMLImageElement = new Image();
  
	img.src = await colorImage(src, color, width, height);
	await new Promise((res) => {
	  img.onload = res;
	});
	
	return { img, position,color, widthImg, heightImg, order,frontBack,id };
  }
  
 
  async function drawImagesInOrder(imagesToDraw: any[], context: any) {	
		
	const sortedImages = imagesToDraw.sort((a, b) => a.order - b.order);  
	for (const image of sortedImages) {		
	  const { img, position, widthImg, heightImg } = image;
	  
	  context.drawImage(img, 0, position.includes('bottom') ? context.canvas.height - heightImg : 0, widthImg, heightImg);
	}
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
	
	imageCtx.clearRect(0, 0, width, height);
	imageCtx.drawImage(img, 0, 0,  width, height);	
	
	
	if (color) {
		const imageData = imageCtx.getImageData(0, 0,  width, height);
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


export async function addImageProcess(printImageURL: string, imageSrc: string, context: any, width: number, height: number, rangeValue: number,position:string,widthImage:any,heightImage:any) {
	if (!imageSrc) return context;
	const image = new Image();
	image.src = imageSrc;
	image.crossOrigin = "*";

	await new Promise(res => {
		image.onload = res
	})
	
	if (!context) return context.drawImage(image, 0, 0, width, height);
	if (!printImageURL){
		context.drawImage(image, 0, position === 'bottom' ? height-heightImage : 0, widthImage, heightImage);
	
	} 
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
	
	ctxBg.globalAlpha = 1;
	ctxBg.globalCompositeOperation = 'multiply';
	ctxBg.clearRect(0, 0, width, height);
	ctxBg.drawImage(image, 0, 0, width, height);
	for (let i = 0; i * img.width * rangeValue < width; i++) {
		for (let j = 0; j * height * rangeValue < height; j++) {
			ctxBg.drawImage(img, 0, 0, img.width, img.height,  i * width * rangeValue, j * height * rangeValue, width * rangeValue, height * rangeValue);
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
	return	context.drawImage(x, 0, position.includes('bottom') ? height-heightImage : 0,  widthImage, heightImage);
		
}

let elem: { img: HTMLImageElement; position: string; widthImg: string; heightImg: any; order: number;id:string,frontBack:string } | undefined;
export const canvasModelInit = (num: number, modData: any, frontBack: string = "fronts", canvasRef: any, mannequin: any,updatedModelData:any,fromBasket:boolean) => {	
	if (!canvasRef.current || !mannequin?._id) return;
	const canvas = canvasRef.current; 
	let ctx = canvas?.getContext("2d");
	const img = new Image();
	img.src = frontBack === "fronts" ? `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin?.fronturl}` : frontBack === "backs" ? `${BASE_UPLOADS_MANNEQUINS_BACKS_URL}${mannequin?.backurl}` : `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin?.fronturl}`
	img.onload = async () => {
		const canvasWidth=fromBasket ? mannequin.width/10 :  mannequin.width
		const canvasHeight=fromBasket ? mannequin.height/10 :  mannequin.height
		canvasRef.current.width = canvasWidth
		canvasRef.current.height = canvasHeight

		const aspectRatio = canvasWidth / canvasHeight;

		let drawWidth = canvasWidth;
		let drawHeight = canvasWidth / aspectRatio;

		if (drawHeight > canvasHeight) {
			drawHeight = canvasHeight;
			drawWidth = canvasHeight * aspectRatio;
		}

		const x = (canvasWidth - drawWidth) / 2;
		const y = (canvasHeight - drawHeight) / 2;

		ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx?.drawImage(img, x, y, drawWidth, drawHeight);
		const frontSleeves = arr.findIndex((el) =>el?.frontBack==="sleeves");
		
		if(!modData.sleeves[0].src && arr.length>2){		
			arr.splice(frontSleeves,1)
		}
		for (let i = 0; i < modData[frontBack].length; i++) {
		
			if (modData[frontBack][i].activeCategory === 'color') { 

				elem=await addModel(modData[frontBack][i] , canvasWidth, canvasHeight,frontBack,updatedModelData[frontBack][i],fromBasket);			
				updateArrWithElem(elem,arr,frontBack)
				if(frontBack==="sleeves"){
					elem=await addModel(modData.fronts[i] , canvasWidth, canvasHeight,"fronts",updatedModelData.fronts[i],fromBasket);			
					updateArrWithElem(elem,arr,frontBack)
				 }
			} 
			else if (modData[frontBack][i].activeCategory === 'print') {	
				 addImageProcess(modData[frontBack][i].printImageURL, modData[frontBack]?.[i]?.src ? modData[frontBack]?.[i]?.src : updatedModelData[frontBack]?.[i]?.src , ctx, canvasWidth, canvasHeight, num, modData[frontBack][i].position ? modData[frontBack][i].position : updatedModelData[frontBack][i].position,modData[frontBack]?.[i]?.width ? modData[frontBack]?.[i]?.width : updatedModelData[frontBack]?.[i]?.width ,modData[frontBack]?.[i]?.height ? modData[frontBack]?.[i]?.height : updatedModelData[frontBack]?.[i]?.height );

                 if(frontBack==="sleeves"){
					addImageProcess(modData.fronts[i].printImageURL, modData.fronts?.[i]?.src ? modData.fronts?.[i]?.src : updatedModelData.fronts?.[i]?.src , ctx, canvasWidth, canvasHeight, num, modData.fronts[i].position,modData.fronts?.[i]?.width ? modData.fronts?.[i]?.width : updatedModelData.fronts?.[i]?.width ,modData.fronts?.[i]?.height ? modData.fronts?.[i]?.height : updatedModelData.fronts?.[i]?.height );

				 }
			}
			 else {						
				elem=await addModel(modData[frontBack]?.[i] , canvasWidth, canvasHeight,frontBack,updatedModelData[frontBack][i],fromBasket);			
				updateArrWithElem(elem,arr,frontBack)
			}			
		}			
		await drawImagesInOrder(arr, ctx);
	};


};

