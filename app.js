const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
const path = require('path');
const router = express.Router();

app.use(express.static('public'))

router.get('/Typography', function (req, res) {
res.sendFile(path.join(__dirname + '/views/Park/Typography.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/boot_j', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/jeon/boot_j.html'));
});

router.get('/main_j', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/jeon/main_j.html'));
});

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/jeon/test.html'));
});

router.get('/detail', function (req, res) {
    console.log(req.query);
    res.send('Request parameters : '+req.query.email)
     });

router.get('/info', function (req, res) {
    console.log(req.query);
    res.send('Request Email :  '+req.query.email+'<br> Requset Password : '+req.query.password)

});

router.get('/info2', function (req, res) {
    console.log(req.query);
    res.send('Request selected val :  '+req.query.list+'<br> Requset selected val : '+req.query.list2)

});

router.get('/info3', function (req, res) {
    console.log(req.query);
    res.send('Request ID :  '+req.query.id+'<br> Requset Password : '+req.query.pw+'<br> Request text : ' +req.query.text)

});

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))