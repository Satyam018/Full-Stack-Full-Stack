import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { app, server } from "./socket/socket.js";
// const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

app.use(express.json())
// app.use(cors({
//     origin: 'http://localhost:5173', // Frontend origin (adjust this to your frontend URL)
//     credentials: true,    
// }));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.get("/",(req,res)=>{res.json("hello")})



server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on ${PORT}`);
});
