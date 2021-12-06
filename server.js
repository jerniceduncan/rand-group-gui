const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MOGODB_URI || "mongodb://localhost/rand-appr",
  (err) => {
    if (err) throw err;
    console.log("We've been connected to mongoDB");
  }
);

if (process.env.NODE_ENV === "production")
  app.use(express.static("client/build"));

app.use("/api", require("./routes/api-routes"));

if (process.env.NODE_ENV === "production")
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );

app.listen(5000, () =>
  console.log(`listening on port: http://localhost:${PORT}`)
);
