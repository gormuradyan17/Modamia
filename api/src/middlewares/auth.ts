import ApiError from "../exceptions/api-error";
import { getCookieValue } from "../helpers/helper";

import tokenService from '../services/token-service';

export const authMiddleware = (req: any, res: any, next: any) => {
    try {
        const httpRequest = req.headers;
        if (!httpRequest) {
            res.clearCookie("refreshToken");
            res.status(400).json({ msg: 'Validation error', errors: 'User is not authentificated' });
        }

        const accessToken = getCookieValue(httpRequest.cookie, 'accessToken');
        if (!accessToken) {
            res.clearCookie("refreshToken");
            res.status(400).json({ msg: 'Validation error', errors: 'User is not authentificated' });
        }

        const adminData = tokenService.validateAccessToken(accessToken)

        if (!adminData) {
            res.clearCookie("refreshToken");
            res.status(400).json({ msg: 'Validation error', errors: 'User is not authentificated' });
        }

        req.user = adminData;
        next();
    } catch (error) {
        res.clearCookie("refreshToken");
        res.status(400).json({ msg: 'Validation error', errors: 'User is not authentificated' });
    }
}