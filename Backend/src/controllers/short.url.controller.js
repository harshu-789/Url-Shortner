import { getShortUrl } from "../dao/short.js";
import {
  createShortUrlWithoutUser,
  createShortUrlWithUser,
} from "../services/short_url.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

const baseUrl = process.env.APP_URL || "http://localhost:3000/";

export const createShortUrl = wrapAsync(async (req, res) => {
  const data = req.body;
  let shortUrl;
  if (req.user) {
    shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug);
  } else {
    shortUrl = await createShortUrlWithoutUser(data.url, data.slug);
  }
  res.status(200).json({ shortUrl: baseUrl + shortUrl });
});

export const redirectShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id);
  if (!url) throw new Error("Short URL not Found");
  res.redirect(url.full_url);
});

export const createCustomShortUrl = wrapAsync(async (req, res) => {
  const { url, slug } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url, slug);
  res.status(200).json({ shortUrl: baseUrl + shortUrl });
});
