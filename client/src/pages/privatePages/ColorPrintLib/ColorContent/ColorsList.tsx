import { CSSProperties, ChangeEvent, useRef, useState } from "react";
import { ArrayType, ObjectType } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";
import EditColor from "./EditColor";
import { addColorPalette, removeColor, removeColorPalette, updateColor } from "shared/api/dataApi";
import { useDispatch, useSelector } from "react-redux";
import { formValidator } from "utils/validators/validator";
import { colorFormOptions } from "utils/validators/validatorOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTrash } from "@fortawesome/free-solid-svg-icons";
import PalettesList from "./PalettesList";
import { colorsPalettes, colorsVariants, setColorData, setColorsPalettesData } from "redux/reducers/colorReducer";
import useClickOutSide from "utils/hooks/useClickOutside";
import RemoveSome from "pages/privatePages/removeSome/RemoveSome";
import { getUserData } from "redux/reducers/userReducer";

interface Props {
    colors: ArrayType
}

interface colorFillInterface extends CSSProperties {
    '--colorFill': string,
}

const ColorsList = ({
    colors
}: Props) => {

    const dispatch = useDispatch()
    const colorVariants = useSelector(colorsVariants)
    const colorPalettes = useSelector(colorsPalettes)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isVisiblePalettes, setIsVisiblePalettes] = useState<boolean>(false)
    const [editableColor, setEditableColor] = useState<ObjectType>({})
    const [colorInfo, setColorInfo] = useState<ObjectType>({})
    const [errors, setErrors] = useState<ObjectType>({})
    const paletteRef = useRef<HTMLDivElement>(null)

    const userData = useSelector(getUserData)

    const [isVisibleRemove, setIsVisibleRemove] = useState<boolean>(false)
    const [removableItem, setRemovableItem] = useState<ObjectType>({})

    const editColor = (color: ObjectType) => {
        if (color) {
            setEditableColor(color)
            setColorInfo(color)
            setIsVisible(true)
        }
    }

    const closePopup = () => {
        setIsVisible(false)
        setEditableColor({})
        setColorInfo({})
        setErrors({})
    }

    const saveColor = async () => {
        const activeColor = colors?.find(color => color._id === editableColor._id) || undefined
        const errors = formValidator(editableColor, colorFormOptions);
        if (errors) { return setErrors(errors) };
        if (Object.keys(errors).length) { setErrors({}) };
        if (activeColor && JSON.stringify(editableColor) !== JSON.stringify(activeColor)) {
            await updateColor(editableColor).then(res => {
                dispatch(setColorData(res))
            })
        }
        closePopup()
    }

    const togglePalettes = (color: ObjectType) => {
        setIsVisiblePalettes(!isVisiblePalettes)
        setEditableColor(color)
    }

    useClickOutSide([paletteRef], () => setIsVisiblePalettes(false), isVisiblePalettes)

    const manipulateColorWithPalette = async (event: ChangeEvent<HTMLInputElement>, foundItem: ObjectType, option: ObjectType) => {
        const { target: { checked } } = event
        const { grouped = [] } = foundItem || {};
        const { _id: newVariantId = '' } = option || {}

        if (checked && newVariantId) {
            await addColorPalette({
                color_id: editableColor?._id,
                variant_id: newVariantId,
            }).then(res => {
                dispatch(setColorsPalettesData([
                    ...colorPalettes,
                    res
                ]))
            })
        }
        else {
            const paletteId = grouped?.find((group: ObjectType) => group?.color_id === editableColor?._id)
            const { _id = '' } = paletteId || {}
            if (_id) {
                await removeColorPalette({
                    palette_id: _id
                }).then(res => {
                    dispatch(setColorsPalettesData(res))
                })
            }
        }
    }

    const prepareToRemoveItem = (item: ObjectType) => {
        setRemovableItem(item)
        setIsVisibleRemove(true)
    }

    const removeItem = async () => {
        if (removableItem?._id) {
            await removeColor(removableItem).then(res => {
                dispatch(setColorData(res))
            })
            setIsVisibleRemove(false)
        }
    }

    const closePopupRemove = () => {
        setIsVisibleRemove(false)
        setRemovableItem({})
    }
    return (
        <div className="colors-list">
            {colors.map((color: ObjectType) => {
                const style: colorFillInterface = {
                    '--colorFill': color.hexcode
                }
                return <div className="colors-list-color" key={color._id}>
                    <HeadingUI classN="color-text _ellipsis" text={color.name} size="16px" />
                    <span className="color-span" style={style}></span>
                    <div className="colors-list-buttons">
                        {color?.user_id === userData?.id && <>
                            <ButtonUI classN="color-button" onClick={() => editColor(color)}>Edit</ButtonUI>
                            <div {...(color?._id === editableColor?._id) && { ref: paletteRef }}>
                                <ButtonUI classN="color-button" onClick={() => togglePalettes(color)}><FontAwesomeIcon icon={faPalette} /></ButtonUI>
                                {isVisiblePalettes && color?._id === editableColor?._id &&
                                    <PalettesList
                                        activeColor={editableColor}
                                        onChange={(e: any, foundItem: any, option: any) => manipulateColorWithPalette(e, foundItem, option)}
                                        options={colorVariants}
                                    />
                                }
                                <ButtonUI classN="color-button" onClick={() => prepareToRemoveItem(color)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                            </div>
                        </>}
                    </div>
                </div>
            })}
            {isVisible && <PopupUI callback={closePopup}>
                <EditColor
                    callback={saveColor}
                    closePopup={closePopup}
                    color={editableColor}
                    defaultColor={colorInfo}
                    errors={errors}
                    setColor={setEditableColor}
                />
            </PopupUI>}
            {isVisibleRemove && <PopupUI callback={closePopupRemove}>
                <RemoveSome
                    header="Remove Color"
                    text={`Do you want to remove the color <span> ${removableItem?.name} ?</span>`}
                    discardCallback={closePopupRemove}
                    removeCallback={removeItem}
                />
            </PopupUI>}
        </div>
    );
};

export default ColorsList;