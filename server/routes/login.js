import express from 'express';
import { register} from '../controller/login.js'

const router = express.Router();

router.post('/register',register);








export default router;