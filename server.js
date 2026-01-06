const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("Home");
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});