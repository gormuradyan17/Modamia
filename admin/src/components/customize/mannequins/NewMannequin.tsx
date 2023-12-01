import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { availableMannequins, setMannequinData } from 'redux/reducers/mannequinReducer';
import { getAvMannequins } from 'services/mannequinService';
import { getAvPrints } from 'services/printService';
import { addMannequin, addPrint } from 'shared/api/dataApi';
import { ArrayType, ObjectType, appColor } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import DropzoneUI from 'shared/ui/DropzoneUI/DropzoneUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';
import { formValidator } from 'utils/validators/validator';
import { mannequinFormOptions, printFormOptions } from 'utils/validators/validatorOptions';

interface Props {
    closePopup: CallbackSkeletonType,
}

const NewMannequin = ({
    closePopup,
}: Props) => {
    const dispatch = useDispatch()
    const [data, setData] = useState<ObjectType>({
        name: '',
        fronturl: '',
        backurl: ''
    })
    const [errors, setErrors] = useState<ObjectType>({})
    const [fileErrors, setFileErrors] = useState<ObjectType>({})
    const mannequins = useSelector(availableMannequins)
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setData({ ...data, [name]: value })
    }

    const addNewMannequin: CallbackSkeletonType = async (e: HTMLFormElement) => {
        e.preventDefault()
        const errors = formValidator(data, mannequinFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        const formData = new FormData();
        Object.keys(data).forEach((key: string) => {
            formData.append(key, data[key]); // Add other data properties as needed
        });
        await addMannequin(formData).then(res => {
            dispatch(setMannequinData([
                ...mannequins,
                res
            ]))
        })
        closePopup()

    }

    const addImage = (files: ArrayType, name: string) => {
        setData({
            ...data,
            [name]: files[0]
        })
    }

    const validateFiles = (files: ArrayType, field: string) => {
        let err = {}
        files?.map(file => {
            const obj = {
                [field]: file?.name
            }
            err = formValidator(obj, mannequinFormOptions);
        })
        if (Object.keys(err).length) {
            setFileErrors(err)
            return false
        }
        if (Object.keys(fileErrors).length) { setFileErrors({}) };
        return true
    }

    return (
        <form onSubmit={addNewMannequin} className="new-mannequin">
            <HeadingUI text="Add new mannequin" align="center" color={appColor} />
            <div className="new-mannequin-inputs">
                <InputUI
                    placeholder="Name"
                    value={data?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <div className="new-mannequin-zone">
                    <HeadingUI text='Front image' size='18px' color={appColor} />
                    <DropzoneUI
                        width="480px"
                        height="160px"
                        name="fronturl"
                        validationCallback={(files) => validateFiles(files, 'fronturl')}
                        error={fileErrors?.fronturl?.message || ''}
                        onChange={(files: ArrayType) => addImage(files, 'fronturl')}
                    />
                </div>
                <div className="new-mannequin-zone">
                    <HeadingUI text='Back image' size='18px' color={appColor} />
                    <DropzoneUI
                        width="480px"
                        height="160px"
                        name="backurl"
                        validationCallback={(files) => validateFiles(files, 'backurl')}
                        error={fileErrors?.backurl?.message || ''}
                        onChange={(files: ArrayType) => addImage(files, 'backurl')}
                    />
                </div>
            </div>
            <div className="new-mannequin-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewMannequin;