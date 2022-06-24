'use strict'

import express from 'express';
import studentControllers from '../controllers/students-controller.js';
const studentRouter = express.Router();

studentRouter.get('/students', studentControllers.getStudentsController);
studentRouter.post('/students', studentControllers.postStudentsController);
studentRouter.delete('/students', studentControllers.deleteStudentsController);
studentRouter.put('/students', studentControllers.putStudentsController);

export default studentRouter;