import express from "express";
import cors from "cors";
import * as fs from "fs";

const app = express();
const filePath = "./db/data.json";
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
////////////////////

app.post("/save-request", (req, res) => {
  let myData = req.body;
  fs.writeFile(filePath, myData, (err, data) => {
    if (!err) {
      res.json({ message: "Informacija issaugota" });
    } else {
      res.json({ message: "Nepavyko sukurti failo" });
    }
  });
  res.send(myData);
});

//---------------------------------------------------------------------- DATA
// let date = new Date();
// let todayDate =
//   date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

// function time() {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   const time = hours + ":" + minutes + ":" + seconds;
//   return time;
// }
// time();
// setInterval(time, 60000);

//---------------------------------------------------------------------- Tikrinam ar yra failas
// app.get("/check-file", (req, res) => {
//   fs.access(filePath, (err) => {
//     if (err) res.json({ result: "failed" });
//     else res.json({ result: "success" });
//   });
// });

//---------------------------------------------------------------------- Save Request'as

// app.post("/save-request", (req, res) => {
//   let masyvas = [];

//   fs.access(filePath, (err) => {
//     if (err) {
//       req.body.id = 0;
//       masyvas.push(req.body);
//       fs.writeFile(filePath, JSON.stringify(masyvas), "utf8", (err) => {
//         if (!err) {
//           res.json({ message: "Informacija issaugota" });
//         } else {
//           res.json({ message: "Nepavyko sukurti failo" });
//         }
//       });
//     } else {
//       fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) {
//           res.json({ message: "Ivyko klaida" });
//           return false;
//         }
//         let json = JSON.parse(data);

//         if (json.length == 0) req.body.id = 0;
//         else req.body.id = json[json.length - 1].id + 1;

//         json.push(req.body);

//         fs.writeFile(filePath, JSON.stringify(json), "utf8", (err) => {
//           if (!err) {
//             res.json({ message: "Informacija issaugota" });
//           } else {
//             res.json({ message: "Nepavyko sukurti failo" });
//           }
//         });
//       });
//     }
//   });
// });

//---------------------------------------------------------------------- GET ID DELETE

// app.get("/get-matches", (req, res) => {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) return false;
//     let info = JSON.parse(data);
//     res.json(info);
//   });
// });

// app.get("/get-match/:id", (req, res) => {
//   let id = req.params.id;

//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       res.json({ status: "failed", message: "Nepavyko perskaityti failo" });
//       return false;
//     }

//     let json = JSON.parse(data);
//     let found = false;

//     json.forEach((el, index) => {
//       if (el.id == id) {
//         res.json({
//           status: "success",
//           message: "Sėkmingai perskaityti duomenys",
//           jsonResp: el,
//         });
//         found = true;
//       }
//     });

//     if (!found)
//       res.json({ status: "failed", message: "Nepavyko surasti tokio id" });
//   });
// });

// app.get("/check-file", (req, res) => {
//   fs.access(filePath, (err) => {
//     if (err) res.json({ result: "failed" });
//     else res.json({ result: "success" });
//   });
// });

// app.post("/post-method/:id", (req, res) => {
//   console.log(req.body);
//   res.json({ resp: req.body });
// });

// app.delete("/:id", (req, res) => {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       res.json({ status: "failed", message: "Nepavyko perskaityti failo" });
//       return false;
//     }

//     let json = JSON.parse(data);

//     json.forEach((el, index) => {
//       if (el.id == req.params.id) json.splice(index, 1);
//     });

//     let jsonResp = JSON.stringify(json);

//     fs.writeFile(filePath, jsonResp, "utf8", (err) => {
//       if (!err) {
//         res.json({
//           status: "success",
//           message: "Informacija issaugota",
//           jsonResp,
//         });
//       } else {
//         res.json({ status: "failed", message: "Nepavyko sukurti failo" });
//       }
//     });
//   });
// });

app.listen(3002);
