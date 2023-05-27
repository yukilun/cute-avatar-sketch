import options from '@/public/options.json'

export function getRandomId() {
    const num = Math.floor(Math.random() * 9999); // avatar images from 0000 to 9999
    return String(num).padStart(4, '0');
}

export function getPngUrl(id) {
    return `${process.env.PUBLIC_URL}/avatar/avatar_${id}.png`;
}

export function getJson(id) {
    return {
        id,
        'image-url': getPngUrl(id),
    };
}

export function getJsonDetail(id) {
    return {
        ...getJson(id),
        'facial-expression': options['facial-expression'][parseInt(id[0])],
        'hairstyle': options['hairstyle'][parseInt(id[1])],
        'facial-feature': options['facial-feature'][parseInt(id[2])],
        'accessory': options['accessory'][parseInt(id[3])],
    };
}

export function convertOptionsToId(face, hair, feature, accessory) {
    const faceIndex =  options['facial-expression'].indexOf(face);
    const hairIndex = options['hairstyle'].indexOf(hair);
    const featureIndex = options['facial-feature'].indexOf(feature);
    const accessoryIndex = options['accessory'].indexOf(accessory);

    if(faceIndex < 0 || hairIndex < 0 || featureIndex < 0 || accessoryIndex < 0) 
        return null;

    return "" + faceIndex + hairIndex + featureIndex + accessoryIndex;   
}