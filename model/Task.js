const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Task should have a title"]
        },
        description: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
);

const Task = new mongoose.model("task", TaskSchema);
module.exports = Task;

