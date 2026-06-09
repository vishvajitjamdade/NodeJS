import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "studentdb";

export async function connectDB() {
    await client.connect();

    console.log("MongoDB connected!");

    return client.db(dbName);
}