import GarmentsList from "components/garment/garmentsList/GarmentsList";
import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { useNavigate } from "react-router-dom";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";

const Garments = () => {

    const navigate = useNavigate()

    return (
        <div>
            <MainHead text="Customize Garments" />
            <ButtonUI classN="add-button" onClick={() => navigate('/garments/new')} type="button">New Garment</ButtonUI>
            <MainBody>
                <div className="garments-content-list">
                    <HeadingUI text="Garments List" size="22px" />
                    <GarmentsList />
                </div>
            </MainBody>
        </div>
    );
};

export default Garments;