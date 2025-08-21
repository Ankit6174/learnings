const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("this is home");
});

app.listen(PORT, () => {
    console.log(`Server runnig http://localhost:${PORT}`)
});