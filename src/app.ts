import express from 'express';
import mysql from 'mysql';
import bodyParser = require('body-parser');
import Test from './test';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connection success');
    }
});

// let sqlquery = "select * from person";

// connection.query(sqlquery, (error, results)=>{
//     console.log(error);
//     console.log(results)
// })

app.get('/:id', (req, res) => {
    let data = {
        name: 'abhishek',
        nationality: 'Indian',
        id: req.params.id,
    }
     res.send(data);
    // res.send('the datar'+req.params.id)
});


app.post('/insert', (reqs: any, res) => {
    console.log(reqs.body);
    let data = {
        idperson:reqs.body.idperson,
        name:reqs.body.name
    };
    try {
        connection.query('insert into person values(?,?)',[data.idperson, data.name], (err, callback)=>{ 
           if(!err) {
               res.send('data inserted succesefully');
           } else {
               res.send('Duplicate entry')
           }
        })
    }
    catch(e) {
        console.log(e);
    }
});


app.listen(8080, () => {
    console.log('Listing in port 8080')
});