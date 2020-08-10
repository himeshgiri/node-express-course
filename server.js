const express = require('express');
const app = express();

app.get('/hello', function(req,res){
  res.json({
    message: 'Hello World'
  })
})
app.listen(8000,function(){
  console.log("server is running")
})