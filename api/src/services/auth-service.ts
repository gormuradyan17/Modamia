import axios from 'axios';

import UserModel from '../models/User';
import { SHOPIFY_OUATH_URL, SHOPIFY_SIGNIN_URL, SHOPIFY_USER_URL } from '../utils/constants/genericApiRoutes';

class AuthService {

    async signinShopify() {
        return encodeURI(SHOPIFY_SIGNIN_URL)
    }

    async fetchShopifyUser(code: string) {
        try {
            const shopifyOathUrl = SHOPIFY_OUATH_URL(code)
    
            const response = await axios({
                url: shopifyOathUrl,
                method: 'POST',
                data: {}
            }).then((res: any) => {
                return res
            }).catch((err: any) => {
                console.log(err)
            })
    
            const { data: { access_token = '' } = {} } = response || {};
    
            if (access_token) {
                const apiUrl = SHOPIFY_USER_URL;
                try {
                    const response = await axios.get(apiUrl, {
                        headers: {
                            'X-Shopify-Access-Token': access_token,
                        },
                    });
                    const { data: { shop = {}} = {} } = response || {}
    
                    const { email = '', id = 0, name = '' } = shop;
    
                    if (email && id && name) {
                        const query = { shopify_id: id };
                        const existedUser = await UserModel.find(query);
    
                        if (existedUser?.length) {
                            const user = await UserModel.findOneAndUpdate(query, {
                                token: access_token,
                            }, { upsert: true });
                            return user;
                        };
    
                        const user = await UserModel.create({
                            name,
                            shopify_id: id,
                            email,
                            token: access_token
                        })
    
                        return user;
                    }
    
                    return null;
    
                } catch (error: any) {
                    console.error('Error fetching shop information:', error?.response?.data);
                }
            }

            return null

        } catch (err: any) {
            console.log(err)
            return null   
        }
    }

    async getShopifyUser(token: string = '') {
        try {
            const query = { token };
            return await UserModel.find(query);
        } catch (err: any) {
            console.log(err)
        }
    }
}

export default new AuthService();