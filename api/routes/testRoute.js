import express from "express";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controller/test.controller.js";
import { verifyToken } from "../lib/middleware/verifyToken.js";

const Router = express.Router();

Router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);
Router.get("/should-be-admin", shouldBeAdmin);

export default Router;
