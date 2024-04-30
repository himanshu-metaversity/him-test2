const express = require("express");
const axios = require('axios');
// import express from 'express';
// import axios from 'axios';
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
let data = "WOLF";
// let url = "http://3.34.146.14:8080/admin-new-apis/login/is-self-by-app-url";
let url = "https://adminapi.247idhub.com/admin-new-apis/login/is-self-by-app-url";

app.use(cookieParser());
const PORT = 4010;

const fetchApi = async (req, res) => {
  try {
    let payload = req?.headers?.referer || req?.headers?.origin || '';

    // console.log('payload', req)
    // console.log('origin', req?.headers?.origin)
    // console.log('req.get origin', req?.get('origin'))
    // console.log('req header origin', req?.get('origin'))
    // console.log('referer', req?.referer)
    // let payload = '11bet24.com';
    console.log("Referer", req?.headers?.referer);
    console.log("Origin", req?.headers?.origin);

    if (!payload) {
      console.log(req);
      return false;
    }
    let apires = await axios.post(url, { appUrl: payload.split('://')[1].split('/')[0] });
    let currdata = apires?.data;
    // console.log('currdata', currdata?.data)
    if (currdata?.data?.ui) {
      data = currdata?.data?.ui;
      console.log('api res', data)
      res.cookie("type", data.toUpperCase(), {
        maxAge: 30000,
        httpOnly: true,
      });
return data.toUpperCase();
    }
  } catch (error) {
    console.log(error, 'error')
  }

}



// app.post("login/is-self-by-app-url", async (req, res) => {
//   try {
//     let payload = req?.hostname;
//     let apires = await axios.post(url, payload);
//     res.json(apires.data);

//   } catch (error) {
//     console.log(error, 'error')
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// })

// Custom middleware function to serve files conditionally
app.use(async (req, res, next) => {
  const ui = req.query.ui;
  if (ui) {
    data = ui;
    res.cookie("type", ui, {
      maxAge: 900000,
      httpOnly: true,
    });
    // console.log(data, ui);
  } else if (req?.cookies?.type) {
    data = req?.cookies?.type;
  } else {

    data = await fetchApi(req, res);
    // await fetchingapi(req, res);
  }
  // console.log(req.path);
  // app.use(express.static("diamond"));
  express.static(path.join(__dirname, data || 'RELOAD'))(req, res, next);
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

    data = await fetchApi(req, res);
    // await fetchingapi(req, res);
  }

  res.sendFile(path.join(__dirname, data || 'RELOAD', "index.html"), (err) => {
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
