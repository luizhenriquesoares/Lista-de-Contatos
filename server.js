/**
 * Created by Luiz Henrique Soares on 10/06/2016.
 */

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);


app.use(express.static(__dirname + "/public"));

app.get('/conctactlist', function (req,res) {

    db.contactlist.find(function (err, docs) {
        res.json(docs);
    });

});

app.listen(3000);
