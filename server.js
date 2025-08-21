const express = require('express');

const app = express();
const PORT = 8000;

// Simulate heavy startup (e.g., DB connection, big init work)
function heavyInit() {
    return new Promise((resolve) => {
        console.log("🛠️ Server is doing heavy startup work...");
        setTimeout(() => {
            console.log("✅ Heavy work done!");
            resolve();
        }, 5000); // 5 second delay
    });
}

app.get('/', (req, res) => {
    res.send("this is home");
});

heavyInit().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running http://localhost:${PORT}`);
    });
});