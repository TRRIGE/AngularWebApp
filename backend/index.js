import { getConnection } from "oracledb";
import userRouter from "./routes/user.route.js";
import app from "./app.js"

getConnection();

app.use("/api", userRouter);