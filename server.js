const express = require('express');

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("form");
});

const userModel = require('./models/user');

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