import {addStudents,viewStudents,getStudentById, deleteStudentById} from "./students.js"

addStudents({
    rollno:101,
    name:"vishvajit"
});

addStudents(
    {
        rollno:102,
        name:"viraj"
    }
);

addStudents({
    rollno:103,
    name:"Umesh"
})

addStudents({
    rollno:104,
    name:"Tushar"
})

addStudents({
    rollno:105,
    name:"Vaibhav"
})

viewStudents();
getStudentById(101);
deleteStudentById(101);