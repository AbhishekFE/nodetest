"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql_1 = __importDefault(require("mysql"));
var bodyParser = require("body-parser");
var app = express_1.default();
var router = express_1.default.Router();
var jsonparser = bodyParser();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});
connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Connection success');
    }
});
// let sqlquery = "select * from person";
// connection.query(sqlquery, (error, results)=>{
//     console.log(error);
//     console.log(results)
// })
app.get('/:id', function (req, res) {
    var data = {
        name: 'abhishek',
        nationality: 'Indian',
        id: req.params.id
    };
    res.send(data);
    // res.send('the datar'+req.params.id)
});
app.post('/insert', urlencodedParser, function (req, res) {
    console.log(req.body);
    // let data = {
    //     idperson:req.id,
    //     name:req.name
    // };
    // connection.query('insert into person values(?,?)',[data.idperson, data.name], (callback)=>{
    // //    console.log(callback);
    // })
});
app.listen(8080, function () {
    console.log('Listing in port 8080');
});
