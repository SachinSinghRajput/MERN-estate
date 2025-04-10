import express from "express";
import { login, logout, register } from "../controller/auth.controller.js";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controller/chat.controller.js";
import { verifyToken } from "../lib/middleware/verifyToken.js";
const Router = express.Router();

Router.get("/", verifyToken, getChats);
Router.get("/:id", verifyToken, getChat);
Router.post("/", verifyToken, addChat);
Router.put("/read/:id", verifyToken, readChat);
export default Router;
