
// EX1: 
// ANS:  server created.


// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{

//     res.send('hello000')
// });
// app.get('/services',(req,res)=>{

//     res.send('this is services pageEEEE')
// });
// app.listen(1000,()=>{

//     console.log('server started successfully')
// })


// ------------------------------------ 


// EX2: 
// ANS: server created with mongodb using connection.js file


// const express = require('express');
// const app = express();

// // mongoDB imported at server
// require('./connection/connection');

// app.get('/',(req,res)=>{

//     res.send('hello000')
// });
// app.get('/services',(req,res)=>{

//     res.send('this is services pageEEEE')
// });
// app.listen(1000,()=>{

//     console.log('server started successfully')
// })



// --- its booksRoute.js file example------

// EX3: 
// ANS: POST REQUEST


// const express = require('express');
// const app = express();
// const bookRoute = require("./routes/booksRoute")
// // mongoDB imported at server
// require('./connection/connection');

// app.use(express.json());
// app.use('/api/v1', bookRoute);

// app.listen(2000,()=>{

//     console.log('server started successfully')
// })


// OUTPUT:  
// server started successfully
// connected mongoose





// --------- Frontend fetching -------- 

// step1: server created.
// step2: server created with mongodb using connection.js file.



const express = require('express');
const app = express();
const cors = require('cors')
const booksRoute = require("./routes/booksRoute")
// mongoDB imported at server
require('./connection/connection');

app.use(cors());
app.use(express.json());
app.use('/api/v1', booksRoute);


app.listen(2000,()=>{

    console.log('server started successfully')
})
