const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());

app.post('/todo',(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(400).send(parsedPayload.error.issues[0].message);
    }
    res.status(201).send(parsedPayload.success);
})

app.get('/todos',(req,res)=>{

})


app.put('/completed',(req,res)=>{
    const updatedPayload = req.body;
    const parsedPayload = createTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(400).send(parsedPayload.error.issues[0].message);
    }
    res.status(201).send(parsedPayload.success);
})


app.listen(3000)