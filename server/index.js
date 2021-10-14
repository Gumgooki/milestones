const path = require("path");
const express = require("express");
// const db = require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", require("./api"));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// db.sync({ force: true });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
