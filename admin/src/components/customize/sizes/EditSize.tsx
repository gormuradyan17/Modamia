import { ChangeEvent } from 'react';
import { ObjectType } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';
import TabUI from 'shared/ui/TabUI/TabUI';
import InchOptions from './InchOptions';
import CmOptions from './CmOptions';

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    size: ObjectType,
    setSize: CallbackSkeletonType,
    errors: ObjectType,
    defaultSize: ObjectType
}

const EditSize = ({
    callback,
    closePopup,
    size,
    setSize,
    errors,
    defaultSize
}: Props) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        setSize({ ...size, [name]: value })
    }

    const SizeOptions = [
        {
            id: 'IN',
            heading: 'Inch',
            content: <InchOptions size={size} callback={handleInputChange} />
        },
        {
            id: 'CM',
            heading: 'CM',
            content: <CmOptions size={size} callback={handleInputChange} />
        }
    ]

    return (
        <div className="new-size">
            <HeadingUI text={`Edit size ${defaultSize?.size}`} align="center" color="#aa8a75" />
            <div className="new-size-inputs">
                <InputUI
                    placeholder="Name"
                    value={size?.size}
                    label="Name*"
                    name="size"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
                <TabUI tabs={SizeOptions} />
            </div>
            <div className="new-size-actions">
                <ButtonUI onClick={() => closePopup()} version="gray" type='button'>Discard</ButtonUI>
                <ButtonUI onClick={() => callback()} type="button">Save</ButtonUI>
            </div>
        </div>
    );
};

export default EditSize;