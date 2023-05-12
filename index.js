const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//* Middleware 
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Evo', email: 'evo@gmail.com'},
    {id: 2, name: 'Evo2', email: 'evo2@gmail.com'},
    {id: 3, name: 'Evo3', email: 'evo3@gmail.com'},
]

app.get('/', (req, res) =>{
    res.send('Users Management Server is running')
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser);
})

app.listen(port, () =>{
    console.log(`Server is running on PORT: ${port}`);
})