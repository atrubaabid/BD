// console.log("Atruba");
// console.log("12-2");
// console.log(12-222);



// ----------------------------------------------------------------------------------------------------------------------------------------------------




//  6. What is require()?

// // DEFAULT-EXPORT
// const add = require("./math.js");
// console.log(add(10,20));

// // NAME-EXPORT
// const { myname, add2 } = require("./math");

// console.log(add2(10,10));
// console.log(myname);




// ----------------------------------------------------------------------------------------------------------------------------------------------------





// 7. Create Server in Node.js?

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('<b>Hello! Welcome to my server.</b><br>');
//     res.end("welcome Atruba");
// });

// server.listen(3000, () => {
//     console.log(`Server is running at: http://localhost:3000`);
//     // http://localhost:3000
// });





// ----------------------------------------------------------------------------------------------------------------------------------------------------





// 8. What is URL Routing??

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/home') {
//         let obj = {
//             status: 1,
//             data: [{
//                 name: "Atruba",
//                 fvtProLan: "JS"
//             },
//             {
//                 name: "Atruba",
//                 fvtProLan: "JS"
//             }]

//         }
//         res.end(JSON.stringify(obj))

//         // res.end('Welcome to Home Page');
//         console.log(req.url);

//     }

//     else if (req.url === '/about') {
//         res.end('This is About Page');
//         console.log(req.url);

//     }


//     else if (req.url === '/contact') {
//         res.end('This is Contact Us');
//         console.log(req.url);

//     }

//     else {
//         res.end('404 Page Not Found');
//         console.log(req.url);

//     }

// });

// server.listen(3000, () => {
//     console.log(`Server running at http://localhost:${server.address().port}`);
// });



// ----------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Write Your First Express.js Code

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     // res.send('Hello! Welcome to Express.js');
//     res.send({status:1,msg:"Home page API"})
// });

// app.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000');
// });



// ----------------------------------------------------------------------------------------------------------------------------------------------------




//  11. Routing in Express.js

// const express = require('express');

// const app = express();

// // Home Route
// app.get('/', (req, res) => {
//     console.log(res);
//     res.send('Welcome to Home Page');
//     // res.send({status:1,msg:"Home page API"})


// });

// // About Route
// app.get('/about', (req, res) => {
//     res.send('This is About Page');
// });

// // Contact Route
// app.get('/contact', (req, res) => {
//     res.send('Contact Us');
// });

// // Services Route
// app.get('/services', (req, res) => {
//     res.send('Our Services');
// });


// //  12. What if the URL Doesn't Exist?
// app.use((req, res) => {
//     res.status(404).send("404 Page error")
// }

// )

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });




// ----------------------------------------------------------------------------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------------------------------------------readme update

//  13. Get Methods in Express.js   


// const express = require('express');

// const app = express();

// // GET Request
// app.get('/users', (req, res) => {

//     let users = [
//         {
//             name: 'Atruba',
//             age: 22
//         },
//         {
//             name: 'Ali',
//             age: 25
//         }
//     ];

//     res.status(200).json(users);

// });


// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });



// ----------------------------------------------------------------------------------------------------------------------------------------------------


//  14. POST Methods in Express.js   &  15. Body, Query aur Params


// const express = require('express');

// const app = express();

// // Middleware  ->  express.json() parses incoming JSON data and makes it available through req.body.
// app.use(express.json());


// // POST Method
// app.post('/users', (req, res) => {

//     // 1. Body (req.body)
//     console.log(req.body);
//     // 2. Query(req.query)
//     console.log(req.query);

//     res.status(201).json({
//         message: 'User created successfully',
//         body: req.body,
//         query: req.query
//     });

// });



// app.get('/users/:id', (req, res) => {

// // 3. Route Params (req.params)
//     res.send(` your current user id is: ${req.params.id}`);
// });



// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });


// ----------------------------------------------------------------------------------------------------------------------------------------------------



// 16. Middleware in Express.js

// const express = require('express');

// const app = express();
// let mytoken = "123456";
// let myPass = "1212"


// // Middleware 1
// app.use((req, res, next) => {
//     console.log(req.query.token);

//     if (req.query.token == "" || req.query.token == undefined) {
//         return res.send(
//             {
//                 status: 0,
//                 msg: "Please fill the token"
//             }
//         )
//     }

//     if (req.query.token != mytoken) {
//         return res.send(
//             {
//                 status: 0,
//                 msg: "Please fill the correct token"
//             }
//         )
//     }

//     next();

// });

// // Middleware 2
// app.use((req, res, next) => {
//     console.log(req.query.pass);
//     if (req.query.pass == "" || req.query.pass == undefined) {
//         return res.send({
//             status: 0,
//             msg: "Enter your password"
//         })
//     }

//     if (req.query.pass != myPass) {
//         return res.send({
//             status: 0,
//             msg: "Enter Correct password"
//         })
//     }

//     next();

// })




// // Route
// app.get('/', (req, res) => {

//     res.send({
//         status: 1,
//         msg: "your token is correct",
//         pass: "your password is correct"
//     });

// });

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// });



// ----------------------------------------------------------------------------------------------------------------------------------------------------

// 17. Route Level Middleware in Express.js



const express = require('express');
const app = express();
let myToken = '123456';


// Route Level Middleware
let checkToken = (req, res, next) => {

    if (req.query.token == "" || req.query.token == undefined) {
        return res.send(
            {
                status: true,
                msg: "Fill the token"
            }
        )
    }

    if (req.query.token != myToken) {
        return res.send(
            {
                status: true,
                msg: "Fill the correct token"
            }
        )
    }

    next();
}



app.get('/', (req, res) => {
    res.send({
        status: true,
        msg: "i'm home page"
    })
})


app.get('/about', checkToken, (req, res) => {
    res.send({
        status: true,
        msg: "i'm About page"
    })
})


app.listen(3000, () => {
    console.log('Server running on port 3000');
})




