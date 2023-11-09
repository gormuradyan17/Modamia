
export const colorFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
    hexcode: [
        {rule: { required : true }, error: {message: 'HexCode is required'} },
        {rule: { test: /^#(?:[0-9a-fA-F]{3}){1,2}$/ }, error: {message: 'Incorrect format for HexCode'} },
    ],
}