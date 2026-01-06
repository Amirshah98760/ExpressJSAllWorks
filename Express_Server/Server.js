const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) =>{
    res.send('Hello world!');
});

app.get('/about', (req, res) =>{
    console.log(req.method)
    // res.send('This is the about page');
    res.send('<h1>About Page</h1>');
});
app.get('/:items/:id', (req, res) =>{
    const {items, id } = req.params;
    res.send(`This is item number ${id} of ${items}`)
})

app.get('/Data', (req, res) =>{
    const data = '<h1>Data Page</h1><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';
    res.send(data);
});

app.get('/Content' , (req, res) =>{
    res.sendFile(__dirname + '/Frontend/index.html');
});


app.get('/UserData', (req , res ) =>{
    res.sendFile(__dirname + '/Frontend/userData.html');
});

app.get('/stdData/', (req, res)=>{
res.send('This is student data page');
})

// app.get('/Profile', (req, res )=>{
//     res.send({name: 'Amir shah', age: 25, city: 'Peshawar'});
// })


// app.post('/Profile', (req, res) =>{
//     res.send('This is a post request for profile');
// })

app.get('/jsonData', (req , res)=>{
    res.send({message: "This is some JSON data"});
});

app.get('/htmlFile', (req, res)=>{
    res.sendFile(__dirname + '/Frontend/sample.html');
});

// app.use('*', (req, res)=>{
//     res.status(404).send('<h1>404 Page Not Found</h1>');
// })

app.get('/:username/:id', (req , res)=>{
    console.log(req.params)
    // const username = req.params.username;
    // const id = req.params.id;
    // console.log(username, id)
    let {username, id} = req.params;
    console.log(username, id)
    res.send(`<h1>Welcome to ${username}'s profile page and id is ${id}</h1>`);
})

app.listen(port, () =>{
    console.log(`The Server is listening on port: ${port}`);
});



