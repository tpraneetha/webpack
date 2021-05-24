var path = require('path')
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require("cors")
const dotenv = require("dotenv")
const fetch = require("node-fetch")
dotenv.config()
const app = express()
app.use(express.static('src/client'))
app.use(bodyParser.json())
app.use(cors())
console.log(__dirname)
app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})
// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })
// app.get("/getData", (req, res) => {
//   res.send(projectData);
// });
app.post("/addUrl", async (req, res) => {
  console.log('req====+>', req.body)
  const result = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&url=" + req.body.text + "&lang=en")
  try {
    console.log(result)
    const response = await result.json();
    res.send(response)
    console.log(response)
  } catch (error) {
    console.log("error", error);
  }
});
