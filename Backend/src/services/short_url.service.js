import { generateNanoid } from "../utils/helper.js";
import urlSchema from "../models/short.model.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/short.js"



export const createShortUrlWithoutUser = async (url) =>{
    const shortUrl = generateNanoid(7)
    if(!shortUrl) throw new Error ("Short Url not Generated")
        await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async(url,userId,slug=null)=>{
    const shortUrl = slug || generateNanoid(7)
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("This custom url already exists")
        await saveShortUrl(shortUrl,url,userId)
        return shortUrl
}