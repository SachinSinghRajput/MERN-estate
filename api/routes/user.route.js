import express from "express";
import { login, logout, register } from "../controller/auth.controller.js";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  savePost,
  profilePosts,
  getNotificationNumber,
} from "../controller/user.controller.js";
import { verifyToken } from "../lib/middleware/verifyToken.js";
const Router = express.Router();

Router.get("/", getUsers);
// Router.get("/:id", verifyToken, getUser);
Router.put("/:id", verifyToken, updateUser);
Router.delete("/:id", verifyToken, deleteUser);
Router.post("/save", verifyToken, savePost);
Router.get("/profilePosts", verifyToken, profilePosts);
Router.get("/notification", verifyToken, getNotificationNumber);
export default Router;
