import sgMail from '@sendgrid/mail';
import { SENDGRID_API_EMAIL, SENDGRID_API_KEY } from '../utils/constants/variables';
sgMail.setApiKey(SENDGRID_API_KEY);

export const signupMail = async (email: string, link: string) => {
    const msg = {
        to: email,
        from: SENDGRID_API_EMAIL,
        subject: 'Confirmation signup',
        text: 'Welcome to Modamia',
        html:
            `
                <div>
                    <h1>Welcome to Modamia</h1>
                    <p>Before you get started, we just need to verify your account.</p>
                    <hr />
                    <a href="${link}">Confirm account</a>  
                </div>
            `
    };

    await sgMail
        .send(msg)
        .then(() => {return true}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
}

export const forgotMail = async (email: string, link: string) => {
    const msg = {
        to: email,
        from: SENDGRID_API_EMAIL,
        subject: 'Password recovery',
        text: 'Welcome to Modamia',
        html:
            `
                <div>
                    <h1>Reset your password</h1>
                    <p>If you want to continue your password recovery, click the link below.</p>
                    <hr />
                    <a href="${link}">Recovery</a>  
                </div>
            `
    };

    await sgMail
        .send(msg)
        .then(() => {return true}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
}