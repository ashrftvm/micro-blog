const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send({ posts });
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = {
      id,
      title,
      comments: [],
    };
  } else if (type === "CommentCreated") {
    const { id, postId, comment } = data;
    const post = posts[postId];
    post.comments.push({ id, comment });
  }

  res.send({});
});

app.listen(4002, () => {
  console.log("listening on 4002 $query$");
});