const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/receiveSMS', (req, res) => {
    const incomingMessage = req.body;
    console.log(incomingMessage); 
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
