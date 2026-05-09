const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let nextId = 1;

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name, email, message } = req.body;

    const newUser = {
        id: nextId++,
        name,
        email,
        message
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});