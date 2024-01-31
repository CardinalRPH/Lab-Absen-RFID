import { Router } from 'express';
import testCont from '../controllers/testController.js';
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', testCont)

export default router;
