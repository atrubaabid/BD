# BACKEND DEVELOPMENT
Backend Development is the process of building the server-side logic, APIs and databases that make a website or application work.


### What is Node.js?
Node.js is a JavaScript runtime environment that allows us to run JavaScript outside the browser.


### What is NPM?
**NPM stands for Node Package Manager.**
NPM is a package manager that helps us install and manage JavaScript libraries and packages.


### Node.js vs NPM
```
    Node.js         	                 NPM
JavaScript runtime	                Package manager
JS run karta hai	                Packages install karta hai
Backend mein use hota hai	        Dependencies manage karta hai
Server create kar sakte hain	    Libraries install kar sakte hain
```

### How to check Node.js and NPM installation?
After download Node.js open VS Code terminal or CMD.

**Check Node.js version:**
```
node -v
```

**Check NPM version:**
```
npm -v
```
If the versions are displayed, it means both have been successfully installed.


----------------------------------------------------------------------------------------------------------------------------------------------------


## 1. What is package.json?
package.json is a file that contains information about our Node.js project and its dependencies (installed packages).

**How to create package.json?** <br>
This will automatically create a package.json file in your project.
```
npm init -y
```


----------------------------------------------------------------------------------------------------------------------------------------------------


## 2. Our First Program in Node.js

```js
console.log("Atruba");
```
open terminal and run this
```
node index.js
```


----------------------------------------------------------------------------------------------------------------------------------------------------

## 3. What is Nodemon?
Nodemon is a development tool that automatically restarts your Node.js application whenever you make changes to your code.

**How to install Nodemon?**
```
npm i -g nodemon
```

Ye command PowerShell mein scripts run karne ki permission set karti hai, taake commands execute ho sakein.(is sy nodemon ko permission mil jaegi k meri file bar bar run ker saky)
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**How to use Nodemon?**
```
nodemon index
```

for making your own command instead write this in package.json file
```json
"start": "nodemon index"
```
into this
```js
{
  "name": "bd",
  "version": "1.0.0",
  "description": "Backend Development is the process of building the server-side logic, APIs and databases that make a website or application work.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index"       // <-- like this
  }
}
```

**How to use your own command?**
```
npm start
```

----------------------------------------------------------------------------------------------------------------------------------------------------

## 4. MODULE IN NODE.JS
Module is a reusable piece of code that we can use in different files of our project.

**Example**
Suppose you are creating a project. In that project:
- app.js — Main file
- math.js — Mathematical functions
- user.js — User-related functions
  
**Importing and exporting modules**
```
                          Old module system       Modern module system
                             CommonJS                       ES
Import a module   ->         require()                    import
Export a module   ->       module.exports                 export
```

**in package.json file**
```
1. "type": "module"   →   ES Modules (import/export) use kar sakte hain.
2. "type": "commonjs"   →   CommonJS (require/module.exports) use kar sakte hain.
```

----------------------------------------------------------------------------------------------------------------------------------------------------


## 5. What is module.exports?
module.exports is used to export code from a CommonJS module so that other files can use it.

Example:<br>
**math.js file**
```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

----------------------------------------------------------------------------------------------------------------------------------------------------



## 6. What is require()?
require() is used to import code from another file or module in CommonJS.

Example:<br>
**app.js file**
```js
const add = require("./math");

console.log(add(10, 20));
```



**DEFAULT AND NAME EXPORT**<br>
*math.js file*
```JS
// DEFAULT-EXPORT
function add(a, b) {
    return a + b
}

module.exports = add;

// NAME-EXPORT
function add2(a, b) {
    return a + b
}

let myname = "atruba";

module.exports = { add2, myname };
```




*index.js file*
```js
// DEFAULT-EXPORT
const add = require("./math.js");
console.log(add(10,20));

// NAME-EXPORT
const { myname, add2 } = require("./math");

console.log(add2(10,10));
console.log(myname);
```


----------------------------------------------------------------------------------------------------------------------------------------------------


## 7. Create Server in Node.js?
A server is a computer or program that receives requests from clients and sends responses back.

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello! Welcome to my server.');
    res.end();
});

server.listen(3000, () => {
    // This displays a message in the terminal when the server starts.
    console.log('Server is running on port 3000');
});

```
- **http** module helps us create a server.
- **require()** imports a module into our file.
- **createServer()** creates the server.
- **req** receives client request information.
- **res** sends a response to the client.
- **res.write()** sends data to the client.
- **res.end()** tells the server that the response is complete.
- **listen(3000)** starts the server on port 3000.

**How to Run Your Server**
```
nodemon index   OR   npm start
```


----------------------------------------------------------------------------------------------------------------------------------------------------


## 8. What is URL Routing?
URL routing means displaying different responses for different URLs.
```
URL	                            Response
localhost:3000/home	            Welcome to Home Page
localhost:3000/about	        This is About Page
localhost:3000/contact	        Contact Us
```

```js
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

```
- **req.url** Gets the requested URL path
- **server.address().port**	Gets the actual port number



----------------------------------------------------------------------------------------------------------------------------------------------------


## 9. What is Express.js??
Express.js is a web framework for Node.js that makes it easier to create servers, handle requests, and build APIs.

**Install Express.js**
in your Project type this commands
```
npm init -y     ->   package.json
npm install express     ->    install Express.js package in your project
npm i express           ->    install Express.js package in your project
```


----------------------------------------------------------------------------------------------------------------------------------------------------




## 10. Write Your First Express.js Code
```js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello! Welcome to Express.js');
    res.send({status:1,msg:"Home page API"})

});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

```
- **require()** Express package ko import karta hai.
- **express()** Express application create karta hai.
- **app** ke through hum server ki functionality handle karenge.
- **app.get()** GET request handle karta hai.
- **'/'** website ka home route hai (root URL hai).
- **res.send()** browser ko response send karta hai & also convert obj into JSON.


----------------------------------------------------------------------------------------------------------------------------------------------------


## 11. Routing in Express.js


```js

const express = require('express');

const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');  // localhost:3000/
});

// About Route
app.get('/about', (req, res) => {
    res.send('This is About Page');  // localhost:3000/about
});

// Contact Route
app.get('/contact', (req, res) => {
    res.send('Contact Us');   // localhost:3000/contact
});

// Services Route
app.get('/services', (req, res) => {
    res.send('Our Services');  // localhost:3000/services
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

----------------------------------------------------------------------------------------------------------------------------------------------------



## 12. What if the URL Doesn't Exist?

```js
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});
```
- app.use() middleware register karta hai.
- res.status(404) response ka HTTP status code set karta hai.
- Is code ko baaki routes ke baad aur app.listen() se pehle likho:


**What is an HTTP Status Code?**
Jab client server ko request send karta hai, toh server response ke saath ek status code bhi send karta hai.


**Common HTTP Status Codes**
```
Status Code     	Meaning	                     When to use
200	                OK	                         Request successful
201	                Created                      New data created
400	                Bad Request	                 Client sent invalid data
401	                Unauthorized	             Authentication required
403	                Forbidden	                 Access not allowed
404	                Not Found	                 Resource not found
500	                Internal Server Error	     Server-side error
```


----------------------------------------------------------------------------------------------------------------------------------------------------

## 13. Get Methods in Express.js   
GET method is used to retrieve or fetch data from the server.

```js

const express = require('express');

const app = express();

// GET Request
app.get('/users', (req, res) => {

    let users = [
        {
            name: 'Atruba',
            age: 22
        },
        {
            name: 'Ali',
            age: 25
        }
    ];

    res.status(200).json(users);

});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

```


----------------------------------------------------------------------------------------------------------------------------------------------------



## 14. POST Methods in Express.js   
POST method is used to send data to the server to create a new resource.

```js
const express = require('express');

const app = express();

// Middleware 
app.use(express.json());


// POST Method
app.post('/users', (req, res) => {

    console.log(req.body);

    res.status(201).json({
        message: 'User created successfully',
        body: req.body
    });

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

```
- **Middleware: app.use(express.json())** parses incoming JSON data and makes it accessible through req.body.
- **POST Route: app.post('/users', ...)** creates a POST endpoint to receive user data.
- **req.body**: Gets the data sent by the client (e.g., Thunder Client).
- **res.status(201)**: Sends HTTP status code 201 (Created), indicating that a resource has been created.
- **res.json()**: Sends a JSON response containing a success message and the received user data.

This code creates a POST API that receives JSON data from the client, accesses it through req.body, and sends back a success response.




----------------------------------------------------------------------------------------------------------------------------------------------------


## 15. Body, Query aur Params

1. Body: Used to send data to the server inside the request body(req.body).
2. Query: Used to send extra information through the URL after ?.
3. Params: Used to get dynamic values from the URL path.



### 1. Body (req.body)
```js
app.use(express.json());

app.post('/users', (req, res) => {
    console.log(req.body);

    res.json(req.body);
});
```

**Thunder Client:**
POST Request
```
http://localhost:3000/users
```

**When you write this in thunder Client Body panel**
```js
{
  "name": "Atruba",
  "email": "atruba@gmail.com",
  "password": "123456"
}
```

**req.body Response this**
```js
{
  "name": "Atruba",
  "email": "atruba@gmail.com",
  "password": "123456"
}
```

-----------------------------------------------------------------------

### 2. Query (req.query)
```js
app.use(express.json());

app.post('/users', (req, res) => {
    console.log(req.query);

    res.json(req.query);
});
```
**Thunder Client:**
POST Request
```
http://localhost:3000/users
```

When you write this in thunder Client Query panel then you get this link (http://localhost:3000/users?name=atruba&email=atruba@gmail.com&pass=12345)
```js
{
  "name": "Atruba",
  "email": "atruba@gmail.com",
  "password": "123456"
}
```
- **?** query parameters start karta hai.
- **name=atruba** pehla query parameter hai.
- **&** multiple query parameters ko separate karta hai.
- **req.query.name** se name milega.
- **req.query.email** se email milegi.


**req.query Response this**
```js
{
  "name": "Atruba",
  "email": "atruba@gmail.com",
  "password": "123456"
}
```

-----------------------------------------------------------------------

### 3. Route Params (req.params)
```js
app.get('/users/:id', (req, res) => {
    res.send(` your current user id is: ${req.params.id}`);
});
```
**Thunder Client:**
GET Request
```
http://localhost:3000/users/25
```

**Response**
```
your current user id is: 25
```

----------------------------------------------------------------------------------------------------------------------------------------------------



































