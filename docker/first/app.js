import express from 'express';
import {connectToDatabase} from "./helper.js";
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the app");
})

await connectToDatabase()

app.listen(3000);

