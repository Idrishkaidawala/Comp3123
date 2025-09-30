var express = require('express')

const SERVER_PORT = 8089
var app = express()

//Static middleware
app.use("/test",express.static("./public"))
app.use(express.json())
//app.use(express.text())
//https://expressjs.com/en/4x/api.html#express.urlencoded
app.use(express.urlencoded({extended: true}))


//http://localhost:8089/index
//app.get("/index", (req, res) => {
//      res.sendFile(__dirtname + "/public/index.html")
//})

//http://localhost:8089/
app.get("/", (req,res) => 
{
    res.status(201).send("<h1> Hello Express JS</h1>")
    res.send("<h1>Welcome to Express Server</h1>")
    res.end()
})

//http://localhost:8089/home
app.get("/home", (req,res) => {
    res.send("Home Page")
});

//http://localhost:8089/person
app.post("/person", (req,res) => {
    const p = {
        pid: 1,
        pnm: "Idrish Kaidawala"
    }

    
    res.send(JSON.stringify(p))
    //res.json(p)
})

//http://localhost:8089/person
app.get("/person", (req,res) => {
    const p = {
        pid: 1,
        pnm: "Idrish Kaidawala",
        city: "Toronto"
    }

    //res.send(p)
    res.json(p)
})

//http://localhost:8089/student/idrish/kaidawala
//Path Parameter
app.get("/student/:fname/:lname", (req,res) => {
    //res.json(req.params)
    const {fname, lname} = req.params
    res.send(`Welcome ${fname} ${lname}`)
})

//http://localhost:8089/user?fnm=idrish&lnm=kaidawala
//Query Parameter
app.get('/user', (req,res) => {
    const {fnm , lnm } = req.query;

    if(!fnm || !lnm) {
        return res.status(400).send("Please provide firstname and lastname as query parameters.");
    }

    res.send(`${fnm} ${lnm}`);
    
})

// Get data as a body parameter
//Use Postman or curl to invoke these endpoints
//http://localhost:8089/faculty
app.post("/faculty", (req,res) => {
    let data = req.body; // Get body data
    console.log("Recieved Data:", data);

    res.json({
        message: "Faculty data recieved successfully",
        recieved: data
    });
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})




