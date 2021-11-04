const express = require("express");
const app = express();
// serve files from the public directory
app.use(express.static("public"));
// start the web server
app.listen(3000, function () {
    console.log("Listening on port 3000");
});
