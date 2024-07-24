const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:pass@cluster0.sy3ivly.mongodb.net/Todo")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports={
    todo
}