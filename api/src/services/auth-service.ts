import axios from 'axios';
import { SHOPIFY_CLIENT_ID, SHOPIFY_SCOPES, SHOPIFY_SHOP, SHOPIFY_REDIRECT_URL, SHOPIFY_CLIENT_SECRET } from "../utils/constants/variables"

import UserModel from '../models/User';

class AuthService {

    async signinShopify() {
        return encodeURI(`https://${SHOPIFY_SHOP}.myshopify.com/admin/oauth/authorize?client_id=${SHOPIFY_CLIENT_ID}&scope=${SHOPIFY_SCOPES}&redirect_uri=${SHOPIFY_REDIRECT_URL}`)
    }

    async fetchShopifyUser(code: string) {
        const shopifyOathUrl = `https://${SHOPIFY_SHOP}.myshopify.com/admin/oauth/access_token?client_id=${SHOPIFY_CLIENT_ID}&client_secret=${SHOPIFY_CLIENT_SECRET}&code=${code}`

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
            const apiUrl = `https://${SHOPIFY_SHOP}.myshopify.com/admin/api/2023-10/shop.json`;
            try {
                const response = await axios.get(apiUrl, {
                    headers: {
                        'X-Shopify-Access-Token': access_token,
                    },
                });
                const { data: { shop = {}} = {} } = response || {}

                const { email = '', id = 0, name = '' } = shop;

                if (email && id && name) {
                    
                    const existedUser = await UserModel.find({shopify_id: id});
                    if (existedUser) return existedUser;

                    const user = await UserModel.create({
                        name,
                        shopify_id: id,
                        email,
                    })
                    return user;
                }

                return null;

            } catch (error: any) {
                console.error('Error fetching shop information:', error?.response?.data);
            }
        }
    }
}

export default new AuthService();