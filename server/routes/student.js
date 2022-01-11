import express from 'express';
import { getStudents, createStudent , getFilter, cookieChecker} from '../controller/student.js'

import cors from 'cors'; 
const router = express.Router();

router.get('/', cookieChecker, getStudents);

router.get('/filter',cookieChecker,  getFilter);

router.post('/',cookieChecker, createStudent);




export default router;