var express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');
    
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname +'/public')); // Tell express to serve static files (css+js) in this directory
app.use(express.static(__dirname + '/views')); // Tell express to serve static files (html) in this directory

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function(){
    console.log("APP IS RUNNING ON PORT " + port);
})