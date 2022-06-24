'use strict'

import express from "express";
const app = express();
const port = 3000;

app.listen(3000, ()=> console.log(`Server is listening port ${port}`));

let students = [
    {
        id: 1,
        name: 'Bella Avagyan',
        course: 'SQL',
        age: 20,
        distanceԼearning: true
    },
    {
        id: 2,
        name: 'Aram Vardanyan',
        course: 'C++',
        age: 30,
        distanceԼearning: true
    },
    {
        id: 3,
        name: 'Arsine Abrahamyan',
        course: 'SQL',
        age: 25,
        distanceԼearning: false
    }
]

let id = students.length;

// get
function getStudentsController(req, res){
    console.log('this is getStudentsController');
    return res.send({
        data: students
    });
}

app.get('/students', getStudentsController);

// post
function postStudentsController(req, res){
    console.log('this is postStudentsController');
    
    students.push({
        id: 4,
        name: 'Gayane Galoyan',
        course: 'MongoDB',
        age: 20,
        distanceԼearning: true
    });
    const requestQuery = req.query;

    students.push({
        id: ++id,
        ...requestQuery
    });

    return res.send({
        name: students
    });
}

app.post('/students', postStudentsController);

//delete
function deleteStudentsController(req, res){
    console.log('this is deleteStudentsController');
    
    const requestQuery = req.query;

    students = students.filter((student)=>{
        return student.id !== +requestQuery.id;
    })

    return res.send({
        name: students
    });
}
app.delete('/students',deleteStudentsController);

//put
function putStudentsController(req, res){
    console.log('this is putStudentsController');
    
    const requestQuery = req.query;

    students = students.map((student)=>{
        if(student.id === +requestQuery.id){
            student.course = requestQuery.course;
        }
        return student;
    })

    return res.send({
        name: students
    });
}
app.put('/students',putStudentsController);