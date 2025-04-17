import express from "express";
import { project_master } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/project-master").post(project_master);

export default userRouter;
