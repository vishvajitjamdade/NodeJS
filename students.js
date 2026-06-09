const students = [];

export function addStudents({ rollno, name }) {
    students.push({ rollno, name });
}

export function viewStudents() {
    for (let student of students) {
        console.log(student.rollno + " : " + student.name);
    }
}

export function getStudentById(id) {
    for (let student of students) {
        if (id === student.rollno) {
            console.log("Found : "+student.rollno + " : " + student.name);
            break;
        }
    }
}

export function deleteStudentById(id) {
    const index = students.findIndex(student => student.rollno === id);
    console.log(`Array after deleting ${id}`);
    if(index !== -1){
        students.splice(index,1);
    }
    viewStudents();
}
