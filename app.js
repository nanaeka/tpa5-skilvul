require("dotenv").config();
const express = require("express"),
bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//ini menyambungkan file app ke file user di folder router
const UserRouter = require('./routes/user')
// ini menyambungkan file app ke file todolist di folder router
const TodoRouter = require('./routes/todo')
// ini url untuk user (/user/signup) atau (/user/login)
app.use("/user",UserRouter);
// ini url untuk todolist (/todo/tambah) atau (/todo/edit)
app.use("/todo",TodoRouter);

app.listen(5000, function () {
console.log("Started application on port %d", 5000);
}); 

