import signinBG from "../../assets/images/singin.gif"
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import "./style.scss"
import { useSelector } from "react-redux";
import { isLogged } from "redux/reducers/userReducer";
import { Navigate } from "react-router-dom";
const Signin = () => {

    const isAuth = useSelector(isLogged)

    if (isAuth) return <Navigate to='/home' />

    // Postponed

    // const signinWithShopify = async () => {
    //     window.open(SIGNIN_SHOPIFY_URL)
    // };

    const signin = async () => {
        // here the signin logic.
    }

    return (
        <div className='signin_container'>
        <img src={signinBG} alt="" />
        <div className='signin_text_block'>
            {/* <HeadingUI text='Sign in Via Shopify' color='#a57867' size='40px'/> */}
            {/* <ButtonUI onClick={signinWithShopify}>Sign in</ButtonUI> */}
            <HeadingUI text='Sign in' color='#a57867' size='40px'/>
            {/* Here inputs */}
            <ButtonUI onClick={signin}>Sign in</ButtonUI>
        </div>
        </div>
       
    );
};

export default Signin;