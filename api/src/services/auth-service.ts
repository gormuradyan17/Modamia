import axios from 'axios';

import UserModel from '../models/User';
import { SHOPIFY_OUATH_URL, SHOPIFY_SIGNIN_URL, SHOPIFY_USER_ORDERS_URL, SHOPIFY_USER_URL } from '../utils/constants/genericApiRoutes';
import UserDto from '../dtos/user-dto';
import tokenService from './token-service';
import { SHOPIFY_ACCESS_TOKEN } from '../utils/constants/variables';

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
                    const { data: { shop = {} } = {} } = response || {}
                    const { email = '', id = 0, name = '' } = shop;

                    if (email && id && name) {
                        const query = { shopify_id: id };
                        const existedUser = await UserModel.find(query);

                        if (existedUser?.length) {
                            // const user = await UserModel.findOneAndUpdate(query, {
                            //     token: access_token,
                            // }, { upsert: true });
                            const user = await UserModel.findOne({ email })
                            const userDto = new UserDto(user);
                            const tokens = tokenService.generateTokens({ ...userDto });
                            await tokenService.saveTokenUser(userDto.id, tokens.refreshToken);
                            return { ...tokens, user: userDto }
                        };

                        const user = await UserModel.create({
                            name,
                            shopify_id: id,
                            email,
                            token: access_token
                        })

                        const userDto = new UserDto(user);
                        const tokens = tokenService.generateTokens({ ...userDto });
                        await tokenService.saveTokenUser(userDto.id, tokens.refreshToken);
                        return { ...tokens, user: userDto }
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

    async getShopifyUserOrders(refreshToken: string) {
        try {
            const userData = await tokenService.findUserByToken(refreshToken);
            if (userData?.shopify_id) {
                const url = SHOPIFY_USER_ORDERS_URL(userData?.shopify_id)
                const response = await axios.get(url, {
                    headers: {
                        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
                    },
                });
                console.log('response => ', response)
                const { data: { orders = [] } } = response || {}
                return orders;
            }
            return []
        } catch (error) {
            console.log('error => ', error)
        }
    }

}

export default new AuthService();