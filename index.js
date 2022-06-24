'use strict'

import express from "express";
import studentRouter from './routers/student-router.js'

const app = express();
const port = 5000;
const json = express.json();
app.use('/', json);
app.use(studentRouter);

app.listen(port, () => console.log(`Server is listening port ${port}`));