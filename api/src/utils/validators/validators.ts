import { body } from 'express-validator'
import bcrypt from 'bcryptjs'
import Admin from '../../models/Admin'
import User from '../../models/User'
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

export const signinValidators = [
    body('email')
        .custom(async (value, { req }) => {
            try {
                const user = await User.findOne({ email: value })
                if (!user) {
                    return Promise.reject('Incorrect email(username) or password')
                }
                if (!user.verified) {
                    return Promise.reject('Account not confirmed.')
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
                var user = await User.findOne({ email: req.body.email })
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

export const signupValidators = [
    body('email')
        .isEmail().withMessage('Input a correct email')
        .custom(async (value, { req }) => {
            try {
                const user = await User.findOne({ email: value })
                if (user) {
                    return Promise.reject('User already exists')
                }
            } catch (error) {
                console.log(error);
            }
        })
        .normalizeEmail(),
    body('password', 'Password has been min 6 symbols')
        .isLength({ min: 6, max: 56 })
        .isAlphanumeric()
        .trim(),
    // body('confirm')
    //     .custom((value, { req }) => {
    //         if (value !== req.body.password) {
    //             return Promise.reject('Confirm password must been a same with password')
    //         } else { return true }
    //     })
    //     .trim(),
    body('name')
        .isLength({ min: 3 }).withMessage('Name field has been a min 3 symbols')
        .trim()
]

export const editValidators = [
    body('email')
        .optional()
        .isEmail().withMessage('Input a correct email')
        .custom(async (value, { req }) => {
            if (value) { // Validate only if email is not empty
                try {
                    const user = await User.findOne({ email: value })
                    if (user) {
                        return Promise.reject('User already exists')
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        })
        .normalizeEmail(),
    body('password', 'Password has been min 6 symbols')
        .optional()
        .isLength({ min: 6, max: 56 })
        .isAlphanumeric()
        .trim(),
    body('name')
        .optional()
        .isLength({ min: 3 }).withMessage('Name field has been a min 3 symbols')
        .trim()
]

export const forgotValidators = [
    body('email')
        .custom(async (value, { req }) => {
            try {
                const user = await User.findOne({ email: value })
                if (!user) {
                    return Promise.reject('Incorrect email(username)')
                }
            } catch (error) {
                console.log(error);
            }
        })
        .normalizeEmail(),
]

export const recoveryValidators = [
    body('password', 'Password has been min 6 symbols')
        .isLength({ min: 6, max: 56 })
        .isAlphanumeric()
        .trim(),
    body('confirm')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                return Promise.reject('Confirm password must been a same with password')
            } else { return true }
        })
        .trim(),
    body('code')
        .custom(async (value, { req }) => {
            try {
                const user = await User.findOne({ code: req.body.code })
                if (!user) {
                    return Promise.reject('Incorrect recovery code')
                }
            } catch (error) {
                console.log(error);
            }
        })
]