const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/Typography', function (req, res) {
res.sendFile(path.join(__dirname + '/views/Park/Typography.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/Typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Typography2.html'));
});

router.get('/Table', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Table.html'));
});

router.get('/Tab;e2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Table2.html'));
});

router.get('/image', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/image.html'));
});

router.get('/Buttons', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Buttons.html'));
});

router.get('/Buttons2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Buttons2.html'));
});

router.get('/Collapse', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Collapse.html'));
});

router.get('/Carousel', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Carousel.html'));
});

app.use('/', router);