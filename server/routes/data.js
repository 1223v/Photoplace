const express = require('express');
const router = express.Router();
//mysql 서버 연결입니다.


const mysql      = require('mysql');
const dbconfig   = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

connection.connect();






router.get('/seoulsmap',(req,res)=>{
    var sql = `select * from Marker WHERE title LIKE '%서울%' OR city LIKE '%서울%'`;
    connection.query(sql,(err,rows)=>{
       if(err){
           
           return res.send(err);
       }
      
            return res.send(rows);
		
        
    })
});
router.post('/aimap',(req,res)=>{
	
	var AIcontent = req.body.ainame
	let AIcontents = {
		ainame:  req.body.ainame,
		ainame1: req.body.ainame1,
		ainame2: req.body.ainame2,
		ainame3: req.body.ainame3,
		ainame4: req.body.ainame4
		
		
	}
	var sql = `SELECT * FROM Marker WHERE title LIKE '%${AIcontent}%' OR tag_1 LIKE '%${AIcontent}%' OR tag_2 LIKE '%${AIcontent}%'`
	connection.query(sql,(err,rows)=>{
		
	if(err){
           console.log("실패");
           return res.send(err);
       }
    	return res.send(rows);	
		
	})
});

router.get('/busansmap',(req,res)=>{
    var sql = `select * from Marker WHERE title LIKE '%부산%' OR city LIKE '%부산%'`;
    connection.query(sql,(err,rows)=>{
       if(err){
           
           return res.send(err);
       }
      
            return res.send(rows);
		
        
    })
});

router.get('/jejusmap',(req,res)=>{
    var sql = `select * from Marker WHERE title LIKE '%제주%' OR city LIKE '%제주%'`;
    connection.query(sql,(err,rows)=>{
       if(err){
           
           return res.send(err);
       }
      
            return res.send(rows);
		
        
    })
});

router.get('/dramasmap',(req,res)=>{
    var sql = `select * from Marker WHERE title LIKE '%드라마%' OR tag_1 LIKE '%드라마%' OR tag_2 LIKE '%드라마%'`;
    connection.query(sql,(err,rows)=>{
       if(err){
           
           return res.send(err);
       }
      
            return res.send(rows);
		
        
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
    var sql = `SELECT * FROM Marker WHERE title LIKE '%${userSearch}%' OR tag_1 LIKE '%${userSearch}%' OR tag_2 LIKE '%${userSearch}%'`;
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

router.post('/Detail/:id',(req,res)=>{
	var userNum = req.body.Num;
    var sql = `SELECT * FROM Marker WHERE num = ${userNum}`;
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

    var sql = `select DISTINCT NAME from signgu_data where DAY_CODE = 2 and CODE like '1%' order by PER_CNT desc`;
    connection.query(sql,(err,rows)=>{
       if(err){  
           return res.send(err);
       }
   	tmp2 = rows;
	//console.log(tmp2)
    })
	for(var i = 0; i<3; i++){
		sql2 = `select * from Marker where city REGEXP "서울" && city REGEXP '강남구';`/*${tmp2[i].RowDataPacket.NAME}';
		console.log(sql2);
		connection.query(sql2,(err0, rows2)=>{
			if(err0){
				return res.send(err0);
			}
			temp.push(rows2);
		})
	}
	console.log(temp);
    return res.send(temp);
});
*/
router.post('/ModalSlider',(req,res)=>{
	
    
	var nums = req.body.nums;
    //var sql = `SELECT * FROM Marker WHERE num='${nums}' union SELECT num, marker_num, imageSrc,1,2,3,4,5,6 FROM slide WHERE marker_num='${nums}'`;
	var sql = `SELECT num, marker_num, imageSrc FROM slide WHERE marker_num='${nums}'`;
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

module.exports = router;
