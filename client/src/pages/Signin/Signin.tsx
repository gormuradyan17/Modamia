import OAuthPopup from 'react-oauth-popup';
import { shopifyConfig } from 'shared/helpers/helpers';

const Signin = () => {

    const handleSuccess = (response: any) => {
        console.log('response => ', response)
        // Handle the success response (response.code) and exchange it for an access token
    };

    return (
        <div>
            {/* <OAuthPopup config={shopifyConfig} onSuccess={handleSuccess} />; */}
        </div>
    );
};

export default Signin;