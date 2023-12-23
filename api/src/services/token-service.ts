const jwt = require('jsonwebtoken');
import AdminModel from '../models/Admin'
import UserModel from '../models/User'

class TokenService {

    generateTokens(payload: any) {

        const accessToken = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1d'
        })
        const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH, {
            expiresIn: '1d'
        })
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token: any) {

        try {
            const data = jwt.verify(token, process.env.SECRET);
            return data;
        } catch (error) {
            return null;
        }

    }

    validateRefreshToken(token: any) {

        try {
            const data = jwt.verify(token, process.env.SECRET_REFRESH);
            return data;
        } catch (error) {
            return null;
        }
8
    }

    async saveToken(adminId: any, refreshToken: any) {

        const AdminData = await AdminModel.findOne({ _id: adminId })
        if (AdminData.refreshToken === refreshToken) {
            return AdminData.refreshToken;
        }
        AdminData.refreshToken = refreshToken;
        AdminData.save();
        return AdminData.refreshToken;

    }
    
    async removeToken(refreshToken: any) {

        const AdminData = await AdminModel.findOne({ refreshToken });
        AdminData.refreshToken = '';
        AdminData.save();
        return AdminData.refreshToken;

    }

    async findToken(refreshToken: any) {

        const AdminData = await AdminModel.findOne({ refreshToken });
        return AdminData.refreshToken;

    }

    async saveTokenUser(adminId: any, refreshToken: any) {

        const UserData = await UserModel.findOne({ _id: adminId })
        if (UserData.refreshToken === refreshToken) {
            return UserData.refreshToken;
        }
        UserData.refreshToken = refreshToken;
        UserData.save();
        return UserData.refreshToken;

    }
    
    async removeTokenUser(refreshToken: any) {
        const UserData = await UserModel.findOne({ refreshToken });
        UserData.refreshToken = '';
        UserData.save();
        return UserData.refreshToken;
    }

    async findTokenUser(refreshToken: any) {
        const UserData = await UserModel.findOne({ refreshToken });
        return UserData.refreshToken;
    }

    async findUserByToken(refreshToken: any) {
        const UserData = await UserModel.findOne({ refreshToken }) || {};
        return UserData;
    }

    async verifyExpiration(refreshToken: any) {
        return jwt.decode(refreshToken).exp < Math.ceil(new Date().getTime() / 1000);
    };
}

export default new TokenService();