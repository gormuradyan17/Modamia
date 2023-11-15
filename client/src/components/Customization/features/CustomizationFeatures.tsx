import { lazy, useState } from "react";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import TabUI from "shared/ui/TabUI/TabUI";

const SilhouetteContent = lazy(() => import('../contents/SilhouetteContent/SilhouetteContent'))
const ColorContent = lazy(() => import('../contents/ColorContent/ColorContent'))
const PrintContent = lazy(() => import('../contents/PrintContent/PrintContent'))

const CustomizationFeatures = () => {

	const [tabs, setTabs] = useState<Record<string, any>[]>([
		{
			id: 'Silhouette',
			heading: 'Silhouette',
			content: <SilhouetteContent />
		},
		{
			id: 'Color',
			heading: 'Color',
			content: <ColorContent />
		},
		{
			id: 'Print',
			heading: 'Print',
			content: <PrintContent />
		},
	])

    return (
        <div className="customization-features">
			<HeadingUI text="Customize" color="#a57867" size="20px" />
            <TabUI tabs={tabs} />
        </div>
    );
};

export default CustomizationFeatures;