# Task Manager API
---

##Contents
--- 
  * What It Is
  * What We Used
  * Additional Dependancies
  * Environment Setup
  * Using the API
  * MVP
  * Future Feature
  * Authors
  * Github Link

##What It Is
---
This is a back-end task manager application made with JavaScript, Node.js, Express, MongoDB and Mongoose.js. It allows you to create
an account through the API and manage tasks that you can add, view, edit or delete. It was created with the main intention of building
a Node project with a NoSql database.

##What We Used
---
  * JavaScript
  * Node.js
  * Express
  * MongoDB
  * Mongoose.js


##Additional Dependancies
---
  * @sendgrid/mail - used to send welcome and cancellation emails
  * bcryptjs - used for hashing
  * jsonwebtoken - tokens used to authentication
  * multer - used for setting requirements for uploading avatars
  * sharp - used to resize avatars when saving to DB
  * validator - used to validate fields like email

##Environment Setup
---
To run locally you need must set up PORT.
Ex. PORT=3000

Must set up JWT_SECRET for auth must be set to unique secret value
Ex. JWT_SECRET=2e8n@wmeoX!hV

Must set SENDGRID_API_KEY to a valid sendgrid api key to use its email capabilities
Ex.SENDGRID_API_KEY=YOUR_API_KEY_HERE

Must set MONGOBD_URL to connect to db
Ex. MONGODB_URL=mongodb://127.0.0.1:27017/my-app-name

##Using the API
---
Main url https://moss-task-manager.herokuapp.com

User Routes
* Create user account - POST /users - name, email and password are required
* Read user account info - GET /users/me - Auth required (jwt token)
* Update user account - PATCH /users/me - Auth required (jwt token)
* Delete user account - DELETE /users/me
* Login user - POST /users/login - email and password must be provided 
* Logout user (most recent session only) - POST /users/logout - Auth required (jwt token)
* Logout user from all instances - POST /users/logoutall - Auth required (jwt token)
* Add user avatar - POST /users/me/avatar - Auth required (jwt token)
* Delete user avatar - DELETE /users/me/avatar - Auth required (jwt token)
* View users avatar by user id - GET /users/:id/avatar - requires users id 

Task Routes
* Create new task - POST /tasks
* Read task by task id - GET /tasks/:id - requires tasks id and Auth
* Update task by id - PATCH /tasks/:id - requires tasks id and Auth
* Delete task by id - DELETE /tasks/:id - requires tasks id and Auth
* Read all tasks (queries available) - GET /tasks? - requires Auth, all queries are optional<br>
Query options available <br>
   - completed=false - can search by completed field, either true or false<br>
   - limit=1 - can limit number of results sent back<br>
   - skip=1 - can skip results<br>
   - sortBy=desc - can sort results in ascending or descending order<br>
   

##MVP (Minimum Viable Product)
---  
The main goal was to work with a NoSQL database and build a simple API that could be used for a task manager application. Users
can create accounts, login, logout, add and delete profile avatars as well as create and manage tasks they create. It completes
all of the main objectives and I feel confident building and maintaining a NoSQL database now.
  
  
##Future Features
---
  * A front-end UI so users can interact directly with the API.
  * Ability to make tasks public so other users can view them.
  * Add more options to task collection, a location and time due for example.

  
##Authors
---
  * [Anthony Moss](https://github.com/Anthony-Moss)


##Github Link
---
[Github](https://github.com/Anthony-Moss/udemy-node.js-course-task-manager)