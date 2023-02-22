const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/Post");

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors())
app.use("/posts", express.static("uploads"))

const mongoUrl = process.env.MONGO_URL || "mongodb+srv://instaclone:instaclone@cluster0.vgvjaf6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl).then(() => {
    console.log("Connected to Mongo Atlas Database");
}).catch(err => {
    console.log("Error in connecting to Mongo Atlas Database"+"\n"+err);
})

app.use("", router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started at Port ${port}`);
})