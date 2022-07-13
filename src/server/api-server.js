const sql = require('mssql')
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { resolve } = require("path");

require("dotenv").config({
  path: resolve(process.cwd(), "src", "server", ".env"),
});

const app = express();

const port = process.env.API_PORT;
const appOrigin = process.env.APP_ORIGIN;
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const sqlConfig = {
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

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: issuer,
  algorithms: ["RS256"],
});

app.get("/api/public-message", (req, res) => {
  res.send({
    msg: "The API doesn't require an access token to share this message.",
  });
});

app.get("/api/private-message", checkJwt, (req, res) => {
  res.send({
    msg: "The API successfully validated your access token.",
  });
});

app.get('/api/users', checkJwt, (req, res) => {
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


app.post('/api/users/:UsrName/insert', checkJwt, (req, res) => {
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

app.get('/api/users/:UsrName', checkJwt, (req, res) => {
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

app.post('/api/users/:UsrName/remove', checkJwt, (req, res) => {
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

app.put('/api/users/:UsrName/updatescore/:Score', checkJwt, (req, res) => {
  sql.connect(sqlConfig, function(errConnect) {
    if (errConnect) {
      return res.status(500).json({
        message: errConnect.message
      });
    }
    var request = new sql.Request();
    request.input('UsrName', req.params.UsrName);
    request.input('Score', req.params.Score);
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

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
