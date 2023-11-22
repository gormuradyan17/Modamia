import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSizeState, sizeDetails } from 'redux/reducers/sizeReducer';
import { ObjectType } from 'shared/helpers/helpers';
import { CallbackSkeletonType } from 'shared/objectModels/GenericModel';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import InputUI from 'shared/ui/InputUI/InputUI';

interface Props {
    callback: CallbackSkeletonType,
    errors: ObjectType,
    closePopup: CallbackSkeletonType
}

const NewSize = ({
    callback,
    errors,
    closePopup
}: Props) => {

    const sDetails = useSelector(sizeDetails)
    const dispatch = useDispatch()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setSizeState({ name, value }))
    }

    return (
        <form onSubmit={callback} className="new-size">
            <HeadingUI text="Add new size" align="center" color="#aa8a75" />
            <div className="new-size-inputs">
                <InputUI
                    placeholder="Name"
                    value={sDetails?.name}
                    label="Name*"
                    name="name"
                    error={errors?.name?.message || ''}
                    callback={handleInputChange}
                />
            </div>
            <div className="new-size-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewSize;