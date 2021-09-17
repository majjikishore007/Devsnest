const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

console.log(__dirname);
app.get("/admin", (req, res) => {
  console.log("hulla ur on admin page");
});
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "public/index.html"));
  // res.download(path.join(__dirname, "public/index.html"), "index.html");
  // res.render("index", { title: "Express" });
  res
    .status(201)
    .cookie("token", "test", {
      expires: new Date(Date.now + 1000 * 60 * 60),
    })
    .cookie("hello", "hey")
    .redirect("/admin");
});
PORT = 8083;
app.listen(PORT, () => {
  console.log("app is listening on port " + PORT);
});
