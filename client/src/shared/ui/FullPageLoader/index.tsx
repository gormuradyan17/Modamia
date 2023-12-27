import signinBG from "assets/images/singin.gif"
import './style.scss'

const FullPageLoader = () => {
    return (
        <div className='full-page-loader'>
            <img width="300" src={signinBG} />
        </div>
    );
};

export default FullPageLoader;