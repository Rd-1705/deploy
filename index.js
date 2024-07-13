import cors from "cors";
import express from "express";
import  data  from "./main.js";

const app = express();

app.use(cors())
app.use(express.json());

app.get("/api/", (req, res) => {
    res.json(data);
})

app.listen(3000, () => {
    console.log("Server berhasil berjalan.");
}); 