const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();

router.get('/Typography', function (req, res) {
res.sendFile(path.join(__dirname + '/views/Park/Typography.html'));
//__dirname : It will resolve to your project folder.
});
router.get('/Typography2', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/Park/Typography2.html'));
});

app.use('/', router);