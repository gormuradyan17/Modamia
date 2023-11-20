import { ChangeEvent, useState } from "react";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'
import { ArrayType, ObjectType, appColor, getActiveItemTypeById, getDropdownOptionsFromItemsVariants } from "shared/helpers/helpers";
import DropzoneUI from "shared/ui/DropzoneUI/DropzoneUI";
import { BASE_UPLOADS_PRINTS_HIGHS_URL, BASE_UPLOADS_PRINTS_PREVIEWS_URL } from "shared/constants/genericApiRoutes";
import { printFilesOptions } from "utils/validators/validatorOptions";
import { formValidator } from "utils/validators/validator";
import DropdownUI from "shared/ui/DropdownUI/DropdownUI";
import { useSelector } from "react-redux";
import { printsVariants } from "redux/reducers/printReducer";

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    print: ObjectType,
    setPrint: CallbackSkeletonType,
    errors: ObjectType,
    printInfo: ObjectType
}

const EditPrint = ({
    callback,
    closePopup,
    print,
    setPrint,
    errors,
    printInfo
}: Props) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setPrint({ ...print, [name]: value })
    }
    const [fileErrors, setFileErrors] = useState<ObjectType>({})
    const printVariants = getDropdownOptionsFromItemsVariants(useSelector(printsVariants)) || [{}]
    
    const editImage = (files: ArrayType, name: string) => {
        setPrint({
            ...print,
            [name]: URL.createObjectURL(files[0] as any)
        })
    }

    const validateFiles = (files: ArrayType, field: string) => {
        let err = {}
        files?.map(file => {
            const obj = {
                [field]: file?.name
            }
            err = formValidator(obj, printFilesOptions);
        })
        if (Object.keys(err).length) {
            setFileErrors(err)
            return false
        }
        if (Object.keys(fileErrors).length) { setFileErrors({}) };
        return true
    }

    const handleDropdownChange = (data: ObjectType) => {
        const value = data.id
        setPrint({ ...print, printVariant: value })
    }


    return (
        <div className="new-print">
            <HeadingUI text={`Edit ${printInfo.name} print`} align="center" color="#aa8a75" />
            <div className="new-print-inputs">
                <InputUI
                    placeholder="Name"
                    value={print?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    type='number'
                    placeholder="Price"
                    value={print?.price}
                    label="Price*"
                    name="price"
                    error={errors?.price?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Tags"
                    value={print?.tags}
                    label="Tags"
                    name="tags"
                    callback={handleInputChange}
                />
            </div>
            <div className="new-print-variants">
                <DropdownUI
                    options={printVariants}
                    onChange={(data) => handleDropdownChange(data)}
                    label="Print type"
                    defaultValue={getActiveItemTypeById(printVariants, print?.printVariant)}
                />
            </div>
            <div className="new-print-zone">
                <HeadingUI text='High res image' size='18px' color={appColor} />
                <DropzoneUI
                    width="480px"
                    height="160px"
                    name='highresurl'
                    validationCallback={(files) => validateFiles(files, 'highresurl')}
                    error={fileErrors?.highresurl?.message || ''}
                    onChange={(files: ArrayType) => editImage(files, 'highresurl')}
                    defaultFiles={[{
                        ...print,
                        preview: print.highresurl?.includes('blob') ? print.highresurl : `${BASE_UPLOADS_PRINTS_HIGHS_URL}${print.highresurl}`
                    }]}
                />
            </div>
            <div className="new-print-zone">
                <HeadingUI text='Preview image' size='18px' color={appColor} />
                <DropzoneUI
                    width="480px"
                    height="160px"
                    name='previewurl'
                    onChange={(files: ArrayType) => editImage(files, 'previewurl')}
                    validationCallback={(files) => validateFiles(files, 'previewurl')}
                    error={fileErrors?.previewurl?.message || ''}
                    defaultFiles={[{
                        ...print,
                        preview: print.previewurl?.includes('blob') ? print.previewurl : `${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${print.previewurl}`
                    }]}
                />
            </div>
            <div className="new-print-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Discard</ButtonUI>
                <ButtonUI onClick={() => callback()}>Save</ButtonUI>
            </div>
        </div>
    );
};

export default EditPrint;