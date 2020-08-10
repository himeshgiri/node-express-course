const express = require('express');
const app = express();

app.get('/hello', function(req,res){
  res.json({
    message: 'Hello World'
  })
})
app.get('/hello/:id',function(req,res){
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})
app.listen(8000,function(){
  console.log("server is running")
})