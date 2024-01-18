
export const colorFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
    hexcode: [
        {rule: { required : true }, error: {message: 'HexCode is required'} },
        {rule: { test: /^#(?:[0-9a-fA-F]{3}){1,2}$/ }, error: {message: 'Incorrect format for HexCode'} },
    ],
}

export const printFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
    price: [
        {rule: { required : true }, error: {message: 'Price is required'} },
    ]
}

export const printFilesOptions = {
    highresurl: [
        {rule: { test: /^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i }, error: {message: 'Incorrect format for Highres Url'} }
    ],
    previewurl: [
        {rule: { test: /^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i }, error: {message: 'Incorrect format for Preview Url'} }
    ]
}

export const mannequinFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
    width: [
        {rule: { required : true }, error: {message: 'Width is required'} },
    ],
    height: [
        {rule: { required : true }, error: {message: 'Height is required'} },
    ]
}

export const mannequinFilesOptions = {
    fronturl: [
        {rule: { test: /^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i }, error: {message: 'Incorrect format for Front Url'} }
    ],
    backurl: [
        {rule: { test: /^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i }, error: {message: 'Incorrect format for Back Url'} }
    ]
}


export const silhouetteFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
    price: [
        {rule: { required : true }, error: {message: 'Price is required'} },
    ],
    type: [
        {rule: { required : true }, error: {message: 'Type is required'} },
    ],
    orientation: [
        {rule: { required : true }, error: {message: 'Orientation is required'} },
    ],
    width: [
        {rule: { required : true }, error: {message: 'Width is required'} },
    ],
    height: [
        {rule: { required : true }, error: {message: 'Height is required'} },
    ]
}

export const silhouetteFilesOptions = {
    silhouetteurl: [
        {rule: { test: /^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i }, error: {message: 'Incorrect format for Silhouette Url'} }
    ]
}

export const sizeFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
}

export const variantFormOptions = {
    name: [
        {rule: { required : true }, error: {message: 'Name is required'} },
    ],
}

export const superAdminFormOptions = {
    email: [
        {rule: { required : true }, error: {message: 'Email is required'} },
    ],
    password: [
        {rule: { required : true }, error: {message: 'Password is required'} },
    ]
}

export const garmentFilesOptions = {
    background: [
        {rule: { test: /^$|\.jpe?g$|\.png$|\.webp$|\.bmp$/i }, error: {message: 'Incorrect format for Front Url'} }
    ],
}