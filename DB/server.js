var express = require('express'); // Web Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client

// Connection string parameters.
var sqlConfig = {
    user: 'TetrisTeamAdmin',
    password: 'NqDMo$vxTb:h$&,',
    server: 'tetris-team-database.cszopbtc5jh8.us-east-1.rds.amazonaws.com',
    database: 'Tetris',
    options: {
        trustServerCertificate: true, // change to true for local dev / self-signed certs
        Encrypt: true,
        IntegratedSecurity: false,
      }
}

// Start server and listen on http://localhost:8081/
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});

app.get('/users', function (req, res) {
    sql.connect(sqlConfig, function(ever) {
        var request = new sql.Request();
        request.query('select * from dbo.UserDetails', function(err, recordset) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordset)); // Result in JSON format
        })
    });
})

app.post('/users/:UsrName/insert', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('UsrName', req.params.UsrName);
        request.execute('dbo.InsertUser', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordsets)); // Result in JSON format
        });
    });
})

app.get('/users/:UsrName', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('UsrName', req.params.UsrName);
        request.execute('dbo.ReturnUser', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordsets)); // Result in JSON format
        });
    });
})

app.post('/users/:UsrName/remove', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('UsrName', req.params.UsrName);
        request.execute('dbo.DeleteUser', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordsets)); // Result in JSON format
        });
    });
})

app.get('/users/:UsrName/updatescore', function (req, res) {
    sql.connect(sqlConfig, function() {
        var request = new sql.Request();
        request.input('UsrName', req.params.UsrName);
        request.execute('dbo.UpdateScore', function(err, recordsets, returnValue, affected) {
            if(err) console.log(err);
            res.end(JSON.stringify(recordsets)); // Result in JSON format
        });
    });
})