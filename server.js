const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/resultado', (req, res) => {
    res.json({
        humanas: 20,
        exatas: 30,
        sociais: 10,
        bio: 15,
        tech: 25
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});