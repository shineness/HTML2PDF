let express = require('express')
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("./template.html", "utf8");

var options = {
    format: "A4",
    border: "10mm",
};
var users = [
    {
      name: "Shyam",
      age: "26",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "",
  };

  pdf.create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
let app = express()


app.listen(8080,()=>{
    console.log("服务器运行：http://127.0.0.1:8080")
})