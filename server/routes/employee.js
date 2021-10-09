import express from 'express';
import { employee, employeeData} from '../controller/employee.js'

const router = express.Router();

router.post('/', employee);

router.get('/', employeeData);








export default router;