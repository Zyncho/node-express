// Require Express Routes
const server = require('express');
const router = server.Router();

// home
router.get("/", (req,res) => { res.render('index.ejs'); });
// login
router.get("/login", (req,res) => { res.render('login.ejs') });

module.exports = router;
