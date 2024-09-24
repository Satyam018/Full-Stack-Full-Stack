import express from "express";
import protectRoute from "../middleware/protectroute.js";
import  {getUsersProfile} from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/",protectRoute,getUsersProfile)


export default router;