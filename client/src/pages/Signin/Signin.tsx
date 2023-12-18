import OAuthPopup from 'react-oauth-popup';
import { shopifyConfig } from 'shared/helpers/helpers';
import signin from "../../assets/images/singin.gif"
import OauthPopup from 'react-oauth-popup';
import { ButtonUI } from 'shared/ui/ButtonUI/ButtonUI';
import HeadingUI from 'shared/ui/HeadingUI/HeadingUI';
import "./style.scss"
const Signin = () => {

    const handleSuccess = (response: any) => {
        console.log('response => ', response)
        // Handle the success response (response.code) and exchange it for an access token
    };

    return (
        <div className='signin_container'>
        <img src={signin} alt="" />
        <div className='signin_text_block'>
            <HeadingUI text='Sign in' color='#a57867' size='40px'/>
            <ButtonUI>sign in</ButtonUI>
         {/* <OauthPopup config={shopifyConfig} onSuccess={handleSuccess} /> */}
        </div>
        </div>
       
    );
};

export default Signin;