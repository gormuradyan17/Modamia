import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { availablePrints, printsVariants, setPrintsPalettesData } from "redux/reducers/printReducer";
import { orderPalettePrints } from "shared/api/dataApi";
import { ArrayType, ObjectType, appColor } from "shared/helpers/helpers";
import HeadingUI from "shared/ui/HeadingUI/HeadingUI";

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

    return (
        <div className="palettes-list">
            {printVariants?.map((variant: ObjectType, index: number) => {
                const { name = '', _id = '' } = variant || {}
                const paletteIdx = palettes?.findIndex((palette: ObjectType) => palette?._id?.variant_id === _id)
                const palette = palettes[paletteIdx]
                const { grouped = [] } = palette || {}
                return <div key={variant?._id + index} className="palette-body">
                    <HeadingUI classN="palette-variantname" text={name} color={appColor} size="18px" />
                    <div className="palette-content customXScrollbar">
                        {grouped?.map((group: ObjectType, idx: number) => {
                            const print = printsList?.find((print: ObjectType) => print._id === group?.print_id)
                            const { previewurl = '', name = '' } = print || {}
                            return <div key={group?.color_id + idx} style={{
                                backgroundImage: `url(${previewurl})`
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

                    </div>
                </div>
            })}
        </div>
    );
};

export default PalettesList;