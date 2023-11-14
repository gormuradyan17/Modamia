import { BASE_UPLOADS_PRINTS_PREVIEWS_URL, BASE_UPLOADS_URL } from "shared/constants/genericApiRoutes";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'
import { useState } from "react";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import EditPrint from "./EditPrint";
import { updatePrint } from "shared/api/dataApi";
import { getAvPrints } from "services/printService";
import { useDispatch } from "react-redux";
import { formValidator } from "utils/validators/validator";
import { printFormOptions } from "utils/validators/validatorOptions";

interface Props {
    prints: ArrayType
}

const PrintsList = ({
    prints
}: Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [editablePrint, setEditablePrint] = useState<ObjectType>({})
    const [printInfo, setPrintInfo] = useState<ObjectType>({})
    const [errors, setErrors] = useState<ObjectType>({})
    const dispatch = useDispatch()
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

    return (
        <div className="print-list">
            {prints?.map((print: ObjectType) => {
                return <div className="prints-list-print" key={print._id}>
                    <HeadingUI classN="print-list-text _ellipsis" text={print.name} size="16px" />
                    <div className="print-list-image">
                        <img src={`${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${print.previewurl}`} className="print-list-img" alt={print.name} />
                    </div>
                    <span></span>
                    <ButtonUI classN="print-list-button" onClick={() => editPrint(print)}>Edit</ButtonUI>
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