// @ts-nocheck

import qr from 'qrcode';

const generateQR = async text => {
    try {
        await qr.toFile('qr.png',text)
    } catch (error) {
        console.log(error)
    }
}

generateQR('https://candy-cake-api.vercel.app/')