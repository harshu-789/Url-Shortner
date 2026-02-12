import express from "express";
import { nanoid } from "nanoid";
import connectDB from "./src/config/mongo.config.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utils/errorHandler.js";
import { redirectShortUrl } from "./src/controllers/short.url.controller.js";
import shortUrl from "./src/router/short_url.router.js";
import authRouter from "./src/router/auth.routes.js";
import userRouter from "./src/router/user.routes.js";
import { attachUser } from "./src/utils/attachUser.js";
import cors from "cors";

// dotenv.config("./.env")
dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.VITE_API_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(attachUser);
app.use("/api/create", shortUrl);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.get("/:id", redirectShortUrl);
app.use(errorHandler);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});
