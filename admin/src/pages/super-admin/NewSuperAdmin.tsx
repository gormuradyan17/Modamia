import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSigninData, setSigninData } from "redux/reducers/authReducer";
import { ObjectType } from "shared/helpers/helpers";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import InputUI from "shared/ui/InputUI/InputUI";
import './style.scss'

interface Props {
    callback: CallbackSkeletonType,
    closePopup: CallbackSkeletonType,
    errors: ObjectType
}

const NewSuperAdmin = ({
    callback,
    closePopup,
    errors
}: Props) => {

    const dispatch = useDispatch()

    const signinData = useSelector(getSigninData)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = event
        dispatch(setSigninData({ name, value }))
    }

    return (
        <form onSubmit={callback} className="new-super-admin">
            <HeadingUI text="Add new super admin" align="center" color="#aa8a75" />
            <div className="new-super-admin-inputs">
                <InputUI
                    type="text"
                    name="email"
                    value={signinData?.email}
                    error={errors?.email?.message || ''}
                    placeholder="Email"
                    callback={handleInputChange}
                    autoComplete="off"
                />
                <InputUI
                    type="password"
                    name="password"
                    value={signinData?.password}
                    error={errors?.password?.message || ''}
                    placeholder="Password"
                    callback={handleInputChange}
                    autoComplete="off"
                />
            </div>
            <div className="new-super-admin-actions">
                <ButtonUI onClick={() => closePopup()} version="gray">Close</ButtonUI>
                <ButtonUI type="submit">Add</ButtonUI>
            </div>
        </form>
    );
};

export default NewSuperAdmin;