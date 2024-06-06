const Task = require("../model/Task");

async function createTask(request, response){
    try {
        let data = new Task(request.body);
        await data.save();
        response.status(200).send({result:"Task Creation Done", data})
    } catch (error) {
        if(!request.body)
            response.status(400).send({result:"Task Creation Fail", reason:"Something went wrong!"});
        else
            response.status(500).send({result:"Task Creation Fail", reason:"Internal server error"});
    }
};

async function getTask(request, response){
    try {
        let data = await Task.find();
        response.status(200).send({result:"Done", data})
    } catch (error) {
        res.status(500).send({result:"Fail", reason:"Internal Server Error"})
    }
};

async function updateTask(request, response){
    try {
        let data = await Task.findOne({_id: request.params._id})
        if(data){
            data.title = request.body.title??data.title;
            data.description = request.body.description??data.description;
            
            await data.save();
            response.status(200).send({result:"Done", data})
        }
        else{
            response.status(400).send({result:"Fail", reason:"Something went wrong!"})
        }
    } catch (error) {
        console.log("Following error occurred", error);
        response.status(500).send({result: "Fail", reason:"Internal server error"});
    }
}


async function deleteTask(request, response){
    console.log("request.body", request.body);
    try{
        let data = await Task.findOne({_id:request.params._id});
        console.log("data = ", data);
        if(data){
            await data.deleteOne();
            response.status(200).send({result:"Done"});
        }
        else{
            res.status(400).send({result:"Fail", reason:"Task not found"})
        }
    }catch (error) {
        response.status(500).send({result:"Fail", reason:"Internal Server Error"})
    }
}




module.exports = {createTask, getTask, updateTask, deleteTask}