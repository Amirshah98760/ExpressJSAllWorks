const express = require('express');
const app = express();
const port = 3000;


app.get('/',(req,res)=>{
    res.send("Home Page");
});

app.get('/about',(req,res)=>{
    res.status(200).send("About Page");
});

app.put('/update/:id',(req,res)=>{
 const param = req.params.id;
 console.log(param);
 console.log('Update route ');
    res.send("Update Page");
});

app.get('/users', (req,res)=>{
    const query = req.query;
    console.log(query.name, query.age);
    res.status(200).send("Users Page");
});


app.listen(port, ()=>{
    console.log('The server is listening on port  :', port)
});