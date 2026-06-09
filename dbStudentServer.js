import { addStudent, viewStudents, getStudentById, deleteStudentById } from "./dbStudents.js";

async function main() {

    await addStudent(
        {
            rollno: 201,
            name: "abc"
        }
    );

    await addStudent(
        {
            rollno: 202,
            name: "lmn"
        }
    );

    await addStudent(
        {
            rollno: 203,
            name: "pqr"
        }
    );

    await addStudent(
        {
            rollno: 204,
            name: "xyz"
        }
    );

    await addStudent(
        {
            rollno: 205,
            name: "sqrqzq"
        }
    );

    await addStudent(
        {
            rollno: 206,
            name: "jcb"
        }
    );

    await viewStudents();
    await getStudentById(201);
    await deleteStudentById(202);
    await viewStudents();
}

main();