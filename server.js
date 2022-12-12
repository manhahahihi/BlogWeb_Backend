import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes";
import cors from "cors";
import blogRouter from "./routes/blogRoutes";
//import blogRouter from "./routes/blogRoutes";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);


mongoose.set('strictQuery', true);
mongoose
    .connect("mongodb+srv://webapp:15102303@first.navtlma.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() =>
        console.log("connected to database")
    )
    .catch((err) => console.log(err));