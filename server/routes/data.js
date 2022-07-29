const express = require('express');
const router = express.Router();
//mysql 서버 연결입니다.


const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

connection.connect();






router.get('/map',(req,res)=>{
    sql = "select * from Marker";
    connection.query(sql,(err,rows)=>{
       if(err){
           console.log("실패");
           return res.send(err);
       }
      else{
            return res.send(rows);
		}
        
    })
});

router.get('/Componentpage',(req,res)=>{
    var sql = "select * from Marker"
    connection.query(sql,(err,rows)=>{
       if(err){
           console.log("실패");
           return res.send(err);
       }
       
    	else{
            return res.send(rows);
		}
    })
});

router.post('/Searchpage',(req,res)=>{
	
    
	var userSearch = req.body.search;
    var sql = `SELECT * FROM Marker WHERE tag_1 LIKE '%${userSearch}%' OR tag_2 LIKE '%${userSearch}%'`;
    connection.query(sql,(err,rows)=>{
		
       if(err){
           console.log("실패");
           return res.send(err);
       }
      else{
		  	
            return res.send(rows);
		}
        
    })
});

/*
router.get('/Ranking',(req,res)=>{
	
    
	var userSearch = req.body.search;
    var sql = `SELECT * FROM Marker WHERE tag_1 LIKE '%${userSearch}%' OR tag_2 LIKE '%${userSearch}%'`;
    connection.query(sql,(err,rows)=>{
		
       if(err){
           console.log("실패");
           return res.send(err);
       }
      else{
		  	
            return res.send(rows);
		}
        
    })
});
*/

module.exports = router;
