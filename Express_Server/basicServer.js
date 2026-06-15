const express = require('express');

const app = express();
const PORT = 5000;


app.get('/', (req , res) =>{
    res.send(`This is the basic server that i created`)
})

// Create a route /hello that sends "Hello Express!" as a response.

// app.get('/hello', (req, res)=>{
//     res.send('Hello Express!  🙊');
// })

// Create a route /user/:name that returns "Hello, <name>!" using req.params.

// app.get('/user/:name', (req,res)=>{
//   const name = req.params.name;
//   res.send(`Hello ${name}`)
// })

// Create a route /search that reads a query parameter q and returns "You searched for <q>".

// app.get('/Search', (req , res)=>{
//     const {q} = req.query;
//     res.send(`You Search ${q}`)
// })

// Create a POST route /data that accepts JSON {name: "", age: ""} in req.body and returns "Hello <name>, your age is <age>"

app.use(express.json());


// app.post('/data', (req, res) => {
//     const { name, age } = req.body;
//     res.send(`Hello ${name}, your age is ${age}`);
// });
//     const { username, id } = req.params;
//     res.send(`Username: ${username}, ID: ${id}`);
  
// Serve a static HTML file index.html on route /home

// app.get('/home', (req, res)=>{
//     res.sendFile(__dirname  + '/Frontend/index.html')
// })



// Create a route /json that sends a JSON array of 3 users like:

// app.get('/json', (req , res)=>{
//     res.json([
//         {
//             'name':'Amir shah',
//             'age':20
//         },
//         {
//             'name':'Khalid',
//             'age':20
//         },
//         {
//             'name':'Usman',
//             'age':23
//         }
//     ]);
// });
app.get('/json', (req ,res )=>{
    res.json([
        {
            'name':'Amir shah',
            'age':'22',
            'rollNo':'439'
        },
        {
            'name':'Sultan shah',
            'age':'24',
            'rollNo':'479'
        },
        {
            'name':'Daud shah',
            'age':'24',
            'rollNo':'456'
        }
    ])
})

// Create a middleware that logs every request method and URL:
app.use((req , res , next)=>{
    console.log(`Request = ${req.method}  and URL is ${req.url}`)
    next();
})



// app.use((req , res, next)=>{
//     console.log(`${req.method} :  ${req.url}`);
//     next();
// })

// app.get('/admin', (req , res)=>{
//     res.send('Welcome to the admin panel'); 
// })

// app.get('/user/:username/:id', (req ,res )=>{
//     const {username , id} = req.params;
//     res.send(`Username: ${username}, ID: ${id}`);
// })

app.get('/user/:id', (req, res )=>{
    const {id} = req.params;
    res.send(`User Id : ${id}`);

})

// Multiple route params:
// Create a route /users/:userId/orders/:orderId that returns both ids.
// app.get('/users/:userId/orders/:orderId', (req, res)=>{
//     const {userId , orderId} = req.params;
//     res.send(`UserId : ${userId}  and  OrdreID : ${orderId}`)
// })



// app.get('/products', (req , res)=>{
//     const {category , price} = req.query;
//     res.send(`Category: ${category}, Price: ${price}`)
// })



// Optional route param:
// Create a route /products/:id? where the id is optional. If no id is provided, return “All products”.
// app.get('/products/:id', (req, res)=>{
//     const {id} = req.params;
//     if(!id){
//         res.send("All Products ");
//     }
//     else{
//         res.send(`Products ${id} `)
//     }
// })


//Dynamic Greeting Route: 
app.get('/hello/:name', (req, res)=>{
    const {name} = req.params;
    res.send(`Hello ${name}`);

})


app.get('/search', (req , res)=>{
    const {term} = req.query;
    res.send('You searched for ' + term);
})


// User-specific search:
// Route /users/:id/search that takes a query term. Return:

// /users/5/search?term=hat → User 5 is searching for hat
// app.get('/users/:id/search', (req , res)=>{
//     const {id} = req.params;
//     const {term} = req.query;
// res.send(`User ${id} is Searching for ${term}`);
// })

// Route /users/:userId/orders/:orderId with optional query status. Return:
// /users/2/orders/10?status=shipped → User 2, Order 10, Status: shipped
// /users/2/orders/10 → User 2, Order 10, Status: unknown

app.get('/users/:userId/orders/:orderId', (req, res)=>{
    const {userId, orderId} = req.params;
    const {status} = req.query;
   res.json({
    userId, 
    orderId,
    status: status || 'unknown'
   })
})

// Pagination:
// Route /products/:category with query page and limit. Return:
// /products/shoes?page=2&limit=10 → Category: shoes, Page: 2, Limit: 10

app.get('/products/:category', (req , res)=>{
    const {category} = req.params;
    const {page , limit} = req.query;
    res.send(`Category: ${category} , Page: ${page} , Limit: ${limit}`)
})



app.listen(PORT, () =>{
    console.log(`The Server is listening on port ${PORT}`)
})