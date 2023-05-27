
export function randomNumber() {
    const num = Math.floor(Math.random() * 9999); // avatar images from 0000 to 9999
    return String(num).padStart(4, '0');
}

