const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('index');
});
app.get('/rolldice', (req, res)=>{
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice', {randomNumber});
});

app.get('/ig/:username', (req , res )=>{
const instaData = require('./data.json');
const {username} = req.params;
const data = instaData[username];
// console.log(data)
if(instaData[username]){
    res.render('igprofile', {data: data});
}else{
    res.send('User not found');
}
})

app.listen(port, ()=>{
    console.log(`The Server is running on port: ${port}`);
})