var express = require('express');
var DisplayRouter = express.Router();

/* GET home page. */
DisplayRouter.get('', function(req, res, next) {
  res.render('index');
});
DisplayRouter.get('/add', function(req, res, next) {
  res.render('addTask');
});
DisplayRouter.get("/display", (req,res)=>{
  res.render("displayTask", {title: "TaskManager | Display"})
});
DisplayRouter.get("/update", (req,res)=>{
  res.render("updateTask", {title: "TaskManager | Display"})
});
DisplayRouter.get('/error', function(req, res, next) {
  res.render('error');
});



module.exports = DisplayRouter;
