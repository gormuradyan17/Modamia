import { body } from 'express-validator'
import bcrypt from 'bcryptjs'
import Admin from '../../models/Admin'

export const adminSigninValidators = [
    body('email')
        .custom(async (value, { req }) => {
            try {
                const user = await Admin.findOne({ email: value })
                if (!user) {
                    return Promise.reject('Incorrect email(username) or password')
                }
            } catch (error) {
                console.log(error);
            }
        })
        .normalizeEmail(),
    body('password', 'Password has been min 6 symbols')
        .isLength({ min: 6, max: 56 })
        .custom(async (value, { req }) => {
            try {
                var user = await Admin.findOne({ email: req.body.email })
                if (!user) {
                    return Promise.reject('Incorrect email(username) or password')
                }
                var passwordIsValid = bcrypt.compareSync(
                    value,
                    user.password
                );
                if (!passwordIsValid) {
                    return Promise.reject('Incorrect email(username) or password')
                }
            } catch (error) {
                console.log(error);
            }
        })
        .trim()
]

export const newAdminValidators = [
    body('email')
        .normalizeEmail()
        .isEmail() // Add this line for email validation
        .withMessage('Invalid email address'),
    body('password', 'Password has been min 6 symbols')
        .isLength({ min: 6, max: 56 })
        .trim()
]