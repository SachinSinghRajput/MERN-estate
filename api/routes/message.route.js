import express from "express";
import { addMessage } from "../controller/message.controller.js";
import { verifyToken } from "../lib/middleware/verifyToken.js";
const Router = express.Router();

Router.post("/:chatId", verifyToken, addMessage);
export default Router;
