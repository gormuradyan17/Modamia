import GarmentsList from "components/garment/garmentsList/GarmentsList";
import MainBody from "layout/MainBody/MainBody";
import MainHead from "layout/MainHead/MainHead";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAvSearchedGarments } from "services/garmentService";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import useDebounce from "utils/hooks/useDebounce";
import './style.scss'

const Garments = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [criteria, setCriteria] = useState<string>('');
    const [searched, setSearched] = useState<boolean>(false);
    const debouncedCriteria = useDebounce(criteria, 500);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        if (!criteria?.length) return setCriteria(value.trim())
        setCriteria(value)
        // setSearched(true)
    }

    const getGarmentsByCriteria = async () => {
        return await getAvSearchedGarments(dispatch,criteria)
    }

    useEffect(() => {
        // console.log(searched, criteria)
        // if (searched) {
            getGarmentsByCriteria()
            // setSearched(false)
        // }
    }, [debouncedCriteria]);

    return (
        <div>
            <MainHead text="Customize Garments" />
            <ButtonUI classN="add-button" onClick={() => navigate('/garments/new')} type="button">New Garment</ButtonUI>
            <MainBody>
                <div className="garments-content-list">
                    <HeadingUI text="Garments List" size="22px" />
                    <InputUI
                        classN="garment-content-input"
                        name="search"
                        callback={handleInputChange}
                        value={criteria}
                    />
                    <GarmentsList />
                </div>
            </MainBody>
        </div>
    );
};

export default Garments;