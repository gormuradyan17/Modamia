import { ChangeEvent, useState } from "react";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'
import { ArrayType, ObjectType, appColor } from "shared/helpers/helpers";
import DropzoneUI from "shared/ui/DropzoneUI/DropzoneUI";
import { BASE_UPLOADS_MANNEQUINS_BACKS_URL, BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from "shared/constants/genericApiRoutes";
import { mannequinFilesOptions } from "utils/validators/validatorOptions";
import { formValidator } from "utils/validators/validator";

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    mannequin: ObjectType,
    setMannequin: CallbackSkeletonType,
    errors: ObjectType,
    mannequinInfo: ObjectType
}

const EditMannequin = ({
    callback,
    closePopup,
    mannequin,
    setMannequin,
    errors,
    mannequinInfo
}: Props) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setMannequin({ ...mannequin, [name]: value })
    }
    const [fileErrors, setFileErrors] = useState<ObjectType>({})

    const editImage = (files: ArrayType, name: string) => {
        setMannequin({
            ...mannequin,
            [name]: URL.createObjectURL(files[0] as any)
        })
    }

    const validateFiles = (files: ArrayType, field: string) => {
        let err = {}
        files?.map(file => {
            const obj = {
                [field]: file?.name
            }
            err = formValidator(obj, mannequinFilesOptions);
        })
        if (Object.keys(err).length) {
            setFileErrors(err)
            return false
        }
        if (Object.keys(fileErrors).length) { setFileErrors({}) };
        return true
    }

    return (
        <div className="new-mannequin">
            <HeadingUI text={`Edit ${mannequinInfo.name} mannequin`} align="center" color="#aa8a75" />
            <div className="new-mannequin-inputs">
                <InputUI
                    placeholder="Name"
                    value={mannequin?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Width"
                    value={mannequin?.width}
                    label="Width*"
                    name="width"
                    type='number'
                    error={errors?.width?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Height"
                    value={mannequin?.height}
                    label="Height*"
                    name="height"
                    type='number'
                    error={errors?.height?.message || ''}
                    callback={handleInputChange}
                />
            </div>
            <div className="new-mannequin-zone">
                <HeadingUI text='Front image' size='18px' color={appColor} />
                <DropzoneUI
                    width="480px"
                    height="260px"
                    name='fronturl'
                    classN="new-mannequin-dropzone"
                    validationCallback={(files) => validateFiles(files, 'fronturl')}
                    error={fileErrors?.fronturl?.message || ''}
                    onChange={(files: ArrayType) => editImage(files, 'fronturl')}
                    defaultFiles={[{
                        ...mannequin,
                        preview: mannequin.fronturl?.includes('blob') ? mannequin.fronturl : `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin.fronturl}`
                    }]}
                />
            </div>
            <div className="new-mannequin-zone">
                <HeadingUI text='Back image' size='18px' color={appColor} />
                <DropzoneUI
                    width="480px"
                    height="260px"
                    name='backurl'
                    classN="new-mannequin-dropzone"
                    onChange={(files: ArrayType) => editImage(files, 'backurl')}
                    validationCallback={(files) => validateFiles(files, 'backurl')}
                    error={fileErrors?.backurl?.message || ''}
                    defaultFiles={[{
                        ...mannequin,
                        preview: mannequin.backurl?.includes('blob') ? mannequin.backurl : `${BASE_UPLOADS_MANNEQUINS_BACKS_URL}${mannequin.backurl}`
                    }]}
                />
            </div>
            <div className="new-mannequin-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Discard</ButtonUI>
                <ButtonUI onClick={() => callback()}>Save</ButtonUI>
            </div>
        </div>
    );
};

export default EditMannequin;