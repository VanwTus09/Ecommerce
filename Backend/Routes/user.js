import express from 'express'
import authenToken from '../middleware/middleware.js';
import { GetUser } from '../controller/user.js';
const router = express.Router();

router.get('/', authenToken,GetUser );
export default router;

