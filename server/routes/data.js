const express = require('express');
const router = express.Router();
//mysql 서버 연결입니다.


const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

connection.connect();



//connection.end();

router.get("/hello", (req, res) => {

    res.send("안녕하세요gggggg")
});

router.get('/', (req, res) => {
  res.send('Hello World!aaa');
	res.send("hihiih");
});

router.get('/map',(req,res)=>{
    sql = "select * from Marker1";
    connection.query(sql,(err,rows)=>{
       if(err){
           console.log("실패");
           return res.send(err);
       }
       else{  
            console.log("성공");
            return res.send(rows);
        }
    })
});

router.get('/Componentpage',(req,res)=>{
    sql = "select * from Marker"
    connection.query(sql,(err,rows)=>{
       if(err){
           console.log("실패");
           return res.send(err);
       }
       else{  
            console.log("성공");
            return res.send(rows);
        }
    })
});

module.exports = router;
