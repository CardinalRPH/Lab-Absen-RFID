import { Router } from 'express';
import testCont from '../controllers/testController.js';
import loginMid from '../middlewares/loginMid.js';
import loginController from '../controllers/loginController.js';
import attendanceMid from '../middlewares/attendanceMid.js';
const router = Router();

/* GET home page. */
router.get('/test', attendanceMid, testCont)
router.post('/login', loginMid, loginController)

export default router;
