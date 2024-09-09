import express from "express";
import ejs from "ejs";

const port = 3000;
const app = express();

//Middleware to assign location of the static folder
//Use to enable partial ejs
app.use(express.static("public"));

//Homepage route
app.get("/", (req, res)=>{
    res.render("index.ejs");
});

//Post route to create new blog
app.post("/submit", (rqe, res)=>{
    res.render("submit.ejs");
})

app.listen(port, () =>{
    console.log(`Server is listening on ${port}`);
});