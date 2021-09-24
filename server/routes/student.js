import express from 'express';
import { getStudents, createStudent , getFilter} from '../controller/student.js'

import cors from 'cors'; 
const router = express.Router();

router.get('/', getStudents);

router.get('/filter', getFilter);

router.post('/',createStudent);




export default router;