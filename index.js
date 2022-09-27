const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "HELLO DOCKER !" });
});

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
