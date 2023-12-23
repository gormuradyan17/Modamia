import CustomizationLoader from 'components/Customization/customizationLoader/CustomizationLoader';
import useImageLoaded from 'utils/hooks/useImageLoaded';

interface Props {
    name: string,
    url: string,
}

const CustomizationGarment = ({
    name,
    url
}: Props) => {
    const isLoaded = useImageLoaded(url)

    return (
        <div className="customization-mannequin">
            {!isLoaded ? <CustomizationLoader /> : <img src={url} alt={name} />}
        </div>
    );
};

export default CustomizationGarment;