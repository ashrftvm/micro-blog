const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const content = req.body;
  console.log(content, "hree");
  axios.post("http://localhost:4000/events", content).catch((e) => {
    console.log("error", e);
  });
  axios.post("http://localhost:4001/events", content).catch((e) => {
    console.log("error", e);
  });
  axios.post("http://localhost:4002/events", content).catch((e) => {
    console.log("error", e);
  });
  axios.post("http://localhost:4003/events", content).catch((e) => {
    console.log("error", e);
  });
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
