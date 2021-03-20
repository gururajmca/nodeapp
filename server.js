var express    = require("express");
// var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
// router.post('/register',login.register);
// router.post('/login',login.login)
// router.get('/test',login.test)
// app.use('/api', router);
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/promise', (req, res) => {
  res.send('Hello promise!')
})
app.listen(3000, function() { console.log('Running @ 3000'); } );
