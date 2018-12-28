var fs = require("fs");
var readline = require("readline");
var express = require("express");
var bodyParser = require("body-parser");
var endOfLine = require("os").EOL;
var cors = require('cors')


const app = express();
app.use(cors())
//app.options('*', cors());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost.3000/',
  optionsSuccessStatus: 200
};

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get("/user", cors(corsOptions), (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
  readFile()
  .then(data => {
    let users = res.send(data); 
    console.log("sending response", users); 
    return users
  });
});

app.post("/user", (req, res) => {
  writeFile(req.body).then(data => res.send(data));
});

app.listen(8080, () => console.log("server started"));

function writeFile(user) {
  return new Promise((resolve, reject) => {
    try {
      fs.appendFile(
        __dirname + "/mock/user.txt",
        endOfLine.concat(JSON.stringify(user)),
        err => {
          if (err) {
            reject(err);
          } else {
            resolve("success");
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
}

function readFile() {
  const fileObs = readline.createInterface({
    input: fs.createReadStream(__dirname + "/mock/user.txt"),
    crlfDelay: Infinity
  });
  const lineArr = [];
  var fileReadPromise = new Promise((resolve, reject) => {
    try {
      fileObs.on("line", line => {
        lineArr.push(JSON.parse(line));
      });
      fileObs.on("close", () => {
        resolve(lineArr);
      });
    } catch (e) {
      reject(e);
    }
  });
  return fileReadPromise;
}
