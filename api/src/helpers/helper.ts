import sizeOf from 'image-size'

export const getFileOriginalMimeType = (file: any) => {
    try {
        const sizedImage = sizeOf(file)
        const { type } = sizedImage
        return `.${type}`
    } catch (error) {
        return ''
    }
}