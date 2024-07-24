import express from "express";
import bodyParser from "body-parser";

const app = express();

// Middleware
app.use(bodyParser.json())


app.listen(5000, () => console.log("Server Started"))


app.get('/', (req,res) => {
  console.log("something")
  res.send("hello homepage")
})


