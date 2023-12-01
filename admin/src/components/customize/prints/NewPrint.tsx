import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAvPrints } from 'services/printService';
import { addPrint } from 'shared/api/dataApi';
import { ArrayType, ObjectType, appColor, getDropdownOptionsFromItemsVariants } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import DropzoneUI from 'shared/ui/DropzoneUI/DropzoneUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';
import { formValidator } from 'utils/validators/validator';
import { printFilesOptions, printFormOptions } from 'utils/validators/validatorOptions';
import NewPrintVariant from './NewPrintVariant';
import { availablePrints, printDetails, printsVariants, setPrintData, setPrintState } from 'redux/reducers/printReducer';
import DropdownCheckboxUI from 'shared/ui/DropdownCheckboxUI/DropdownCheckboxUI';

interface Props {
    closePopup: CallbackSkeletonType,
}

const NewPrint = ({
    closePopup,
}: Props) => {
    const dispatch = useDispatch()

    const printVariants = getDropdownOptionsFromItemsVariants(useSelector(printsVariants)) || [{}]
    const pDetails = useSelector(printDetails)
    const prints = useSelector(availablePrints)
    const [data, setData] = useState<ObjectType>({
        name: '',
        price: '',
        tags: '',
        highresurl: '',
        previewurl: '',
        printsPalettes: []
    })
    const [errors, setErrors] = useState<ObjectType>({})
    const [fileErrors, setFileErrors] = useState<ObjectType>({})

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setData({ ...data, [name]: value })
    }

    const addNewPrint: CallbackSkeletonType = async (e: HTMLFormElement) => {
        e.preventDefault()
        const errors = formValidator(data, printFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        const formData = new FormData();
        Object.keys(data).forEach((key: string) => {
            if (key === 'printsPalettes') formData.append(key, JSON.stringify(data[key])); 
            else formData.append(key, data[key]); // Add other data properties as needed
        });
        await addPrint(formData).then(res => {
            dispatch(setPrintData([
                ...prints,
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
            err = formValidator(obj, printFilesOptions);
        })
        if (Object.keys(err).length) {
            setFileErrors(err)
            return false
        }
        if (Object.keys(fileErrors).length) { setFileErrors({}) };
        return true
    }

    const handleDropdownChange = (event: ChangeEvent<HTMLInputElement>, option: ObjectType) => {
        const { target: { checked } } = event
        const { id } = option;
        const copyPalettes = [...data?.printsPalettes]
        if (checked) copyPalettes.push(id)
        else {
            const idx = copyPalettes.findIndex(() => id)
            if (idx !== -1) copyPalettes.splice(idx, 1)
        }
        setData({ ...data, printsPalettes: copyPalettes })
    }

    return (
        <form onSubmit={addNewPrint} className="new-print">
            <HeadingUI text="Add new print" align="center" color={appColor} />
            <div className="new-print-inputs">
                <InputUI
                    placeholder="Name"
                    value={data?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    type='number'
                    placeholder="Price"
                    value={data?.price}
                    label="Price*"
                    name="price"
                    error={errors?.price?.message || ''}
                    callback={handleInputChange}
                />
                <InputUI
                    placeholder="Tags"
                    value={data?.tags}
                    label="Tags"
                    name="tags"
                    callback={handleInputChange}
                />
                <div className="new-color-variants">
                    <NewPrintVariant />
                    <DropdownCheckboxUI
                        options={printVariants}
                        onChange={(e: any, option: ObjectType) => handleDropdownChange(e, option)}
                        label="Print palettes"
                    />
                </div>
                <div className="new-print-zone">
                    <HeadingUI text='High res image' size='18px' color={appColor} />
                    <DropzoneUI
                        width="480px"
                        height="160px"
                        name="highresurl"
                        validationCallback={(files) => validateFiles(files, 'highresurl')}
                        error={fileErrors?.highresurl?.message || ''}
                        onChange={(files: ArrayType) => addImage(files, 'highresurl')}
                    />
                </div>
                <div className="new-print-zone">
                    <HeadingUI text='Preview image' size='18px' color={appColor} />
                    <DropzoneUI
                        width="480px"
                        height="160px"
                        name="previewurl"
                        validationCallback={(files) => validateFiles(files, 'previewurl')}
                        error={fileErrors?.previewurl?.message || ''}
                        onChange={(files: ArrayType) => addImage(files, 'previewurl')}
                    />
                </div>
            </div>
            <div className="new-print-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewPrint;