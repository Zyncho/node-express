
// Highlight console syntax
const colors = require('colors');

// require express
const express = require('express');
// initialize express
const server = express();
const port = process.env.PORT || 3000;

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
/*
set assets for Error Page 404
*/
server.use(
  express.static(__dirname + '/views/assets')
)
// 404 (any other url request)
server.get("*",(req,res)=>{res.render('error-page.ejs')})

/*
Set server to Listen Port
*/
server.listen(port, (err,data) => {
  console.log("SERVER OK on port 3000".underline.brightGreen);
});
