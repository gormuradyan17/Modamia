import { BASE_UPLOADS_PRINTS_PREVIEWS_URL } from "shared/constants/genericApiRoutes";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { ChangeEvent, useRef, useState } from "react";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import EditPrint from "./EditPrint";
import { addPrintPalette, removePrintPalette, updatePrint } from "shared/api/dataApi";
import { getAvPrints, getAvPrintsPalettes } from "services/printService";
import { useDispatch, useSelector } from "react-redux";
import { formValidator } from "utils/validators/validator";
import { printFormOptions } from "utils/validators/validatorOptions";
import { printsVariants } from "redux/reducers/printReducer";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PalettesList from "./PalettesList";
import useClickOutSide from "utils/hooks/useClickOutside";

interface Props {
    prints: ArrayType
}

const PrintsList = ({
    prints
}: Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [editablePrint, setEditablePrint] = useState<ObjectType>({})
    const [isVisiblePalettes, setIsVisiblePalettes] = useState<boolean>(false)
    const [printInfo, setPrintInfo] = useState<ObjectType>({})
    const [errors, setErrors] = useState<ObjectType>({})
    const paletteRef = useRef<HTMLDivElement>(null)
    const printVariants = useSelector(printsVariants)
    const dispatch = useDispatch()

    useClickOutSide([paletteRef], () => setIsVisiblePalettes(false), isVisiblePalettes)

    const editPrint = (print: ObjectType) => {
        if (print) {
            setEditablePrint(print)
            setPrintInfo(print)
            setIsVisible(true)
        }
    }

    const closePopup = () => {
        setIsVisible(false)
        setEditablePrint({})
        setPrintInfo({})
        setErrors({})
    }

    const savePrint = async () => {

        const formErrors = formValidator(editablePrint, printFormOptions);
        if (formErrors) { return setErrors(formErrors) };
        if (Object.keys(errors).length) { setErrors({}) };
        async function getNewFile(image: string) {
            const response = await fetch(image);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: blob.type });
            return file
        }
        const newPrint = JSON.parse(JSON.stringify(editablePrint));
        if (editablePrint?.highresurl?.includes('blob')) {
            const file = await getNewFile(editablePrint.highresurl);
            newPrint.highresurl = file;
        }
        if (editablePrint?.previewurl?.includes('blob')) {
            const file = await getNewFile(editablePrint.previewurl);
            newPrint.previewurl = file;
        }
        const formData = new FormData();
        Object.keys(newPrint).forEach((key) => {
            formData.append(key, newPrint[key]);
        });

        await updatePrint(formData)
        await getAvPrints(dispatch)
        closePopup()
    }

    const togglePalettes = (color: ObjectType) => {
        setIsVisiblePalettes(!isVisiblePalettes)
        setEditablePrint(color)
    }

    const manipulatePrintWithPalette = async (event: ChangeEvent<HTMLInputElement>,foundItem: ObjectType, option: ObjectType) => {
        const { target: { checked } } = event
        const { grouped = [] } = foundItem || {};
        const { _id: newVariantId = '' } = option || {}

        if (checked && newVariantId) {
            await addPrintPalette({
                print_id: editablePrint?._id,
                variant_id: newVariantId,
            })
        }
        else {
            const paletteId = grouped?.find((group: ObjectType) => group?.print_id === editablePrint?._id)
            const { _id = '' } = paletteId || {}
            if (_id) {
                await removePrintPalette({
                    palette_id: _id
                })
            }
        }
        await getAvPrintsPalettes(dispatch)
    }

    return (
        <div className="print-list">
            {prints?.map((print: ObjectType) => {

                return <div className="prints-list-print" key={print._id}>
                    <HeadingUI classN="print-list-text _ellipsis" text={print.name} size="16px" />
                    <div className="print-list-image">
                        <img src={`${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${print.previewurl}`} className="print-list-img" alt={print.name} />
                    </div>
                    <span></span>
                    <div className="palettes-list-buttons">
                        <ButtonUI classN="print-list-button" onClick={() => editPrint(print)}>Edit</ButtonUI>
                        <div {...(print?._id === editablePrint?._id) && { ref: paletteRef }}>
                            <ButtonUI classN="print-button" onClick={() => togglePalettes(print)}><FontAwesomeIcon icon={faPalette} /></ButtonUI>
                            {isVisiblePalettes && print?._id === editablePrint?._id &&
                                <PalettesList
                                    activePrint={editablePrint}
                                    onChange={(e: any, foundItem: any, option: any) => manipulatePrintWithPalette(e, foundItem, option)}
                                    options={printVariants}
                                />
                            }
                        </div>
                    </div>
                </div>
            })}
            {isVisible && <PopupUI callback={closePopup}>
                <EditPrint
                    callback={savePrint}
                    closePopup={closePopup}
                    print={editablePrint}
                    errors={errors}
                    setPrint={setEditablePrint}
                    printInfo={printInfo}
                />
            </PopupUI>}
        </div>
    );
};

export default PrintsList;