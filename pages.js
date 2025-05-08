const express = require("express");
const app = express();
var http = require('http')
 
// our default array of dreams
const dreams = [
  "oh"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("assets"));
let hndlr = ["/", "/nitromethod", "/project", "/linktree", "/testing"]

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/handler/home.html");
});

 app.get("/ok", (request, response) => {
   response.sendStatus(200)
 })

app.get("/about", (request, response) => {
  response.sendFile(__dirname +"/handler/project.html");
});

app.get("/test", (request, response) => {
  response.sendFile(__dirname + "/handler/test.html");
})

// listen for requests :)
const listener = 
      app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
} );
setInterval(() => {
  http.get(`http://farisdaffa.id/ok`);
}, 20000); 