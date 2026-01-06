const express = require('express');

const app = express();
const PORT = 5000;


app.get('/', (req , res) =>{
    res.send(`This is the basic server that i created`)
})

// Create a route /hello that sends "Hello Express!" as a response.

app.get('/hello', (req, res)=>{
    res.send('Hello Express!  🙊');
})

// Create a route /user/:name that returns "Hello, <name>!" using req.params.

app.get('/user/:name', (req,res)=>{
  const name = req.params.name;
  res.send(`Hello ${name}`)
})

// Create a route /search that reads a query parameter q and returns "You searched for <q>".

app.get('/Search', (req , res)=>{
    const {q} = req.query;
    res.send(`You Search ${q}`)
})

// Create a POST route /data that accepts JSON {name: "", age: ""} in req.body and returns "Hello <name>, your age is <age>"

app.use(express.json());

// app.post('/data', (req, res) => {
//     const { name, age } = req.body;
//     res.send(`Hello ${name}, your age is ${age}`);
// });
//     const { username, id } = req.params;
//     res.send(`Username: ${username}, ID: ${id}`);
  
// Serve a static HTML file index.html on route /home

app.get('/home', (req, res)=>{
    res.sendFile(__dirname  + '/Frontend/index.html')
})



// Create a route /json that sends a JSON array of 3 users like:
app.get('/json', (req , res)=>{
    res.json([
        {
            'name':'Amir shah',
            'age':20
        },
        {
            'name':'Khalid',
            'age':20
        },
        {
            'name':'Usman',
            'age':23
        }
    ]);
});


// Create a middleware that logs every request method and URL:
app.use((req , res, next)=>{
    console.log(`${req.method} :  ${req.url}`);
    next();
})

app.get('/admin', (req , res)=>{
    res.send('Welcome to the admin panel'); 
})
app.listen(PORT, () =>{
    console.log(`The Server is listening on port ${PORT}`)
})