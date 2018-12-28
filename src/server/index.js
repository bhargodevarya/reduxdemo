var fs = require("fs");
var readline = require("readline");
var express = require("express");
var bodyParser = require("body-parser");
var endOfLine = require("os").EOL;
var cors = require('cors')


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/user", cors(), (req, res) => {
  readFile()
  .then(data => {
    let users = res.send(data); 
    console.log("sending response", users); 
    return users
  });
});

app.post("/user", (req, res) => {
  console.log("Received a request to create user", req.body)
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
            console.log("Error while writing user", err)
            reject(err);
          } else {
            console.log("write successful")
            resolve("success");
          }
        }
      );
    } catch (e) {
      console.log("Error: ", err)
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
