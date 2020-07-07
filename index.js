
// Highlight console syntax
const colors = require('colors');

// require express
const express = require('express');
// initialize express
const server = express();


/*
Set up EJS templates
*/
server.set('views',__dirname + "/views");
server.set('view engine','ejs');


/*
set URL paths
*/
const routes = require('./routes');
server.use(routes);
// 404 (any other url request)
server.get("*",(req,res)=>{res.render('error-page.ejs')})

/*
Set server to Listen Port
*/
server.listen(3000, (err,data) => {
  console.log("SERVER OK on port 3000".underline.brightGreen);
});
