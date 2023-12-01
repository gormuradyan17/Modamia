import { lazy, useState } from "react";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import CustomizationTabs from "../ui/CustomizationTabs";

const SilhouetteContent = lazy(() => import('../contents/SilhouetteContent/SilhouetteContent'))
const ColorContent = lazy(() => import('../contents/ColorContent/ColorContent'))
const PrintContent = lazy(() => import('../contents/PrintContent/PrintContent'))

const CustomizationFeatures = () => {
	const [tabs] = useState<Record<string, any>[]>([
		{
			id: 1,
			heading: 'Silhouette',
			content: <SilhouetteContent />
		},
		{
			id:2,
			heading: 'Color',
			content: <ColorContent  />
		},
		{
			id: 3,
			heading: 'Print',
			content: <PrintContent />
		},
	])

    return (
        <div className="customization-features">
			<HeadingUI text="Customize" color="#a57867" size="20px" />
            <CustomizationTabs tabs={tabs}  />
        </div>
    );
};

export default CustomizationFeatures;