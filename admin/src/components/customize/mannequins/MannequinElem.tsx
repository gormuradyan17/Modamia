import { faPencil, faReplyAll, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BASE_UPLOADS_MANNEQUINS_BACKS_URL, BASE_UPLOADS_MANNEQUINS_FRONTS_URL } from "shared/constants/genericApiRoutes";
import { ObjectType } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";

interface Props {
    mannequin: ObjectType,
    editMannequin: any,
    prepareToRemoveMannequin: any
}

const MannequinElem = ({
    mannequin,
    editMannequin,
    prepareToRemoveMannequin
}: Props) => {

    const [side, setSide] = useState<string>('front')

    const rotateImage = () => {
        setSide(side === 'front' ? 'back' : 'front')
    }

    return (
        <div className="mannequins-list-mannequin" key={mannequin._id}>
            <HeadingUI classN="mannequin-list-text _ellipsis" text={mannequin.name} size="16px" />
            <div className="mannequin-list-image">
                <img
                    src={side === 'front'
                        ? `${BASE_UPLOADS_MANNEQUINS_FRONTS_URL}${mannequin.fronturl}`
                        : `${BASE_UPLOADS_MANNEQUINS_BACKS_URL}${mannequin.backurl}`
                    }
                    className="mannequin-list-img"
                    alt={mannequin.name}
                />
                <button
                    type="button"
                    className="mannequin-list-rotate"
                    onClick={rotateImage}
                ><FontAwesomeIcon icon={faReplyAll} />
                </button>
                <button
                    type="button"
                    className="mannequin-list-edit"
                    onClick={() => editMannequin(mannequin)}
                ><FontAwesomeIcon icon={faPencil} />
                </button>
                <button
                    type="button"
                    className="mannequin-list-remove"
                    onClick={() => prepareToRemoveMannequin(mannequin)}
                ><FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default MannequinElem;