const express = require("express");
const app = express();

function userMiddleware(req, res, next) {
  const username = req.query.username;
  const password = req.query.password;

  if(username != "harkirat" && password != "pass") {
    res.status(401).json({
      msg: "unauthorised",
    });
  } else {
    next();
  }
};

function userKidney(req,res,next) {
  const kidneyId = req.query.kidneyId;

  if(kidneyId != 1 && kidneyId != 2) {
    res.status(404).json({
      msg: "kidney not found"
    });
  } else {
    next();
  }
};

app.get("/health-checkup", userMiddleware , userKidney, function(req,res){
  res.send("your heart is healthy");
});

app.listen(3000);