import express from "express";
import { verifyToken } from "../lib/middleware/verifyToken.js";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/post.controller.js";
const Router = express.Router();

Router.get("/", getPosts);
Router.get("/:id", getPost);
Router.post("/", verifyToken, addPost);
Router.put("/:id", verifyToken, updatePost);
Router.delete("/:id", verifyToken, deletePost);

export default Router;
