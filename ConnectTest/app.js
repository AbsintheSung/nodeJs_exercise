const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const teacherRouter = require('./routes/teacherInf')
const databaseConnect = require("./connection/sqlConnect");
const PORT = 8000;

app.set('view engine','ejs');
app.get('/input',(req,res)=>{
    res.render('index.ejs')
})
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/teachers',teacherRouter)

app.listen(PORT,function(){
    console.log("Server is Start of: "+PORT)
})