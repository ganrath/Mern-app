import express from 'express';
import { register, login} from '../controller/login.js'

const router = express.Router();

router.post('/register',register);

router.post('/', login);




export default router;