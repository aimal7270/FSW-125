const express = require('express');
const todoRouter = express.Router();
const {v4: uuidv4} = require('uuid');

let todoList = [
    {name: 'cricket', description: 'sunday'}, 
    {name: 'grocery', description: 'Fancy Fruit'}, 
    {name: 'Focused', description: 'School'},


todoRouter
    .get('/', (req, res) =>{
        res.send(todoList)
    })
    
    .get('/todo/:todoId', (req,res) =>{
        const todoId= req.params.todoId;
        const oneToDo = todoList.find(todo => todo._id === todoId);
        res.send(oneToDo);
    })

    .post('/', (req, res) => {
        const newToDo = req.body;
        newToDo.id = uuidv4();
        todoList.push(newToDo);

        res.send(`${newToDo} was added to the To Do List`);
    })

    .delete('/todo/:todoId', (req, res) =>{
        const todoId = req.params.todoId;
        const oneToDo = todoList.findIndex(todo => todo._id === todoId);
        todoList.splice(oneToDo, 1);

        res.send('To Do Deleted')
    })

    .put('/todo/:todoId', (req, res) =>{
        const todoId = req.params.todoId;
        const oneToDo = todoList.findIndex(todo => todo._id === todoId);
        Object.assign(todoList[oneToDo], req.body);

        res.send('To Do Updated')
    })

module.exports = todoRouter