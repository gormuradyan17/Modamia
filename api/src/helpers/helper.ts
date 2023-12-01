import sizeOf from 'image-size'
import fs from 'fs'
import path from 'path'

export const getFileOriginalMimeType = (file: any) => {
    try {
        const sizedImage = sizeOf(file)
        const { type } = sizedImage
        return `.${type}`
    } catch (error) {
        return ''
    }
}

export const createPrintsDirsIfNotExists = async () => {
    if (!fs.existsSync(path.join(__dirname, '../../uploads/prints'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/prints'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/prints/highs'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/prints/highs'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/prints/previews'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/prints/previews'), { recursive: true });
}

export const createMannequinsDirsIfNotExists = async () => {
    if (!fs.existsSync(path.join(__dirname, '../../uploads/mannequins'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/mannequins'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/mannequins/fronts'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/mannequins/fronts'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/mannequins/backs'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/mannequins/backs'), { recursive: true });
}

export const createSilhouettesDirsIfNotExists = async () => {
    if (!fs.existsSync(path.join(__dirname, '../../uploads/silhouettes'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/silhouettes'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/silhouettes/tops'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/silhouettes/tops'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/silhouettes/bottoms'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/silhouettes/bottoms'), { recursive: true });
    if (!fs.existsSync(path.join(__dirname, '../../uploads/silhouettes/sleeves'))) await fs.mkdirSync(path.join(__dirname, '../../uploads/silhouettes/sleeves'), { recursive: true });
}

export const getCookieValue = (cookie: string, key: string) => {
    const matches = cookie.match(new RegExp(`${key}=(.*?)(;|$)`));
    return matches ? matches[1] : null;
}
  