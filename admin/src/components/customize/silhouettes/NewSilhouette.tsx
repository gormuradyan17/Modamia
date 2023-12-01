import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableSilhouettes, setSilhouetteData, setSilhouetteState, silhouetteDetails } from "redux/reducers/silhouetteReducer";
import { ArrayType, ObjectType, appColor, silhouetteOrientationOptions, silhouetteTypeOptions } from "shared/helpers/helpers";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import DropdownUI from "shared/ui/DropdownUI/DropdownUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import { formValidator } from "utils/validators/validator";
import { silhouetteFilesOptions, silhouetteFormOptions } from "utils/validators/validatorOptions";
import DropzoneUI from "shared/ui/DropzoneUI/DropzoneUI";
import { addSilhouette } from "shared/api/dataApi";
import { getAvSilhouettes } from "services/silhouetteService";
import { getAvMannequins } from "services/mannequinService";

interface Props {
    closePopup: CallbackSkeletonType,
    selectedType?: string,
}

const NewSilhouette = ({
    closePopup,
    selectedType = ''
}: Props) => {

    const dispatch = useDispatch()
    const silhouettes = useSelector(availableSilhouettes)
    const sDetails = useSelector(silhouetteDetails)
    const [errors, setErrors] = useState<ObjectType>({})
    const [fileErrors, setFileErrors] = useState<ObjectType>({})
    const [file, setFile] = useState<any>(null)

    useEffect(() => {
        getAvMannequins(dispatch)
    },[])

    const addNewSilhouette: CallbackSkeletonType = async (e: HTMLFormElement) => {
        e.preventDefault()
        const errors = formValidator(sDetails, silhouetteFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        const formData = new FormData();
        Object.keys(sDetails).forEach((key: string) => {
            formData.append(key, sDetails[key]); // Add other data properties as needed
        });
        if (file?.[0]) {
            formData.append('silhouetteurl', file[0]);
            await addSilhouette(formData).then(res => {
                dispatch(setSilhouetteData([
                    ...silhouettes,
                    res
                ]))
            })
            closePopup()
        } else {
            setFileErrors({
                silhouetteurl: {
                    message: 'Incorrect format for Silhouette Url'
                }
            })
        }

    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setSilhouetteState({ name, value }))
    }

    const handleDropdownChange = (data: ObjectType, name: string) => {
        const value = data.value
        dispatch(setSilhouetteState({ name, value }))
    }

    const handleImageChange = (data: ObjectType) => {
        setFile(data)
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

    useEffect(() => {
        if (selectedType) {
            dispatch(setSilhouetteState({ name: 'type', value: selectedType }))
        }
    }, [selectedType])

    return (
        <form onSubmit={addNewSilhouette} className="new-silhouette">
            <HeadingUI text="Add new silhouette" align="center" color={appColor} />
            <div className="new-silhouette-inputs">
                <InputUI
                    placeholder="Name"
                    value={sDetails?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    type='number'
                    placeholder="Price"
                    value={sDetails?.price > 0 ? sDetails?.price : ''}
                    label="Price*"
                    name="price"
                    error={errors?.price?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Tags"
                    value={sDetails?.tags}
                    label="Tags"
                    name="tags"
                    callback={handleInputChange}
                />
                <DropdownUI
                    options={silhouetteTypeOptions}
                    onChange={(data) => handleDropdownChange(data, 'type')}
                    label="Silhouette type*"
                    error={errors?.type?.message || ''}
                    {...(selectedType && { defaultValue: selectedType })}
                    disabled={!!selectedType}
                />
                <DropdownUI
                    options={silhouetteOrientationOptions}
                    onChange={(data) => handleDropdownChange(data, 'orientation')}
                    label="Silhouette orientation*"
                    error={errors?.orientation?.message || ''}
                />
                <div className="new-silhouette-zone">
                    <HeadingUI text='Silhouette image' size='18px' color={appColor} />
                    <DropzoneUI
                        width="480px"
                        height="160px"
                        name="silhouetteurl"
                        validationCallback={(files) => validateFiles(files, 'silhouetteurl')}
                        error={fileErrors?.silhouetteurl?.message || ''}
                        onChange={(files: ArrayType) => handleImageChange(files)}
                    />
                </div>
            </div>
            <div className="new-silhouette-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewSilhouette;