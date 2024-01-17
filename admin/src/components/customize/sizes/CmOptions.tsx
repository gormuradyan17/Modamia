import { ObjectType } from "shared/helpers/helpers";
import { CallbackSkeletonType } from "shared/objectModels/GenericModel";
import InputUI from "shared/ui/InputUI/InputUI";

interface Props {
    size: ObjectType,
    callback: CallbackSkeletonType,
}

const CmOptions = ({
    size,
    callback,
}: Props) => {
    return (
        <div className="size-options">
            <InputUI
                value={size?.bust_cm}
                label="Bust (cm)"
                name="bust_cm"
                callback={callback}
                type="number"
            />
            <InputUI
                value={size?.waist_cm}
                label="Waist (cm)"
                name="waist_cm"
                callback={callback}
                type="number"
            />
            <InputUI
                value={size?.hips_cm}
                label="Hips (cm)"
                name="hips_cm"
                callback={callback}
                type="number"
            />
            <InputUI
                value={size?.height_cm}
                label="Height (cm)"
                name="height_cm"
                callback={callback}
                type="number"
            />
        </div>
    );
};

export default CmOptions;