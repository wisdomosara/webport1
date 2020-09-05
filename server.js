const express = require('express');
const bodyParser  = require("body-parser")
const log = console.log;
const app = express();
const PORT = 3000;

app.use(express.static("views"))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + '/bmicalculator.html')
})
app.post("/", function(req, res) {
    console.log(req.body)
    res.send("thanks for contacting me " + req.body.name )
})
app.post('/bmicalculator', function(req,res) {
    const answer = Number(req.body.num1) + Number(req.body.num2)
    res.send("thanks from the calculator .... answer is " + answer)
})

app.listen(PORT, () => log('Server is starting on ' + PORT));