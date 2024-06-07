const router = require("express").Router();

const Task = require("../model/Task");



/* Route to Home Page */

router.get("", async (request, response) => {
    try {
        const totalnum = await Task.find().count();
        const pendingnum = await Task.find({ status: "pending" }).count();
        response.render("index", {totalnum, pendingnum});
    } catch (error) {
        response.redirect("/")
    }
})


/* Route to add task */

router.route("/add")
    .get((request, response) => {
        response.render('addTask')
    })
    .post(async (request, response) => {
        try {
            let data = new Task(request.body);
            await data.save();
            response.redirect("/")
        } catch (error) {
            if (!request.body){
                response.status(400).render('error', { result: "Task Creation Fail", reason: "Something went wrong!" });
            }
            else
            response.status(500).render('error', { result: "Task Creation Fail", reason: "Internal server error", error });
                
        }
    })



/* Route to display the tasks */

router.get('/display', async (request, response) => {
    try {
        let data = await Task.find();
        response.status(200).render('totalTask',{ result:"Done", data })
    } catch (error) {
        res.status(500).send({result:"Fail", reason:"Internal Server Error"})
    }
  
})

router.get('/completedtask',async (request, response)=>{
    try {
        const task = await Task.find({ status: "completed" });
        if(task)
            response.status(200).render('completedTask', {result:"Done", task})
        else
            response.status(400).render('error', {result:"Fetching Task Failed", reason:"Something went wrong!"})
    } catch (error) {
        response.status(500).render('error', {result:"Fecthing Task Failed", reason:"Internal Server Error", error})
    }
});


router.get('/pendingtask',async (request, response)=>{
    try {
        const task = await Task.find({ status: "pending" });
        if(task)
            response.status(200).render('pendingTask', {result:"Done", task})
        else
            response.status(400).render('error', {result:"Fetching Task Failed", reason:"Something went wrong!"})
    } catch (error) {
        response.status(500).render('error', {result:"Fecthing Task Failed", reason:"Internal Server Error", error})
    }
});




/* Route to edit the task */

router.route('/edit/:_id')
.get(async (request, response)=>{
    try {
        const task = await Task.findOne({_id:request.params._id})
        response.render('updateTask', {task})
    } catch (error) {
        response.status(500).redirect('/', {error})
    }
})
.put(async (request, response)=>{
    try {
        const data = await Task.findOne({_id:request.params._id})
    } catch (error) {
        console.log(error);
        response.status(400).render('error', {result:"Task Updation Fail", reason:"Internal Server Error", error})
    }
});


/**Route to delete the task */

router.route('/delete/:_id')
.get(async (request, response) => {
    try {
        const task = await Task.findOne({ _id: request.params._id });
        if (task) {
            await Task.deleteOne({ _id: request.params._id });
            response.redirect('/');
        } else {
            response.status(404).render('error', { result: "Task Deletion Unsuccessful", reason: "Task Not Found" });
        }
    } catch (error) {
        response.status(500).render('error', { result: "Task Deletion Unsuccessful", reason: "Internal Server Error", error });
    }
});



module.exports = router