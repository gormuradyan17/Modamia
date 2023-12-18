import { useSelector } from "react-redux";
import { printsPalettes } from "redux/reducers/printReducer";
import { ObjectType } from "shared/helpers/helpers";

interface Props {
    options: string[],
    onChange: any,
    activePrint: ObjectType
}

const PalettesList = ({
    options,
    onChange,
    activePrint
}: Props) => {

    const printPalettes = useSelector(printsPalettes)

    return (
        <div
            className='palettes-list-content customYScrollbar'>
            {Boolean(options?.length) &&
                options?.map((option: any, index: number) => {
                    const { _id: optionId = '', name = '' } = option || {};
                    const foundItem = printPalettes.find((palette: ObjectType) => {
                        const { grouped = [], _id: { variant_id = ''} = {} } = palette || {};
                        const foundPrint = grouped.some((group: ObjectType) => group?.print_id === activePrint?._id)
                        const foundPalette = variant_id === optionId
                        if (foundPrint && foundPalette) return true
                    })

                    return <label
                        key={optionId}
                        htmlFor={optionId + index}
                        className='palettes-list-option'
                    >
                        {name}
                        <input
                            className='palettes-list-checkbox'
                            type='checkbox'
                            id={optionId + index}
                            defaultChecked={foundItem}
                            onChange={(e) => onChange(e, foundItem, option)}
                        />
                    </label>
                })}
        </div>
    );
};

export default PalettesList;