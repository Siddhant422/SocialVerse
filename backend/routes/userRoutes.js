import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { getUserProfile, followUnfollowUser,getSuggestedUser, UpdateUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/profile/:username',protectRoute, getUserProfile);
router.get('/suggested',protectRoute, getSuggestedUser);
router.get('/follow/:id',protectRoute, followUnfollowUser);
router.get('/update',protectRoute, UpdateUser);


export default router;