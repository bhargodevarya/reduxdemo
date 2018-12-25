var fs = require("fs");
var readline = require("readline");
var express = require("express");
var bodyParser = require("body-parser");
var endOfLine = require("os").EOL;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/user", (req, res) => {
  readFile().then(data => res.send(data));
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
