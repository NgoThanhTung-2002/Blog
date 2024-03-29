const express = require("express");
// import express from "express"
const app = express();
const port = 3000;
const AccountModel = require("./models/account");
// const AccountModel =  require("./db").AccountModel;
var bodyParser = require("body-parser");

var router = require("./router/apiRouter"); //importing the routes from another file.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post("/register", (req, res, next) => {
  var userName = req.body.userName;
  var password = req.body.password;

  AccountModel.findOne({
    userName: userName,
  })
    .then((data) => {
      if (data) {
        res.json("user đã tồn tại");
      } else {
        return AccountModel.create({
          userName: userName,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json("Tao tai khoan thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Tao tai khoan that bai");
    });
  console.log("register: ", userName, " ", password);
});

app.post("/login", (req, res, next) => {
  let userName = req.body.userName;
  let password = req.body.password;

  AccountModel.findOne(
    { userName: userName, password: password }
    // function (error, data) {
    // if (!data || !AccountModel.comparePassword(password, data.password)) {
    //   return res.send("Khong dung thông tin");
    // } else {
    //   // create token
    //   // const accessToken = jwt.sign({ id: data._id }, config.secretKey, {
    //   //   expiresIn: "12h",
    //   // });
    //   // res
    //   //   .cookie("access_token", accessToken, { httpOnly: true })
    //   //   .json(accessToken);

    // }
  )
    .then((data) => {
      // if (!data || !AccountModel.comparePassword(password, data.password)) {
      //   return res.json("Khong dung thông tin")}
      //   else {res.json('dangnhapthanhcong')}})
      if (data) {
        res.json("dangnhapthanhcong");
      } else {
        res.status(300).json("Khong dung thông tin");
      }
    })
    .catch((err) => {
      res.status(500).json("Lay thong tin that bai");
    });
});

app.get("/", (req, res, next) => {
  res.json("Home");
});

app.use("/admin/api/v1/", router);

// app.get("/", (req, res) => {
//   res.send("hello blog");
// });

// app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`Server start on port: ${port}`);
});
