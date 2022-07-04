const express = require('express');
const router = express.Router();
//mysql 서버 연결입니다.
/*

const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});
*/
//connection.end();

router.get("/hello", (req, res) => {

    res.send("안녕하세요gggggg")
});

router.get('/', (req, res) => {
  res.send('Hello World!aaa')
});



module.exports = router;
