import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { addModel, addImageProcess, getModelData } from "../../shared/helpers/canvasHelpers";
import {
	width,
	height,
	BASE_UPLOADS_MANNEQUINS_FRONTS_URL,
	B_I2,
	T_I4,
} from "../../shared/constants/genericApiRoutes";
import "./style.scss";
import CustomizationFeatures from "components/Customization/features/CustomizationFeatures";
import Container from "layout/Container/Container";
import CustomizationInfo from "components/Customization/customizationInfo/CustomizationInfo";
import { useDispatch, useSelector } from "react-redux";
import {
	availableMannequins,
	getMannequinActiveCategory,
	getMannequinActiveColor,
	getMannequinActivePrint,
	getMannequinLoading,
	getMannequinPosition,
	getMannequinType,
	getMannequinUrl,
	setMannequinLoading
} from "redux/reducers/mannequinReducer";
import { getAvMannequins } from "services/mannequinService";
import { ArrayType } from "../../shared/helpers/helpers";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";
import SilhouettePositionBtn from "components/Customization/contents/SilhouetteContent/SilhouettePositionBtn";

const Customization = () => {
	const mannequins = useSelector(availableMannequins)
	const activeColor = useSelector(getMannequinActiveColor)
	const activePrint = useSelector(getMannequinActivePrint)
	const activeCategory = useSelector(getMannequinActiveCategory)
	const isLoading = useSelector(getMannequinLoading)
	const activeImgUrl = useSelector(getMannequinUrl)
	const activeType = useSelector(getMannequinType)
	const frontBack = useSelector(getMannequinPosition)
	const [modelData, setModelData] = useState<any>([
		{ src: B_I2, color: activeColor, printImageURL: activePrint?.highresurl, activeCategory },
		{ src: T_I4, color: activeColor, printImageURL: activePrint?.highresurl, activeCategory }
	])
	const dispatch = useDispatch()
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [rangeValue, setRangeValue] = useState<number>(0.1);

	const canvasModelInit = (num: number, modData: ArrayType, frontBack: string = "front") => {
		console.log(num);

		if (!canvasRef.current || !mannequins?.length) return;
		dispatch(setMannequinLoading(true))
		const canvas = canvasRef.current;
		canvas.width = width;
		canvas.height = height;
		let ctx = canvasRef.current?.getContext("2d");
		const img = new Image();
		img.src = frontBack === "front" ? `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequins?.[1]?.fronturl}` : `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequins?.[1]?.backurl}`
		// img.src = M_I;
		img.onload = async () => {

			await ctx?.drawImage(img, 0, 0, width, height);
			for (let i = 0; i < modData.length; i++) {
				console.log(modData, "7454");

				if (modData[i].activeCategory === 'color') {
					await addModel(modData[i].src, modData[i].color, ctx, width, height);
				} else if (modData[i].activeCategory === 'print') {
					console.log(1111);

					await addImageProcess(modData[i].printImageURL, modData[i].src, ctx, width, height, num);
				} else {
					await addModel(modData[i].src, modData[i].color, ctx, width, height);
				}
			}
			await dispatch(setMannequinLoading(false))
		};
	};

	useEffect(() => {
		getAvMannequins(dispatch)
	}, [])

	useEffect(() => {
		console.log(activeCategory, "ccsca");

		if (mannequins?.length) {
			const drawManequin = async () => {
				let data: any = modelData

				for (let i = 0; i < modelData.length; i++) {
					modelData[i].activeCategory = activeCategory;
					modelData[i].printImageURL = activePrint?.highresurl;
					switch (activeType) {
						case "tops":
							modelData[1].src = activeImgUrl;
							setModelData(modelData)
							break;
						case "bottoms":
							modelData[0].src = activeImgUrl
							setModelData(modelData)
							break;
						case "top":
							modelData[1].color = activeColor
							setModelData(modelData)
							break;
						case "bottom":
							modelData[0].color = activeColor
							setModelData(modelData)
							break;
						default:
							modelData[1].color = activeColor;
							modelData[0].color = activeColor;
							setModelData(modelData)
					}

				}
				console.log(data, 8787);
				console.log(activeCategory);

				await canvasModelInit(.2, modelData, frontBack);
			}
			drawManequin()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps

	}, [mannequins, activeColor, activePrint, activeCategory, activeImgUrl, modelData, activeType, frontBack]);

	function changRange(e: ChangeEvent<HTMLInputElement>) {
		// console.log(e.target.value);
		// setRangeValue(Number(e.target.value));
		// canvasModelInit(Number(e.target.value), getModelData(activeColor, activePrint, activeCategory));
	}

	const infoData = {
		name: 'the juliette dress',
		price: '59,775'
	}

	return (
		<Container>
			<div className="customization">
				<SilhouettePositionBtn />
				<div className="customization-body">
					{isLoading && <CustomizationLoader />}
					<canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
				</div>
				<div className="customization-body">
					<CustomizationInfo infoData={infoData} />
					<CustomizationFeatures />
				</div>
				{/* <input type="range" min="0.01" max="1" step="0.01" value={rangeValue} onChange={changRange} /> */}


			</div>
		</Container>
	);
};

export default Customization;
