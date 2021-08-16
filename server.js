// FOR AUTO-RESTART SERVER WHENEVER THERE ARE CHANGES:
// npm install nodemon --save-dev  
// and add in the package.json "scripts"
// watch: nodemon server.js
// npm run watch

const express = require ('express');
const app = express();
const path = require('path');

// TEMPLETING ENGINE -- Handlebars.js 
//npm install hbs --save
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

const messagesRouter = require('./routes/messages.router');
const friendsRouter = require('./routes/friends.router')

const PORT = 3000;


// Middlewhere
app.use((req, res, next) =>{
   const start = Date.now();
   next()
   const delta = Date.now() - start;
   console.log(`${req.method} ${req.baseUrl} ${req.url}`);
   console.log(`this operation toke ${delta}ms`)
});

app.use(express.json());

// //Middlewhere

app.get('/', (req, res) =>{
   res.render('index', {
      title: 'Node MVC',
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi est, vel earum animi nostrum amet nulla perspiciatis, odio eos vero laudantium repellat voluptatibus numquam accusamus quos accusantium officiis et?'
   });
});

app.use('/messages', messagesRouter);
app.use('/friends', friendsRouter);

app.listen (PORT, () =>{
   console.log(`listening on ${PORT}...`);
});