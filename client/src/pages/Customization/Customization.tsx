import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import {addModel, addImageProcess, getModelData} from "../../shared/helpers/canvasHelpers";
import {
	width,
	height,
	// modelData,
	M_I,
	BASE_UPLOADS_MANNEQUINS_FRONTS_URL,
	B_I2,
	T_I4,
} from "../../shared/constants/genericApiRoutes";
import "./style.scss";
import CustomizationFeatures from "components/Customization/features/CustomizationFeatures";
import Container from "layout/Container/Container";
import CustomizationInfo from "components/Customization/customizationInfo/CustomizationInfo";
import {useDispatch, useSelector} from "react-redux";
import {
	availableMannequins,
	getMannequinActiveCategory,
	getMannequinActiveColor,
	getMannequinActivePrint,
	getMannequinLoading,
	setMannequinLoading
} from "redux/reducers/mannequinReducer";
import {getAvMannequins} from "services/mannequinService";
import {ArrayType} from "../../shared/helpers/helpers";
import CustomizationLoader from "components/Customization/customizationLoader/CustomizationLoader";

const Customization = () => {
	const [activeOptions, setActiveOptions] = useState<Record<string, any>[]>([]);
	const mannequins = useSelector(availableMannequins)
	const activeColor = useSelector(getMannequinActiveColor)
	const activePrint = useSelector(getMannequinActivePrint)
	const activeCategory = useSelector(getMannequinActiveCategory)
	const isLoading = useSelector(getMannequinLoading)
	const dispatch = useDispatch()
	// const [subTabs, setSubTabs] = useState<Record<string, string | boolean>[]>([
	// 	{ label: "All Over", isActive: true },
	// 	{ label: "Top", isActive: false },
	// 	{ label: "Bottom", isActive: false },
	// 	{ label: "Sleeve", isActive: false }
	// ])
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const [rangeValue, setRangeValue] = useState<number>(0.1);
	
	const canvasModelInit = (num: number, modData: ArrayType) => {
		if (!canvasRef.current || !mannequins?.length) return;
		dispatch(setMannequinLoading(true))
		const canvas = canvasRef.current;
		canvas.width = width;
		canvas.height = height;
		let ctx = canvasRef.current?.getContext("2d");
		const img = new Image();
		img.src = `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequins?.[1]?.fronturl}`
		// img.src = M_I;
		img.onload = async () => {
			await ctx?.drawImage(img, 0, 0, width, height);
			for (let i = 0; i < modData.length; i++) {
				if (modData[i].category === 'color') {
					await addModel(modData[i].src, modData[i].color, ctx, width, height);
				} else if (modData[i].category === 'print') {
					await addImageProcess(modData[i].printImageURL, modData[i].src, ctx, width, height, num);
				} else {
					await addModel(modData[i].src, '', ctx, width, height);
				}
			}
			await dispatch(setMannequinLoading(false))
		};
	};
	
	useEffect(() => {
		getAvMannequins(dispatch)
	}, [])

	useEffect(() => {
		if (mannequins?.length) {
			const drawManequin = async () => {
				const data = await getModelData(activeColor, activePrint, activeCategory)
				await canvasModelInit(rangeValue, data);
			}
			drawManequin()
			// canvasModelInit(rangeValue, getModelData(activeColor, activePrint));
		}
	}, [mannequins, activeColor, activePrint, activeCategory]);
	
	// useEffect(() => {
	// 	// if (mannequins?.length) {
	// 	// canvasModelInit(rangeValue, modelData);
	// 	canvasModelInit(rangeValue, getModelData(activeColor, activePrint, activeCategory));
	// 	// setModelData(getModelData(activeColor, activePrint, activeCategory))
	// 	// }
	// }, [activeColor, activePrint, activeCategory])
	
	// function changRange(e: ChangeEvent<HTMLInputElement>) {
	// console.log(e.target.value);
	// setRangeValue(Number(e.target.value));
	// canvasModelInit(Number(e.target.value));
	// }
	
	const infoData = {
		name: 'the juliette dress',
		price: '59,775'
	}
	
	return (
		<Container>
			<div className="customization">
				<div className="customization-body">
					{isLoading && <CustomizationLoader />}
					<canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
				</div>
				<div className="customization-body">
					<CustomizationInfo infoData={infoData}/>
					<CustomizationFeatures/>
				</div>
			{/* <input type="range" min="0.01" max="1" step="0.01" value={rangeValue} onChange={changRange}/> */}
				
						
			</div>
		</Container>
	);
};

export default Customization;
