var express    = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/promise', (req, res) => {
  res.send('Hello promise!')
})
app.get('/home', (req, res) => {
    res.sendFile('./templates/home.html', { root: __dirname });
});
app.get('/promises/promises.js', (req, res) => {
    res.sendFile('./promises/promises.js', { root: __dirname });
});
app.get('/promises/fetchdata.js', (req, res) => {
    res.sendFile('/promises/fetchdata.js', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./templates/about.html', { root: __dirname });
});
app.listen(3000, function() { console.log('Running @ 3000'); } );
