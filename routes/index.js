import { Router } from 'express';
import testCont from '../controllers/testController.js';
import loginController from '../controllers/loginController.js';
import unloggedMid from '../middlewares/unloggedMid.js';
import loggedMid from '../middlewares/loggedMid.js';
import { assistantDelete, assistantGet, assistantGetAssistant, assistantGetCalas, assistantPost, assistantPut } from '../controllers/assistantController.js';
import { attendanceDelete, attendanceGet, attendanceGetAssistant, attendanceGetCalas, attendancePost, attendancePut } from '../controllers/attendanceController.js';
import { leaveDelete, leaveGet, leavePost, leavePut } from '../controllers/leaveController.js';
import { RFIDDelete, RFIDGet, RFIDPost, RFIDPut } from '../controllers/RFIDController.js';
import exportController from '../controllers/exportController.js';
import RFIDFetchController from '../controllers/RFIDFetchController.js';
const router = Router();

router.get('/test', loggedMid, testCont)

router.post('/login', unloggedMid, loginController)
router.post('/rfidFetch', unloggedMid, RFIDFetchController)
router.get('/export', loggedMid, exportController)

router.post('/assistant', loggedMid, assistantPost)
router.put('/assistant', loggedMid, assistantPut)
router.get('/assistant', unloggedMid, assistantGet)
router.get('/assistant/assistant', unloggedMid, assistantGetAssistant)
router.get('/assistant/calas', unloggedMid, assistantGetCalas)
router.delete('/assistant', loggedMid, assistantDelete)

router.post('/attendance', unloggedMid, attendancePost)
router.put('/attendance', unloggedMid, attendancePut)
router.get('/attendance', unloggedMid, attendanceGet)
router.get('/attendance/assistant', unloggedMid, attendanceGetAssistant)
router.get('/attendance/calas', unloggedMid, attendanceGetCalas)
router.delete('/attendance', unloggedMid, attendanceDelete)

router.post('/leave', unloggedMid, leavePost)
router.put('/leave', unloggedMid, leavePut)
router.get('/leave', unloggedMid, leaveGet)
router.delete('/leave', unloggedMid, leaveDelete)

router.post('/rfid', loggedMid, RFIDPost)
router.get('/rfid', loggedMid, RFIDGet)
router.put('/rfid', loggedMid, RFIDPut)
router.delete('/rfid', loggedMid, RFIDDelete)

export default router;
