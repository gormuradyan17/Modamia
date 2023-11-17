import './style.scss'

const CustomizationLoader = () => {
    return (
        <div className='customization-body-loader'>
            <svg fill="none" className="customization-body-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle" cx="50" cy="50" r="45" />
            </svg>
        </div>
    );
};

export default CustomizationLoader;