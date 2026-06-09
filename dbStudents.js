import { connectDB } from "./db.js";

export async function addStudent(student){
    const db = await connectDB();

    await db.collection("students").insertOne(student);

    console.log("Student Added!");
}

export async function viewStudents(){
    const db = await connectDB();

    const students = await db.collection("students").find().toArray();

    console.log(students);
}

export async function getStudentById(id){
    const db = await connectDB();

    const student = await db.collection("students").findOne({
        rollno:id
    });

    console.log(student);
}

export async function deleteStudentById(id) {
    const db = await connectDB();

    const student = await db.collection("students").deleteOne({
        rollno : id
    });

    if(student.deletedCount > 0){
        console.log("Student deleted successfully");
    }
    else{
        console.log("Student not found");
    }
}