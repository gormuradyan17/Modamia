interface Iloader {
    classN?: string
}

const LoaderCircleUI = ({ classN }: Iloader) => {
    return (
        <div className={`LoaderCircleUI ${classN}`} ></div>
    )
}

export default LoaderCircleUI