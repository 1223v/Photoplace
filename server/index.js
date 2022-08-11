const express = require('express')
var cors = require('cors')
const app = express()
const path = require("path");
const bodyParser = require("body-parser");

//전체 cors 설정
app.use(cors())

//특정 도메인 cors 설정
/*
let corsOptions = {
    origin: 'https://www.domain.com',
    credentials: true
}

app.use(cors(corsOptions));
*/

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use('/api/data', require('./routes/data'));



const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})