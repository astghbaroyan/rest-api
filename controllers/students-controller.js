'use strict'

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

    return res
    .status(200)
    .send({
        data: students
    });
}



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
    const requestBody = req.body;

    students.push({
        id: ++id,
        ...requestBody
    });

    return res
    .status(201)
    .send({
        name: students
    });
}



//delete
function deleteStudentsController(req, res){
    console.log('this is deleteStudentsController');
    
    const requestBody = req.body;

    students = students.filter((student)=>{
        return student.id !== +requestBody.id;
    })

    return res
    .status(204)
    .send();
}


//put
function putStudentsController(req, res){
    console.log('this is putStudentsController');
    
    const requestBody = req.body;

    students = students.map((student)=>{
        if(student.id === +requestBody.id){
            student.course = requestBody.course;
        }
        return student;
    })

    return res.send({
        name: students
    });
}



export default {
    getStudentsController,
    postStudentsController,
    deleteStudentsController,
    putStudentsController
}