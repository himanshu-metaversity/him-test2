const express = require("express");
const axios = require('axios');
// import express from 'express';
// import axios from 'axios';
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
let data = "WOLF";
let url = "http://3.34.146.14:8080/admin-new-apis/login/is-self-by-app-url";

app.use(cookieParser());
const PORT = 4010;

// const fetchApi = async (req, res) => {
// try {
//   let payload = req?.hostname;
//   let apires = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       appUrl: payload
//     })
//   })
//   if (!apires.ok) {
//     throw new Error('response not ok');
//   }
//   let currdata = await apires.json();
//   if (currdata?.data?.ui) {
//     data = currdata?.data?.ui;
//     res.cookie("type", data.toUpperCase(), {
//       maxAge: 30000,
//       httpOnly: true,
//     });
//   }
//   console.log(currdata, 'alkdjflkajdflkajsdklf');
// } catch (error) {
//   console.log(error, 'error')
// }


// }

app.post("login/is-self-by-app-url", async (req, res) => {
  try {
    let payload = req?.hostname;
    let apires = await axios.post(url, payload);
    res.json(apires.data);

  } catch (error) {
    console.log(error, 'error')
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

// Custom middleware function to serve files conditionally
app.use(async (req, res, next) => {
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
  } else {

    // await fetchApi(req, res);
    // await fetchingapi(req, res);
  }
  // console.log(req.path);
  // app.use(express.static("diamond"));
  express.static(path.join(__dirname, data))(req, res, next);
  // next();
});

app.use(express.json());
app.use(express.query());

app.get("*", async (req, res) => {
  const ui = req.query.ui;
  if (ui) {
    data = ui;
    res.cookie("type", ui, {
      maxAge: 30000,
      httpOnly: true,
    });
  } else if (req?.cookies?.type) {
    data = req?.cookies?.type;
  } else {

    // await fetchApi(req, res);
    // await fetchingapi(req, res);
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
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});