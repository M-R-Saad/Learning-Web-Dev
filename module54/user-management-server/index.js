const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('User Management Server is running');
});

const users = [
    { id: 1, name: 'Alice', email: 'alice123@gmail.com'},
    { id: 2, name: 'Bob', email: 'bob666@gmail.com'},
    { id: 3, name: 'Charlie', email: 'charlie10@gmail.com'},
]

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
    console.log('Received new user data:', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});