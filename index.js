const express = require("express");


require("./db-connect")
const Router = require("./routes/RootRouter");

const app = express();

app.set("views", "./views");
app.set('view engine', "hbs");

app.use(express.json());

app.use("/api", Router);

app.get("", (req, res)=>{
    res.render("index")
})

app.listen(8001, ()=>console.log("Server is running at http://localhost:8001"));