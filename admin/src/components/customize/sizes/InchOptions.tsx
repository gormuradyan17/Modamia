import { ObjectType } from "shared/helpers/helpers";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import InputUI from "shared/ui/InputUI/InputUI";

interface Props {
    size: ObjectType,
    callback: CallbackSkeletonType,
}

const InchOptions = ({
    size,
    callback,
}: Props) => {
    return (
        <div className="size-options">
            <InputUI
                value={size?.bust_in}
                label="Bust (in)"
                name="bust_in"
                callback={callback}
                type="number"
            />
            <InputUI
                value={size?.waist_in}
                label="Waist (in)"
                name="waist_in"
                callback={callback}
                type="number"
            />
            <InputUI
                value={size?.hips_in}
                label="Hips (in)"
                name="hips_in"
                callback={callback}
                type="number"
            />
        </div>
    );
};

export default InchOptions;