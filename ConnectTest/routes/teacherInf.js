const express = require('express');
const router = express.Router();
const dbConnect = require('../connection/sqlConnect')


router.get('/information',(req,res,next)=>{
    dbConnect.query('SELECT * FROM teachers',(err,result)=>{
        if(err){
            console.log(err);
            throw err;
        }else{
            res.status(200);
            res.json({"results":result})
        }
    })
})

router.post('/insert',(req,res,next)=>{
    let data=req.body
    dbConnect.query('INSERT INTO teachers (Id,Name,Age,Email,CourseTitle) VALUES (?,?,?,?,?)',
    [data.id,data.name,data.age,data.email,data.course,],
    (err,result)=>{
        if(err){
            console.log(err);
            throw err
        }else{
            res.status(200).json({"message":"Insert Data Successfully!!"})
        }
    }) 
})

router.patch('/',(req,res,next)=>{
    let data=req.body
    dbConnect.query('UPDATE  teachers SET Name=?,Age=? WHERE Id=?',[data.name,data.age,data.id],(err,result)=>{
        if(err){
            throw err
        }else{
            res.status(200).json({'message':'update data successful!'})
        }
    })
})

router.delete('/:Noid',(req,res,next)=>{
    let dataId = req.params.Noid
    dbConnect.query('DELETE FROM teachers WHERE id=?',dataId,(err,result)=>{
        if(err){
            console.log(err)
            throw err
        }else{
            res.status(204).json({'message':'delete data successful!'})
        }
    })
})



module.exports=router
