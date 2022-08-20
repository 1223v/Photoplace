const express = require('express');
const router = express.Router();
//mysql 서버 연결입니다.

const mysql = require('mysql');
const dbconfig = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

connection.connect();

router.get('/seoulsmap', (req, res) => {
	var sql = `select * from Marker WHERE title LIKE '%서울%' OR city LIKE '%서울%'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.send(err);
		}

		return res.send(rows);
	});
});

router.post('/detailsi', (req, res) => {
	var usercity = req.body.city;
	
	//var usercity = "서울특별시 강남구 대치동 11-11"
	let usercitys = usercity.split(' ', 2);
	
	
	var sql = `SELECT NAME, PER_CNT,DAY_CODE FROM signgu_data WHERE CODE LIKE '1%' and NAME LIKE '%${usercitys[1]}%'`;
    //var sql=`SELECT NAME, PER_CNT FROM signgu_data WHERE CODE LIKE '1%' ORDER by PER_CNT;`;
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.send(err);
		}

        let bodys= [
        { 
            Sun: (rows[0].PER_CNT+rows[7].PER_CNT)/2,
            Mon: (rows[1].PER_CNT+rows[8].PER_CNT)/2,
            Tue: (rows[2].PER_CNT+rows[9].PER_CNT)/2,
            Wed: (rows[3].PER_CNT+rows[10].PER_CNT)/2,
            Thu: (rows[4].PER_CNT+rows[11].PER_CNT)/2,
            Fri: (rows[5].PER_CNT+rows[12].PER_CNT)/2,
            Sat: rows[6].PER_CNT,
            total:(rows[0].PER_CNT+rows[7].PER_CNT+rows[1].PER_CNT+rows[8].PER_CNT+rows[2].PER_CNT+rows[9].PER_CNT+rows[3].PER_CNT+rows[10].PER_CNT+rows[4].PER_CNT+rows[11].PER_CNT+rows[5].PER_CNT+rows[12].PER_CNT+rows[6].PER_CNT)/13
        }
        ];
        let bodypi=[(rows[0].PER_CNT+rows[7].PER_CNT)/2,(rows[1].PER_CNT+rows[8].PER_CNT)/2,(rows[2].PER_CNT+rows[9].PER_CNT)/2,(rows[3].PER_CNT+rows[10].PER_CNT)/2,(rows[4].PER_CNT+rows[11].PER_CNT)/2, (rows[5].PER_CNT+rows[12].PER_CNT)/2,rows[6].PER_CNT]
		let bodyObject = [];
		
        for(var i =0; i<7;i++){
            if(bodypi[i]>=230 && bodypi[i]<400){
                //초
				bodyObject.push("green");
            }
            else if(bodypi[i]>=400 && bodypi[i]<600){
                //노 400~600
				bodyObject.push("yellow");
            }
            else if(bodypi[i]>=600 && bodypi[i]<800){
                    //주 600~ 800
					bodyObject.push("orange");
            }
            else if(bodypi[i]>=800){
                //빨 800 이상
				bodyObject.push("red");
            }
            else if(bodypi[i] < 230){
                //파 230이하
				bodyObject.push("blue");
            }
        }
		
		return res.send(bodyObject);
	});
});

router.post('/aimap', (req, res) => {
	var AIcontent = req.body.ainame;
	let AIcontents = {
		ainame: req.body.ainame,
		ainame1: req.body.ainame1,
		ainame2: req.body.ainame2,
		ainame3: req.body.ainame3,
		ainame4: req.body.ainame4,
	};
	var sql = `SELECT * FROM Marker WHERE title LIKE '%${AIcontent}%' OR tag_1 LIKE '%${AIcontent}%' OR tag_2 LIKE '%${AIcontent}%'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			console.log('실패');
			return res.send(err);
		}
		return res.send(rows);
	});
});

router.get('/busansmap', (req, res) => {
	var sql = `select * from Marker WHERE title LIKE '%부산%' OR city LIKE '%부산%'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.send(err);
		}

		return res.send(rows);
	});
});

router.get('/jejusmap', (req, res) => {
	var sql = `select * from Marker WHERE title LIKE '%제주%' OR city LIKE '%제주%'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.send(err);
		}

		return res.send(rows);
	});
});

router.get('/dramasmap', (req, res) => {
	var sql = `select * from Marker WHERE title LIKE '%드라마%' OR tag_1 LIKE '%드라마%' OR tag_2 LIKE '%드라마%'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.send(err);
		}

		return res.send(rows);
	});
});

router.get('/Componentpage', (req, res) => {
	var sql = 'select * from Marker';
	connection.query(sql, (err, rows) => {
		if (err) {
			console.log('실패');
			return res.send(err);
		} else {
			return res.send(rows);
		}
	});
});

router.post('/Searchpage', (req, res) => {
	var userSearch = req.body.search;
	var sql = `SELECT * FROM Marker WHERE title LIKE '%${userSearch}%' OR tag_1 LIKE '%${userSearch}%' OR tag_2 LIKE '%${userSearch}%'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			console.log('실패');
			return res.send(err);
		} else {
			return res.send(rows);
		}
	});
});

router.post('/Detail/:id', (req, res) => {
	var userNum = req.body.Num;
	var sql = `SELECT * FROM Marker WHERE num = ${userNum}`;
	connection.query(sql, (err, rows) => {
		if (err) {
			console.log('실패');
			return res.send(err);
		} else {
			return res.send(rows);
		}
	});
});



router.get('/Ranking', (req, res) => {
	var sql = `select DISTINCT NAME from signgu_data where DAY_CODE = 2 and CODE like '1%' order by PER_CNT desc;`
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.send(err);
		}	
		return res.send(rows);
	});
});


router.post('/Rankinginfo', (req, res) => {
	//var ranking = req.body.rankingObject.value;
	
	let ranking = [req.body.rankingObject[0].NAME, req.body.rankingObject[1].NAME, 
				   req.body.rankingObject[2].NAME, req.body.rankingObject[3].NAME, req.body.rankingObject[4].NAME];
	/*
	var sql1 = `select * from Marker where city REGEXP '서울' && city REGEXP '${req.body.rankingObject[0].NAME};'`
	var sql2 = `select * from Marker where city REGEXP '서울' && city REGEXP '${req.body.rankingObject[1].NAME};'`
	var sql3 = `select * from Marker where city REGEXP '서울' && city REGEXP '${req.body.rankingObject[2].NAME};'`
	var sql4 = `select * from Marker where city REGEXP '서울' && city REGEXP '${req.body.rankingObject[3].NAME};'`
	var sql5 = `select * from Marker where city REGEXP '서울' && city REGEXP '${req.body.rankingObject[4].NAME};'`
	var sql = sql1 + sql2 + sql3 + sql4 +sql5
	*/
	var sql = `select * from Marker where city REGEXP '서울' && city REGEXP ?`
	console.log(sql);
	connection.query(sql, ranking (err, rows) => {
		if (err) {
			return res.send(err);
		}
		return res.send(rows);
	});
});


router.post('/ModalSlider', (req, res) => {
	var nums = req.body.nums;
	//var sql = `SELECT * FROM Marker WHERE num='${nums}' union SELECT num, marker_num, imageSrc,1,2,3,4,5,6 FROM slide WHERE marker_num='${nums}'`;
	var sql = `SELECT num, marker_num, imageSrc FROM slide WHERE marker_num='${nums}'`;
	connection.query(sql, (err, rows) => {
		if (err) {
			console.log('실패');
			return res.send(err);
		} else {
			return res.send(rows);
		}
	});
});

module.exports = router;