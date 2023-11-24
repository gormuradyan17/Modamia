import './style.scss'

const FullPageLoaderUI = () => {
    return (
        <div className='FullPageLoaderUI'>
            <svg fill="none" className="FullPageLoaderUI-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle" cx="50" cy="50" r="45" />
            </svg>
        </div>
    );
};

export default FullPageLoaderUI;