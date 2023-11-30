import './style.scss'

interface Props {
    text: string,
    classN?: string,
    color?: string,
    size?: string,
    align?: 'center' | 'left' | 'right',
    handleEvent?:()=>void;
}

const HeadingUI = ({
    text,
    classN = '',
    color = '',
    size = '',
    align = 'left',
    handleEvent
}: Props) => {
    return (
        <h2 className={`headingUI ${classN}`} onClick={handleEvent}
            style={{
                color: color || '#000',
                fontSize: size || '30px',
                textAlign: align
            }}
        >{text}</h2>
    );
};

export default HeadingUI;