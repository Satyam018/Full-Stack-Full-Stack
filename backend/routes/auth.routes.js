import express from "express"
import { login, logout, signup } from "../controllers/auth.controllers.js";
const router=express.Router();

const app=express();

router.post("/login",login)

app.post("/api/auth/signup",signup);

app.post("/api/auth/logout",logout);


export default router;