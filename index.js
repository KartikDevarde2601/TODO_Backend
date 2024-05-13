const express= require('express');
const {insertTodos, updateTodos, deleteTodos} = require('./utils/todoUtils');
const {insertUsers, updateUsers, deleteUsers} = require('./utils/userUtils');

const app = express();
app.use(express.json());

app.get('/sync/push', async (req, res) => {
    const  lastPulledAt = req.params.lastPulledAt;
    console.log(lastPulledAt)
    res.status(200).json({
        changes:{},
        timestamp: Math.floor(Date.now() / 1000)
    })
})

app.post('/sync/pull',async(req,res)=>{
    const {changes} = req.body;
    console.log(JSON.stringify(changes));

    insertUsers(changes.users.created);
    updateUsers(changes.users.updated);
    deleteUsers(changes.users.deleted);

    insertTodos(changes.todos.created);
    updateTodos(changes.todos.updated);
    deleteTodos(changes.todos.deleted);
    
    res.status(200).json({
        sync: "successfully",
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
