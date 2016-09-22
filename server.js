//requiring the dependencies
var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	morgan = require('morgan'),
	cors = require('cors'),
    app = express();

//requiring files
var posts = require("./server/controllers/controller");
////
//middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(morgan('dev'));

////
//mongodb connection
var mongoUri = "mongodb://localhost:27017/Kal-El";
mongoose.connect(mongoUri, function() {
	console.log("Mongo is connected to the local collection: " + mongoUri);
}) 
////
//endpoints
app.post('/api/post', posts.post);
app.get('/api/posts', posts.getAll);
app.get('/api/post/:id', posts.getOne);
////
//connnecting the server
var port = process.env.PORT || 5555;
app.listen(port, function() {
	console.log("I'm listening on port: " + port);
})