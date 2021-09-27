import express from 'express';
import { register} from '../controller/login.js'

import cors from 'cors'; 
const router = express.Router();

router.post('/register',register);








export default router;