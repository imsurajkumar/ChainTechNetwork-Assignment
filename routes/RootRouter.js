const Router = require("express").Router();

const TaskRouter = require("./TaskRoutes");


Router.use("/task", TaskRouter);

module.exports = Router