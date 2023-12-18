import { SHOPIFY_CLIENT_ID, SHOPIFY_CLIENT_SECRET, SHOPIFY_REDIRECT_URL, SHOPIFY_SCOPES, SHOPIFY_SHOP } from "./variables";

export const SHOPIFY_SIGNIN_URL = `https://${SHOPIFY_SHOP}.myshopify.com/admin/oauth/authorize?client_id=${SHOPIFY_CLIENT_ID}&scope=${SHOPIFY_SCOPES}&redirect_uri=${SHOPIFY_REDIRECT_URL}`

export const SHOPIFY_OUATH_URL = (code: string) => {
    return `https://${SHOPIFY_SHOP}.myshopify.com/admin/oauth/access_token?client_id=${SHOPIFY_CLIENT_ID}&client_secret=${SHOPIFY_CLIENT_SECRET}&code=${code}`
} 

export const SHOPIFY_USER_URL = `https://${SHOPIFY_SHOP}.myshopify.com/admin/api/2023-10/shop.json`;