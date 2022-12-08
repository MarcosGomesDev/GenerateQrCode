// @ts-nocheck
import qr from 'qrcode';
import fs from 'node:fs'
import cloud from './cloud'


const generateQR = async text => {
    try {
        const image = await qr.toDataURL(text)

        const result = await cloud.uploader.upload(image, {
            public_id: Math.floor(10000 + Math.random() * 90000) + 'qr',
            width: 500,
            height: 500,
            crop: "fill"
        })

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

generateQR('https://candy-cake-api.vercel.app/')