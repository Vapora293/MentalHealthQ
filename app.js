const jokes = require("give-me-a-joke");
const express = require("express");
const app = express();
const path = require('path');
app.listen(3000, () => {
    console.log("Listening on port 3000")
})
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.post('/result', (req, res) => {
    var body = req.body
    var result = Number(body.firstRange) + Number(body.secondRange) + Number(body.thirdRange)
     + Number(body.fourthRange) + Number(body.fifthRange)
    res.render('result.ejs', {result, jokes})
})