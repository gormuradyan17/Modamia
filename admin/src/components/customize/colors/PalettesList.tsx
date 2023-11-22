import { useSelector } from "react-redux";
import { colorsPalettes } from "redux/reducers/colorReducer";
import { ObjectType } from "shared/helpers/helpers";

interface Props {
    options: string[],
    onChange: any,
    activeColor: ObjectType
}

const PalettesList = ({
    options,
    onChange,
    activeColor
}: Props) => {

    const colorPalettes = useSelector(colorsPalettes)

    return (
        <div
            className={`palettes-list-content`}>
            {Boolean(options?.length) &&
                options?.map((option: any, index: number) => {
                    const { _id: optionId = '', name = '' } = option || {};
                    const foundItem = colorPalettes.find((palette: ObjectType) => {
                        const { grouped = [], _id: { variant_id = ''} = {} } = palette || {};
                        const foundColor = grouped.some((group: ObjectType) => group?.color_id === activeColor?._id)
                        const foundPalette = variant_id === optionId
                        if (foundColor && foundPalette) return true
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