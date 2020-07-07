# Basic Nodejs + Express

Crash course Express 101.<br/>
Through this simple examples we gonna see how to set up an Express server with few options.<br/>
The modules of this course are listed through the log. It means that each module correspond to one commit.

> initial commit

  * get the URL requested
  * differents responses to each requests
  * setting up middlewares for example tasks

> advanced commit

This example code is to set up an Express server and use Router() method to have them all in a separeted file
that is later required to be used in our shell file "index.js"

  * set up a simple Express server
    - require Express
    - initialize Express
    - get an URL and render a file
    - listen to a port
  * use EJS reusale templates
    - install EJS
    - activate EJS
    - tell Express views folder
  * server.Router()
    - get all the in a separete file (routes.js)
    - replace "server.get()" by "reouter.get()"
    - module.exports = router
    - require that file that exports the router (routes.js)
    - save it a variable and use it
