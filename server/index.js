const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!aaa')
})
app.get('/hello',(req,res)=>{
	res.send("안녕하세요gggggg")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})