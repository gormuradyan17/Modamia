import ApiError from "../exceptions/api-error";

import tokenService from '../services/token-service';

export const authMiddleware = (req: any, res: any, next: any) => {
    try {
        var authorizationHeader = req.headers.cookie;
        if (!authorizationHeader) {
            res.clearCookie("refreshToken");
            res.status(400).json({ msg: 'Validation error', errors: 'User is not authentificated' });
        }

        const accessToken = authorizationHeader.split(' ')[1]?.split('accessToken=')?.[1];
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