const express = require('express');
const path = require('path');
const todoDb = require('./data/todo-db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render('home');
})

app.get('/todos', function(req, res){
    res.render('todos/index', {
        todos: todoDb.getAll()
    });
})

app.get('/look', function(req, res){
    res.render('dogs/lookDog');
})

app.get('/pat', function(req, res){
    res.render('dogs/patDog');
})

app.get('/feed', function(req, res){
    res.render('dogs/feedDog');
})

app.get('/bestDog', function(req, res){
    res.render('dogs/bestDog');
})

app.listen(3000, function(){
    console.log('Server running at localhost:3000');
});