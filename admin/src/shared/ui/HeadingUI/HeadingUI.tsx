import './style.scss'

interface Props {
    text: string,
    classN?: string,
    color?: string,
    size?: string,
    align?: 'center' | 'left' | 'right'
}

const HeadingUI = ({
    text,
    classN = '',
    color = '',
    size = '',
    align = 'left'
}: Props) => {
    return (
        <h1 className={`headingUI ${classN}`}
            style={{
                color: color || '#000',
                fontSize: size || '30px',
                textAlign: align
            }}
        >{text}</h1>
    );
};

export default HeadingUI;