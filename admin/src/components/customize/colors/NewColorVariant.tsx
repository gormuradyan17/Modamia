import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { getAvColorsVariants } from "services/colorService";
import { addColorVariant } from "shared/api/dataApi";
import InputUI from "shared/ui/InputUI/InputUI";

const NewColorVariant = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [newVariant, setNewVariant] = useState<string>('')
    const dispatch = useDispatch()
    
    const toggleNewVariant = () => {
        setIsVisible(!isVisible)
        setNewVariant('')
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event;
        setNewVariant(value)

    }

    const saveVariant = async () => {
        if (newVariant) {
            await addColorVariant({
                name: newVariant
            })
            await getAvColorsVariants(dispatch)
        }
        setIsVisible(!isVisible)
        setNewVariant('')
    }

    return (
        <div className="new-item-variant">
            <button
                type="button"
                onClick={toggleNewVariant}
            >Add new type +</button>
            {isVisible && <div className="new-item-variant-save">
                <InputUI
                    placeholder="New type"
                    value={newVariant}
                    name="newType"
                    callback={handleInputChange}
                />
                <button
                    type="button"
                    onClick={saveVariant}
                ><FontAwesomeIcon icon={faSave} /></button>
            </div>}
        </div>
    );
};

export default NewColorVariant;