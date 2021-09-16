var express = require("express");

var app = express();
var PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  //   res.send("hello");
  res.status(300).json({ message: "something went wrong" });
});

// security check
// performance check
// edge case check
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
