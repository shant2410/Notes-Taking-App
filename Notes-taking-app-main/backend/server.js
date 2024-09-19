const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const Notes = require('./data/Notes');
const { default: axios } = require('axios');
const { json } = require('body-parser');
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const { use } = require('express/lib/router');

const app=express();

dotenv.config();
connectDB();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api/users",userRoutes)
app.use(notFound)
app.use(errorHandler)
app.get('/api',(req,res)=>{
    res.json(Notes);
});

       
app.get("/api/:category",(req,res)=>{
    let Note = Notes.filter((ele)=>{return ele.category==req.params.category})
    res.json(Note);

});












































app.get("/w",(req,res)=>{
    const url= "http://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=1c647c281b6315a083ba7311a3fbc2ea";
    axios
    .get(url)
    .then(response=>{
        // console.log(response)
        const weatherData = (response.data)
        // console.log(weatherData)
        const temp=(weatherData.main.temp)
        // const data = {
        //     name: "nikhil",
        //     surname: "naidu"
        // }
        // console.log(JSON.stringify(data))
        res.send(`temp is ${temp}`)
    })
    .catch(error=>{
        console.log(error)
    })
})

app.get('/',(req,res)=>{
    // res.send("get request is running");
    res.sendFile(__dirname+"/samle.html")
});

app.post('/',(req,res)=>{
    var n1= parseInt(req.body.num1);
    var n2= parseInt(req.body.num2);
    var ans=n1+n2;
    console.log(ans)
    res.send("ans: "+ans);
})


app.listen(5000)
// const PORT = process.env.PORT || 5000;
// app.listen(5000, console.log(`app is running at port ${PORT}`));