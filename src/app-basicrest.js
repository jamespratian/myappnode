const express=require('express');
const port =3000;
//create application object 

const app=express();

//Rest end points
//http://localhost:3000/api
app.get('/api/list',function(req,resp){
    resp.end('api list  get is called');
});
app.post('/api/list',function(req,resp){
    resp.end('api list post is called');
});

app.put('/api/list',function(req,resp){
    resp.end('api list put is called');
});

app.delete('/api/list',function(req,resp){
    resp.end('api list delete is called');
});

app.listen(port,function(){
console.log(`express server is ready`);
});

