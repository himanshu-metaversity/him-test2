const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
let data = "diamond";

app.use(cookieParser());
// Custom middleware function to serve files conditionally
app.use((req, res, next) => {
  const ui = req.query.ui;
  if (ui) {
    data = ui;
    res.cookie("type", ui, {
      maxAge: 900000,
      httpOnly: true,
    });
    console.log(data, ui);
  } else if (req?.cookies?.type) {
    data = req?.cookies?.type;
  }
  // console.log(req.path);
  // app.use(express.static("diamond"));
  express.static(path.join(__dirname, data))(req, res, next);
  // next();
});

app.use(express.json());
app.use(express.query());

app.get("*", (req, res) => {
  const ui = req.query.ui;
  if (ui) {
    data = ui;
    res.cookie("type", ui, {
      maxAge: 900000,
      httpOnly: true,
    });
  }

  res.sendFile(path.join(__dirname, data, "index.html"), (err) => {
    if (err) {
      // Handle error if the file cannot be sent
      console.error("Error sending file:", err);
      res.status(500).send("Internal Server Error");
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});