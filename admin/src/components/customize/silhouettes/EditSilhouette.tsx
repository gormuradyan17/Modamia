import { ChangeEvent, useState } from "react";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'
import { ArrayType, ObjectType, appColor, getSilhouetteFullPath, silhouetteOrientationOptions, silhouetteTypeOptions } from "shared/helpers/helpers";
import DropzoneUI from "shared/ui/DropzoneUI/DropzoneUI";
import { silhouetteFilesOptions } from "utils/validators/validatorOptions";
import { formValidator } from "utils/validators/validator";
import DropdownUI from "shared/ui/DropdownUI/DropdownUI";

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    silhouette: ObjectType,
    setSilhouette: CallbackSkeletonType,
    errors: ObjectType,
    silhouetteInfo: ObjectType
}

const EditSilhouette = ({
    callback,
    closePopup,
    silhouette,
    setSilhouette,
    errors,
    silhouetteInfo
}: Props) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setSilhouette({ ...silhouette, [name]: value })
    }
    const [fileErrors, setFileErrors] = useState<ObjectType>({})

    const editImage = (files: ArrayType) => {
        setSilhouette({
            ...silhouette,
            silhouetteurl: URL.createObjectURL(files[0] as any)
        })
    }

    const validateFiles = (files: ArrayType, field: string) => {
        let err = {}
        files?.map(file => {
            const obj = {
                [field]: file?.name
            }
            err = formValidator(obj, silhouetteFilesOptions);
        })
        if (Object.keys(err).length) {
            setFileErrors(err)
            return false
        }
        if (Object.keys(fileErrors).length) { setFileErrors({}) };
        return true
    }

    const handleDropdownChange = (data: ObjectType, name: string) => {
        const value = data.value
        setSilhouette({
            ...silhouette,
            [name]: value
        })
    }

    return (
        <div className="new-print">
            <HeadingUI text={`Edit silhouette ${silhouetteInfo.name}`} align="center" color={appColor} />
            <div className="new-silhouette-inputs">
                <InputUI
                    placeholder="Name"
                    value={silhouette?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    type='number'
                    placeholder="Price"
                    value={silhouette?.price > 0 ? silhouette?.price : ''}
                    label="Price*"
                    name="price"
                    error={errors?.price?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Width"
                    value={silhouette?.width}
                    label="Width*"
                    name="width"
                    type='number'
                    error={errors?.width?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Height"
                    value={silhouette?.height}
                    label="Height*"
                    name="height"
                    type='number'
                    error={errors?.height?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Tags"
                    value={silhouette?.tags}
                    label="Tags"
                    name="tags"
                    callback={handleInputChange}
                />
                <DropdownUI
                    options={silhouetteTypeOptions}
                    onChange={(data) => handleDropdownChange(data, 'type')}
                    label="Silhouette type*"
                    error={errors?.type?.message || ''}
                    defaultValue={silhouette?.type}
                />
                <DropdownUI
                    options={silhouetteOrientationOptions}
                    onChange={(data) => handleDropdownChange(data, 'orientation')}
                    label="Silhouette orientation*"
                    error={errors?.orientation?.message || ''}
                    defaultValue={silhouette?.orientation}
                />
                <div className="new-silhouette-zone">
                    <HeadingUI text='Silhouette image' size='18px' color={appColor} />
                    <DropzoneUI
                        width="480px"
                        height="160px"
                        name="silhouetteurl"
                        validationCallback={(files) => validateFiles(files, 'silhouetteurl')}
                        error={fileErrors?.silhouetteurl?.message || ''}
                        onChange={(files: ArrayType) => editImage(files)}
                        defaultFiles={[{
                            ...silhouette,
                            preview: silhouette.silhouetteurl?.includes('blob') ? silhouette.silhouetteurl : `${getSilhouetteFullPath(silhouetteInfo.type)}${silhouette.silhouetteurl}`
                        }]}
                    />
                </div>
            </div>
            <div className="new-silhouette-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Discard</ButtonUI>
                <ButtonUI onClick={() => callback()}>Save</ButtonUI>
            </div>
        </div>
    );
};

export default EditSilhouette;