const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// **SOLUTION **//

app.get("/api/whoami", (req, res) => {
  var lang = req.headers["accept-language"].split(",")[0];
  var software = req.headers["user-agent"].match(/\((.+?)\)/)[1];
  var out = { ipaddress: req.ip, language: lang, software: software };
  res.send(out);
});

//** END OF SOLUTION **//

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
