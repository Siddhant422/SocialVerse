import express from 'express';
import {signUp,login, getMe} from '../controllers/authController.js'
import { logout } from '../controllers/authController.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();
router.get("/me", protectRoute, getMe);
router.post("/signup", signUp)
router.post("/login", login)
router.post("/logout", logout)

export default router;