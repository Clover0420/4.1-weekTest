var express = require('express');
var router = express.Router();
var mongoDB = require("Mongodb-curd");
var dataname = 'WeekTest4'
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/api/getFirstHead', function(req, res, next) {
    mongoDB.find(dataname, 'firstHead', function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })
});

router.post('/api/getido', function(req, res, next) {
    mongoDB.find(dataname, 'humen', function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })
});

module.exports = router;