const express = require('express')
const mongoose = require('mongoose')
// 连接mongo 并且使用test集合(相当于mysql中的库)
const DB_URL = 'mongodb://127.0.0.1:27017/suedar'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
    console.log('mongo connect success') //连接成功后输出
})
// 类似于mysql的表 MongoDB里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, required: true},
    age: {type: Number, required: true}
}))

// 新建数据，执行一次后可注释掉(执行一次就会插入一条数据)
User.create({
    user: 'imooc2',
    age: 20
}, function(err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

// 新建app
const app = express()
app.get('/', function(req, res) {
    res.send('<h1>hello worl1d</h1>')
})

app.get('/data', function(req,res) {
    User.find({}, function(err, doc){
        res.json(doc)
    })
})

app.listen(9093, function() {
    console.log('Node app start at port 9093')
})