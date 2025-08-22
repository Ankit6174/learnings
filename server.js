const express = require('express');
const dotenv = require('dotenv');
const DB = require('./config/db');
const userModel = require('./models/user');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

DB();

app.get('/', (req, res) => {
    res.render("form");
});

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.post("/createuser", async (req, res) => {
    let { name, email, number } = req.body;
    await userModel.create({
        name,
        email,
        number
    });
    res.send("User created!");
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});