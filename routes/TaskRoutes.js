const { createTask, getTask, updateTask, deleteTask } = require("../controller/TaskController");

const TaskRouter = require("express").Router();

TaskRouter.get("/get", getTask);
TaskRouter.post("/create", createTask);
TaskRouter.put("/update/:_id", updateTask);
TaskRouter.delete("/delete/:_id", deleteTask);

module.exports = TaskRouter;