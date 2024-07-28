const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(400).send(parsedPayload.error.issues[0].message);
        return ;
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed: false,
    })
    res.json({
        msg:"Todo created"
    })
    res.status(201).send(parsedPayload.success);
})

app.get('/todos',async (req,res)=>{
    const todos = await todo.find({});

    res.json({
        todos
    })
})


app.put('/completed',async (req,res)=>{
    const updatedPayload = req.body;
    const parsedPayload = createTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(400).send(parsedPayload.error.issues[0].message);
    }
    await todo.update({
        _id : req.body.id,
    },{
        completed : true
    })
    res.status(201).send(parsedPayload.success);
})


app.listen(3000)