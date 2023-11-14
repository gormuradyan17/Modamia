import { ObjectType } from "shared/helpers/helpers";

interface Rule {
    error: any;
    rule: any;
}

export type ErrorInfo = Record<string, Record<string, {message: string}>>


export const formValidator = (formData: ObjectType, options: ObjectType) => {
    const errorInfo = Object.keys(formData).reduce((acc: any, inputName): any => {
        const currnetInputOptions:Rule[] = options[inputName] || [];
        const inputValue = formData[inputName];
        currnetInputOptions.forEach(option => {
            const rule = option.rule;
            const error = option.error; 

            if(rule.required !== undefined && !inputValue) {
                acc[inputName] = error;
            }
            if(rule.test !== undefined && !rule.test.test(inputValue)) {
                acc[inputName] = error;
            }
        });
        return acc;
    }, {});

    return Object.keys(errorInfo).length ? errorInfo : false;
};

export const getAllErrorMessages = (options: ObjectType) => {
    return Object.keys(options).reduce((acc: any, item) => {
        acc[item] = { message:  `${item} not valid`};
        return acc;
    }, {});
};
