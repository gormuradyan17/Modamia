import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RemoveSome from "components/customize/removeSome/RemoveSome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availablePrints, printsVariants, setPrintsPalettesData } from "redux/reducers/printReducer";
import { getAvPrintsPalettes, getAvPrintsVariants } from "services/printService";
import { orderPalettePrints, removePrintPalette } from "shared/api/dataApi";
import { BASE_UPLOADS_PRINTS_PREVIEWS_URL } from "shared/constants/genericApiRoutes";
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

    const printsList = useSelector(availablePrints)
    const printVariants = useSelector(printsVariants)
    const [draggableVariant, setDraggableVariant] = useState<number>(0)
    const [draggableRow, setDraggableRow] = useState<number>(0)
    const dispatch = useDispatch()

    const [isVisibleRemove, setIsVisibleRemove] = useState<boolean>(false)
    const [removableItem, setRemovableItem] = useState<ObjectType>({})

    const onDragStart = (e: any, index: number, row: number) => {
        setDraggableVariant(index)
        setDraggableRow(row)
    };

    const onDragOver = (e: any) => {
        e.preventDefault();
    };

    const onDrop = async (e: any, idx: number, index: number) => {
        e.preventDefault();
        const fromElement = palettes[index]?.grouped?.[draggableVariant]
        const toElement = palettes[index]?.grouped?.[idx]
        if (fromElement && toElement && idx !== draggableVariant && draggableRow === index) {
            const data = await orderPalettePrints({
                fromElement, toElement
            })
            dispatch(setPrintsPalettesData(data))
        }
    };

    const prepareToRemoveItem = (item: ObjectType) => {
        setRemovableItem(item)
        setIsVisibleRemove(true)
    }

    const removeItem = async () => {
        if (removableItem?._id) {
            await removePrintPalette(removableItem)
            await getAvPrintsVariants(dispatch)
            await getAvPrintsPalettes(dispatch)
            setIsVisibleRemove(false)
        }
    }

    const closePopupRemove = () => {
        setIsVisibleRemove(false)
        setRemovableItem({})
    }

    return (
        <div className="palettes-list">
            {printVariants?.map((variant: ObjectType, index: number) => {
                const { name = '', _id = '' } = variant || {}
                const paletteIdx = palettes?.findIndex((palette: ObjectType) => palette?._id?.variant_id === _id)
                const palette = palettes[paletteIdx]
                const { grouped = [] } = palette || {}
                return <div key={variant?._id + index} className="palette-body">
                    <div className="palette-body-top">
                        <HeadingUI classN="palette-variantname" text={name} color={appColor} size="18px" />
                        <ButtonUI classN="palette-print-button" onClick={() => prepareToRemoveItem(variant)}><FontAwesomeIcon icon={faTrash} /></ButtonUI>
                    </div>
                    {grouped?.length ? <div className="palette-content customXScrollbar">
                        {grouped?.map((group: ObjectType, idx: number) => {
                            const print = printsList?.find((print: ObjectType) => print._id === group?.print_id)
                            const { previewurl = '', name = '' } = print || {}
                            return <div key={group?.print_id + idx} style={{
                                backgroundImage: `url(${BASE_UPLOADS_PRINTS_PREVIEWS_URL}${previewurl || ''})`
                            }}
                                className="palette-elem"
                                draggable
                                onDragStart={(e) => onDragStart(e, idx, paletteIdx)}
                                onDragOver={onDragOver}
                                onDrop={(e) => onDrop(e, idx, paletteIdx)}
                            >
                                <HeadingUI classN="palette-text" align="center" text={name} size="12px" color='#fff' />
                            </div>
                        })}
                    </div> : null}
                </div>
            })}
            {isVisibleRemove && <PopupUI callback={closePopupRemove}>
                <RemoveSome
                    header="Remove Print Palette"
                    text={`Do you want to remove the palette <span> ${removableItem?.name} ?</span>`}
                    discardCallback={closePopupRemove}
                    removeCallback={removeItem}
                />
            </PopupUI>}
        </div>
    );
};

export default PalettesList;