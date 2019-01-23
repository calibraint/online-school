import { Router } from 'express';
import * as SchoolController from '../controllers/school.controller';

const router = new Router();

// Add a new School
router.route('/schools')
  .post(SchoolController.addSchool);

export default router;
