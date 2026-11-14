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

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        let obj = {
            status: 1,
            data: [{
                name: "Atruba",
                fvtProLan: "JS"
            },
            {
                name: "Atruba",
                fvtProLan: "JS"
            }]

        }
        res.end(JSON.stringify(obj))

        // res.end('Welcome to Home Page');
        console.log(req.url);

    }

    else if (req.url === '/about') {
        res.end('This is About Page');
        console.log(req.url);

    }


    else if (req.url === '/contact') {
        res.end('This is Contact Us');
        console.log(req.url);

    }

    else {
        res.end('404 Page Not Found');
        console.log(req.url);

    }

});

server.listen(3000, () => {
    console.log(`Server running at http://localhost:${server.address().port}`);
});








