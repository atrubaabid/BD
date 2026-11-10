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
**math.js**
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
**app.js**
```js
const add = require("./math");

console.log(add(10, 20));
```


----------------------------------------------------------------------------------------------------------------------------------------------------











