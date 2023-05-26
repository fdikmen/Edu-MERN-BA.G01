# MERN LESSONS - BA40FS_MERN


### 24032023-Keywords

1. SPA (React,NodeJS,Angular) vs MPA(.Net, Java, PHP)
2. React
3. React Virtual DOM
4. Component
5. JSX
---

### 25032023-Keywords

01. EcmaScript----ES15
02. Let vs Const (var)
03. Default Parameter
04. Arrow Function =>
05. OOP
06. Spread Operator (...)
07. forEach, Map
08. JSON Data
09. Array Filter - Object Assing
10. https://nodejs.org/en
11. https://code.visualstudio.com/
12. https://desktop.github.com/
13. https://github.com/fdikmen/BA40FS_MERN
14. Extensions; Prettier - Code formatter, Auto Rename Tag, Auto Close Tag, ES7+ React/Redux/React-Native snippets, Live Share
15. npm init ---> package.json
16. npm
17. npx
18. npm vs yarn
19. Hello World with React (https://react.dev/learn/start-a-new-react-project)
npx create-react-app hello-world
20. Folder Structure
21. npm run build - FOR BUILD FOLDER
22. index.js
---

### 26032023-Keywords

 1. Add file to GitHUB
 2.  `npm init -y`
 3. Module System
(Babel, `npm install babel-cli babel-preset-es2015` , `"start":"babel-node main.js --presets es2015"` , import-export-default-as-*)
 4. Component (extends)
 5. Dikkat Edilmesi Gerekenler;
		 1. Live Share de çalışma,
		 2. Komutları İlgili Klasörde Yazmaya Çalış,
		 3. Uygulama Oluşturmak İçin `npx create-react-app [APP-NAME]` komutunu kullan,
		 4. Eğer eklentilerde bozulmalar oluyorsa; `ES7+ React/Redux/React-Native snippets` harici eklentileri
    silebilirsiniz.
---
### 31032023-Keywords
1. props
---
### 01042023-Keywords
1. props
2. React Developer Tools
3. PropTypes
4. Constructor
5. Style
6. Combine styles (Spread & Object.Assing)
7. Events & Bind
8. Get Github Repo
9. send function with props & parameters
---

### 02042023-Keywords

1. Data Bind Methods
a. With Function
b. in Constructor
c. With Arrow Function
2. State
3. re-Render (React Diff - React Virtual DOM)
4. Counter (First App)
5. Class vs Functional Comp. (Stateful vs Stateless)
6. PhoneBook (Second app) --> npx create-react-app phonebook

Component, import-export, classComponent, PropTypes, State, Spread (Array Merge), props (array,function)

React Developer Tools, Array.Filter & Array.indexOf

---

### 07042023-Keywords

1. Summary for Phone Book App

---

### 08042023-Keywords

01. LifeCycle - React LifeCycle
02. React Component LifeCycle
[https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
-- Mounting - Updation - Unmounting
03. I. Constructor (Mounting)
04. II. Render -> PURE
05. III. ComponentDidMount
06. IV. ComponentDidUpdate
07. V. ComponentWillUnmont
08. VI. getDerivedStateFromProps
09. VII. shouldComponentUpdate
10. VIII. getSnapshotBeforeUpdate
11. FETCHING
MOCK ==> https://jsonplaceholder.typicode.com/
---
### 09042023-Keywords
01. Fetch (Summary)
02. Axios
```Node
npm i axios
```
03. Router
```Node
npm i react-router-dom
```
Project Stop => CTRL + C
04. BrowserRouter (wrapping) - Link - Routes | Route (path-element)
MainLink-HomeLink(/) - No Match(*) - Read Parameter - NavLink

---

### 14042023-Keywords

01. Summary
02. Advanced Components - Higher Order Component
---

### 15042023-Keywords

01. Summary
02. Advanced Components - Higher Order Component
03. Redux - npm i redux react-redux

**Sample**
npm i redux react-redux axios
**Means**
npm i redux
npm i react-redux
npm i axios
**SAVE**
npm i [libName] --save
**FORCE**
npm i [libNAME] -f (or --force)

4. UI-View-Comp. => ACTION => dispatch => STORE => REDUCER => subscribe => UI-View-Comp.
5. createStore , reducer(like function), .getState() , dispatch
6. npm i @reduxjs/toolkit
- SUGGEST
Intellisense -> Suggest
Snippet -> ShortCut
---

### 16042023-Keywords

**Folder Structure**
https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5

**Home Work**
https://github.com/fdikmen/BA40FS_MERN/blob/main/Lesson12/HomeWork.md


- redux-toolkit RTK
- Folder structure
- Slice (IntialState - Name - Reducer - Aciton)
- Store
- Provider
- useDispatch
- redux devTools Extension
- useSelector
https://redux-toolkit.js.org/introduction/getting-started

#### npx create-react-app [appName] --template redux
```bash
npx create-react-app [appName]
npm i  @redux-toolkit
npm i  react-redux
Create Folder  Structure
Create Sample  Files (Comp., Slice)
Create Store
```
https://jsonplaceholder.typicode.com/users/2

- middleware
- HOOKS
- STATE => useState
- LIFECYCLE => useEffect
 

next suggest => [**Next.JS**]

---
### 28042023-Keywords

01. Summary
02. API - Http Methods (CRUD)
03. mockapi.ai
04. Postman

---
### 03052023-Keywords

01. NPM?
```
npm i [packageName]
npm install [packageName]
```
Project Start File --> start file(package.json)
```
npm init
npm init -y
```

02. import (React) vs require (NodeJS) <br/>
React
```
import [CustomName] from '[libName]'
```
NodeJS
```
const [CustomName] = require('[libName]')
const slugify = require('slugify') 
```

03. Global vs Local Package <br/>
Global
```
npm i -g [packageName] 
npm i --global [packageName]
````
Local
```
npm i [packageName]
```
Global Package List
```node
npm list -g
npm list -g --depth=0
```

Windows     Console Clear => cls
MacOS/Linux Console Clear => clear

Use global package

```node
npm link [package]
```

04. Create a Project with npm
(Create a package.json file)
Manuel

```node
npm init
```
Auto

```node
npm init -y
```
Settings Sample

```node
npm set init.author.name "fdikmen" ===> npm config ls -l
```

05. Install a Module (Lib)

```node
npm install [moduleName]
npm i [moduleName]
```

06. License

https://choosealicense.com/licenses/ 

07. npm-cache

- npm i npm-cache
- npm i [packageName] => npm-cahce install [packageName]

08. -s --save --no-save

09. Old Version
Install Custom vesion for package

```node
npm i [packageName]@[Version] 
```
List outdated packages

```node
npm outdated
```
Update packages

```node
npm update
```

10. Package for Developer 

```node
npm i [packageName] --save-dev
```

11. Define script in package.json file

```node
npm run [commandName]
```

12. Install Multiple Package

```node
npm i [packageName01] [packageName02] [packageName03] ...
```

13. Remove a Package

```node
npm uninstall [packageName]
```

14. Stop Command on Termianl
[CTRL + C]

15. Start NodeJS Project
```
node [mainFileName]
```
---
### 05052023-Keywords

01. Event & Emitter
```
// import events module
const events = require('events')
// create an eventEmitter object for management events
const eventEmitter = new events.EventEmitter()
```
For Create => on or once <br/>
For Trigger => emit

02. __filename & __dirname

---
### 06052023-Keywords

01. Summary & BUG FIXED: once
02. Extensions for NodeJS
npm Intellisense, ESLint, REST Client, ShortCuts for VSCode [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf]
03. Callback Function
04. Promise => function.then(+).catch(-)
05. File System (require('fs'))
```
const fs = require('fs');
```
Read File - Write File - Remove File
```
// fs.readFile('filename', callback)
// fs.writeFile('filename', 'content', callback)
// fs.appendFile('filename', 'content', callback)
// fs.unlink('filename', callback)

```
06. HTTP Server
```
const http = require('http');
```
Create Server
```
const myserver = http.createServer(callback)
const myserver = http.createServer((req,res)=>{})
```
Define Server Port
```
myserver.listen(PortNumber)
```
07. nodemon
```
npm install -g nodemon (Windows - MacOS - Linux)
sudo npm install -g nodemon (Optional -> MacOS - Linux)
```
08. HTML doc serve with http nodejs server
09. HTTP Methods (GET - POST - PUT - DELETE)
10. Route Example


---
### 07052023-Keywords
01. Streams
Chunk -> Streams of Data
02. Stream Types
Readable - Writeable - Readable/Writeable (transform)
03. NodeJS Streaming Logic => eventEmitter.on() -> eventEmitter.emit() -> response.end()
04. Create ReadableStream
05. Create WriteableStrem with Pipeline

---
### 10052023-Keywords
01. Summary
02. npm install express
03. node-snippets
04. PUG
05. convert -> HTML to PUG/JADE
06. PUG Sample with ExpressJS
- npm i express
- Created by "node-express" snippet with node-snippets
- run project with nodemon
- npm install pug
- Sass/Less/Stylus/Pug/Jade/Typescript/Jav for PUG snippets
- vscode-faker for FAKE DATA

---
### 12052023-Keywords
01. Summary
02. Define STATIC FOLDER with ExpressJS
03. Routing with ExpressJS
04. Postman (https://www.postman.com/downloads/)
05. Using keywords (?,*,+) with routing
06. Http Methods with Routing (GET - POST - PUT - DELETE - ALL)
07. Parameters with Routing (:params)
08. Router Object in ExpressJS (express.Router())
- Define express,route in Route File
- Move route codes to Route File
- Convert "app" to "router"
- Module Export
- import route file

09. Middleware
10. Error Handler
11. Express Application Generator
- npx express-generator
- npm i
- npm start (=> "start": "nodemon ./bin/www")


---
### 13052023-Keywords
01. Summary
02. DBMS (Database Management System)
03. NoSQL (NotOnlySQL)
04. MongoDB
- Setup File; https://www.mongodb.com/try/download/community-kubernetes-operator
- For Windows; https://ismailkasan.medium.com/windows-10da-mongo-db-kurulumu-41341c057262
    
- For Macos/Linux;
1. https://brew.sh/index_tr (install brew)
2. brew update
3. brew install mongodb
4. sudo mkdir -p /data/db
5. sudo chown -R $USER /data/db 
6. brew services start mongodb 
7. mongo

- For Windows;
1. Download MSI File ans Install with next next (https://www.mongodb.com/try/download/community-kubernetes-operator)
2. cd C:\\ (in Admin CMD)
3. md "data\db" (in Admin CMD)
4. "[mongoDb-bin-folder-path]\mongod.exe" --dpath="C:\\data\db" (in Admin CMD)
5. Other Steps ... 

```
npx express-generator
npm install -g express-generator
npm i nodemon -g

ERROR: nodemon permission denied windows with powershell script
Powershell (run as Admin)
BUG FIXED: 
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
https://www.mongodb.com/try/download/community-kubernetes-operator
    
```
---
### 17052023-Keywords
01. Summary
02. What is Connector?
03. Mongoose
https://mongoosejs.com/docs/index.html
04. Using mongoDB on cloud (MongoDB Atlas)
https://www.mongodb.com/atlas/database
05. MongoDB Compass

---
### 20052023-Keywords
01. Summary
02. What is Connector/Driver?
03.
04. Mongoose
05. Install & Using Mongoose
06. CRUD Operations with Mongoose
Create, Read, Update, Delete, Read All, Delete All, Aggregate (JOIN)

---
### 21052023-Keywords
01. Summary
02. Routes, Models, Controllers Folders
03. Coding MovieApp API (https://github.com/fdikmen/movieapp-api)
- npx express-generator --view=pug movieapp-api
cd movieapp-api
npm install
npm start
- Create database (MovieAppDB) on Compass
- npm install mongoose
- Create and Codes db.js for connetion to MongoDB

---
### 24052023-Keywords
01. Summary
02. Get a Movie API
03. Using Error Handler
04. Update a Movie
05. Delete a Movie
06. Get the top 10 movies
07. Movies between two dates

Windows
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
MacOS/Linux
```
sudo [...]
```

---
### 26052023-Keywords
A. Summary
B. Coding for Director EndPoints
	1. Create Director Model (Director.Model.js)
	2. Create Director Route (director.routes.js)
	3. Import & Use Director Route (in app.js)
	4. Create Routes
		4.1. Create POST Endpoint
		4.2. Create GET Endpoint


