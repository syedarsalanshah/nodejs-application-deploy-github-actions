import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("This is a Node.js application running with v3(git actions).");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});