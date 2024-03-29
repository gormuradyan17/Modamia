import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { printsVariants, setPrintsVariantsData } from "redux/reducers/printReducer";
import { getAvPrintsVariants } from "services/printService";
import { addPrintVariant } from "shared/api/dataApi";
import InputUI from "shared/ui/InputUI/InputUI";

const NewPrintVariant = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [newVariant, setNewVariant] = useState<string>('')
    const dispatch = useDispatch()
    const variants = useSelector(printsVariants)
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
            await addPrintVariant({
                name: newVariant
            }).then(res => {
                dispatch(setPrintsVariantsData([
                    ...variants,
                    res
                ]))
            })
        }
        setIsVisible(!isVisible)
        setNewVariant('')
    }
    return (
        <div className="new-item-variant">
            <button
                type="button"
                onClick={toggleNewVariant}
            >Add new palette +</button>
            {isVisible && <div className="new-item-variant-save">
                <InputUI
                    placeholder="New palette"
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

export default NewPrintVariant;