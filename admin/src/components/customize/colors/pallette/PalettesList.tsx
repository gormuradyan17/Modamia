import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RemoveSome from "components/customize/removeSome/RemoveSome";
import { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availableColors, colorsVariants, setColorsPalettesData } from "redux/reducers/colorReducer";
import { getAvColorsPalettes, getAvColorsVariants } from "services/colorService";
import { orderPaletteColors, removeColorPalette } from "shared/api/dataApi";
import { ArrayType, ObjectType, appColor } from "shared/helpers/helpers";
import { ButtonUI } from "shared/ui/ButtonUI/ButtonUI";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";
import PopupUI from "shared/ui/PopupUI/PopupUI";

interface Props {
    palettes: ArrayType
}

const PalettesList = ({
    palettes
}: Props) => {

    const colorsList = useSelector(availableColors)
    const colorVariants = useSelector(colorsVariants)
    const [draggableVariant, setDraggableVariant] = useState<number>(0)
    const [draggableRow, setDraggableRow] = useState<number>(0)
    const dispatch = useDispatch()
    const onDragStart = (e: any, index: number, row: number) => {
        setDraggableVariant(index)
        setDraggableRow(row)
    };

    const [isVisibleRemove, setIsVisibleRemove] = useState<boolean>(false)
    const [removableItem, setRemovableItem] = useState<ObjectType>({})

    const onDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDrop = async (e: any, idx: number, index: number) => {
        e.preventDefault();
        const fromElement = palettes[index]?.grouped?.[draggableVariant]
        const toElement = palettes[index]?.grouped?.[idx]
        if (fromElement && toElement && idx !== draggableVariant && draggableRow === index) {
            const data = await orderPaletteColors({
                fromElement, toElement
            })
            dispatch(setColorsPalettesData(data))
        }
    };

    const prepareToRemoveItem = (item: ObjectType) => {
        setRemovableItem(item)
        setIsVisibleRemove(true)
    }

    const removeItem = async () => {
        if (removableItem?._id) {
           await removeColorPalette(removableItem)
           await getAvColorsVariants(dispatch)
           await getAvColorsPalettes(dispatch)
           setIsVisibleRemove(false)
        }
    }

    const closePopupRemove = () => {
        setIsVisibleRemove(false)
        setRemovableItem({})
    }

    return (
        <div className="palettes-list">
            {colorVariants?.map((variant: ObjectType, index: number) => {
                const { name = '', _id = '' } = variant || {}
                const paletteIdx = palettes?.findIndex((palette: ObjectType) => palette?._id?.variant_id === _id)
                const palette = palettes[paletteIdx]
                const { grouped = [] } = palette || {}
                return <div key={variant?._id + index} className="palette-body">
                    <div className="palette-body-top">
                        <HeadingUI classN="palette-variantname" text={name} color={appColor} size="18px" />
                        <ButtonUI classN="color-button" onClick={() => prepareToRemoveItem(variant)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                    </div>
                    {grouped?.length ? <div className="palette-content customXScrollbar">
                        {grouped?.map((group: ObjectType, idx: number) => {
                            const color = colorsList?.find((color: ObjectType) => color._id === group?.color_id)
                            const { hexcode = '', name = '' } = color || {}
                            return <div key={group?.color_id + idx} style={{
                                backgroundColor: hexcode
                            }}
                                className="palette-elem"
                                draggable
                                onDragStart={(e) => onDragStart(e, idx, paletteIdx)}
                                onDragOver={onDragOver}
                                onDrop={(e) => onDrop(e, idx, paletteIdx)}
                            >
                                <HeadingUI classN="palette-elem-text" align="center" text={name} size="12px" color='#fff' />
                            </div>
                        })}

                    </div> : null}
                </div>
            })}
            {isVisibleRemove && <PopupUI callback={closePopupRemove}>
                <RemoveSome
                    header="Remove Color Palette"
                    text={`Do you want to remove the palette <span> ${removableItem?.name} ?</span>`}
                    discardCallback={closePopupRemove}
                    removeCallback={removeItem}
                />
            </PopupUI>}
        </div>
    );
};

export default PalettesList;