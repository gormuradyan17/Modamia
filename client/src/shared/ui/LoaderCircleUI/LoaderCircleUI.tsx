import './style.scss'

interface Iloader {
    classN?: string
}

const LoaderCircleUI = ({ classN }: Iloader) => {
    return (
        <div className={`LoaderCircleUI ${classN ? classN : ''}`} ></div>
    )
}

export default LoaderCircleUI