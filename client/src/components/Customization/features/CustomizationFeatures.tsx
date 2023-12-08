import { ChangeEvent, lazy, useState } from "react";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import CustomizationTabs from "../ui/CustomizationTabs";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import './style.scss'

const SilhouetteContent = lazy(() => import('../contents/SilhouetteContent/SilhouetteContent'))
const ColorContent = lazy(() => import('../contents/ColorContent/ColorContent'))
const PrintContent = lazy(() => import('../contents/PrintContent/PrintContent'))

interface Props {
	range: number,
	setRange: CallbackSkeletonType
}

const CustomizationFeatures = ({
	range,
	setRange,
}: Props) => {
	const [tabs] = useState<Record<string, any>[]>([
		{
			id: 1,
			heading: 'Silhouette',
			content: <SilhouetteContent />
		},
		{
			id: 2,
			heading: 'Color',
			content: <ColorContent />
		},
		{
			id: 3,
			heading: 'Print',
			content: <PrintContent />
		},
	])

	const changRange = (e: ChangeEvent<HTMLInputElement>) => {
		setRange(Number(e.target.value));
	}

	return (
		<div className="customization-features">
			<div className="customization-features-tops">
				<HeadingUI text="Customize" color="#a57867" size="20px" />
				<input
					className="customization-features-range"
					type="range"
					min="0.01"
					max="1"
					step="0.01"
					value={range}
					onChange={changRange}
				/>
			</div>
			<CustomizationTabs tabs={tabs} />
		</div>
	);
};

export default CustomizationFeatures;