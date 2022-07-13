const serverless = require("serverless-http");
const express = require("express");
const app = express();
const sql = require('mssql')

var sqlConfig = {
  user: 'TetrisTeamAdmin',
  password: 'NqDMo$vxTb:h$&,',
  server: 'tetris-team-database.cszopbtc5jh8.us-east-1.rds.amazonaws.com',
  database: 'Tetris',
  options: {
    trustServerCertificate: true,
    Encrypt: true,
    IntegratedSecurity: false,
  },
}

app.get("/users", (req, res, next) => {
  sql.connect(sqlConfig, function (errConnect) {
    if (errConnect) {
      return res.status(500).json({
        message: errConnect.message,
      });
    }
    var request = new sql.Request()
    request.query('select * from dbo.UserDetails', function (errQuery, recordset) {
      if (errQuery) return res.status(400).json({
        message: errQuery,
      });
      return res.status(200).json({
        message: recordset,
      });
    })
  })
});

app.post('/users/:UsrName/insert', function (req, res) {
  sql.connect(sqlConfig, function(errConnect) {
    if (errConnect) {
      return res.status(500).json({
        message: errConnect.message
      });
    }
    var request = new sql.Request();
    request.input('UsrName', req.params.UsrName);
    request.execute('dbo.InsertUser', function(errQuery, recordsets, returnValue, affected) {
        if(errQuery) return res.status(400).json({
          message: errQuery
        });
        return res.status(200).json({
          message: recordsets
        });
    });
  });
})

app.get('/users/:UsrName', function (req, res) {
  sql.connect(sqlConfig, function(errConnect) {
    if (errConnect) {
      return res.status(500).json({
        message: errConnect.message
      });
    }
    var request = new sql.Request();
      request.input('UsrName', req.params.UsrName);
      request.execute('dbo.ReturnUser', function(errQuery, recordsets, returnValue, affected) {
        if(errQuery) return res.status(400).json({
          message: errQuery
        });
        return res.status(200).json({
          message: recordsets
        });
      });
  });
})

app.post('/users/:UsrName/remove', function (req, res) {
  sql.connect(sqlConfig, function(errConnect) {
    if (errConnect) {
      return res.status(500).json({
        message: errConnect.message
      });
    }
    var request = new sql.Request();
    request.input('UsrName', req.params.UsrName);
    request.execute('dbo.DeleteUser', function(errQuery, recordsets, returnValue, affected) {
      if(errQuery) return res.status(400).json({
        message: errQuery
      });
      return res.status(200).json({
        message: recordsets
      });
    });
  });
})

app.get('/users/:UsrName/updatescore', function (req, res) {
  sql.connect(sqlConfig, function(errConnect) {
    if (errConnect) {
      return res.status(500).json({
        message: errConnect.message
      });
    }
    var request = new sql.Request();
    request.input('UsrName', req.params.UsrName);
    request.execute('dbo.UpdateScore', function(errQuery, recordsets, returnValue, affected) {
      if(errQuery) return res.status(400).json({
        message: errQuery
      });
      return res.status(200).json({
        message: recordsets
      });
    });
  });
})

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
