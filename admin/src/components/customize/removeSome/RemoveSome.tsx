import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import './style.scss'

interface Props {
    header: string,
    text: any,
    removeCallback: CallbackSkeletonType,
    discardCallback: CallbackSkeletonType,
}

const RemoveSome = ({
    header,
    text,
    removeCallback,
    discardCallback,
}: Props) => {
    return (
        <div className="remove-some">
            <HeadingUI text={header} align="center" color="#aa8a75" />
            <div className="remove-some-text" dangerouslySetInnerHTML={{__html: text}} />
            <div className="remove-some-actions">
                <ButtonUI onClick={() => discardCallback()} version="gray">Discard</ButtonUI>
                <ButtonUI onClick={() => removeCallback()} version="red">Remove</ButtonUI>
            </div>
        </div>
    );
};

export default RemoveSome;