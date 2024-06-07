const Router = require("express").Router();

const TaskRouter = require("./TaskRoutes");
const DisplayRouter = require("./displayRoutes");

Router.use("/task", TaskRouter);
Router.use("/", DisplayRouter)

module.exports = Router