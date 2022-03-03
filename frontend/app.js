///------------------------------------------------------ Imam is formos duomenis
document.querySelector("#btn-post").addEventListener("click", (event) => {
  event.preventDefault();

  let blogHeadline = document.querySelector(
    '#blog-form input[name="blog-headline"]'
  ).value;
  let blogDescription = document.querySelector(
    '#blog-form input[name="blog-description"]'
  ).value;

  fetch("http://localhost:3002/save-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      blogHeadline,
      blogDescription,
    }),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
      document.querySelector(".post-1").innerHTML =
        `<h5>${resp.blogHeadline}</h5>` +
        "<h5>•</h5>" +
        `<h5>${resp.blogDescription}</h5>` +
        "<h5>•</h5>";
    });
});

// });

// function checkData() {
//   fetch("http://localhost:3002")
//     .then((response) => response.json())
//     .then((obj) => {
//       document.getElementById("score").innerHTML =
//         `<div class="size__huge"><h1>${obj.team1}</h1></div>` +
//         `<div class="size__huge"><h1>${obj.team2}</h1></div>`;
//     });
// }
// checkData();

// checktime = () => {
//   fetch("http://localhost:3002");
//   setInterval(() => {
//     checkData();
//   }, 3000);
// };

// checktime();

// document
//   .querySelector("#run-match")
//   .addEventListener("click", (event) => {
//     event.preventDefault();

//     let roundas = document.querySelector(
//       '#naujas-macas input[name="roundas"]'
//     ).value;
//     let data = document.querySelector('#naujas-macas input[name="data"]').value;
//     let lokacija = document.querySelector(
//       '#naujas-macas input[name="lokacija"]'
//     ).value;
//     let laikas = document.querySelector(
//       '#naujas-macas input[name="laikas"]'
//     ).value;
//     let komanda1 = document.querySelector(
//       '#naujas-macas input[name="team1Name"]'
//     ).value;
//     let komanda2 = document.querySelector(
//       '#naujas-macas input[name="team2Name"]'
//     ).value;

//     let mode = document
//       .querySelector("#naujas-macas")
//       .getAttribute("data-mode");
//     let method = "POST";
//     let id = "";

//     if (mode == "edit") {
//       method = "PUT";
//       id = document.querySelector("#naujas-macas").getAttribute("data-id");
//     }

//     fetch("http://localhost:3002/save-request/" + id, {
//       method: method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         roundas,
//         data,
//         lokacija,
//         laikas,
//         komanda1,
//         komanda2,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((resp) => {
//         document.getElementById("topLine").innerHTML =
//           `<h5>Round ${resp.roundas}</h5>` +
//           "<h5>•</h5>" +
//           `<h5>${resp.data}</h5>` +
//           "<h5>•</h5>" +
//           `<h5>${resp.lokacija}</h5>` +
//           "<h5>•</h5>" +
//           `<h5>${resp.laikas}</h5>`;
//         document.getElementById(
//           "team1Name"
//         ).innerHTML = `<h3 class="size__mid top">${resp.komanda1}</h3>`;
//         document.getElementById(
//           "team2Name"
//         ).innerHTML = `<h3 class="size__mid top">${resp.komanda2}</h3>`;
//       });
//   });

// document.querySelector(".get-matches").addEventListener("click", (event) => {
//   event.preventDefault();

//   fetch("http://localhost:3002/get-matches")
//     .then((resp) => resp.json())
//     .then((resp) => {
//       displayList(resp);
//     });
// });

// const displayList = (resp) => {
//   let vidus = "";

//   resp.forEach((val, index) => {
//     vidus += `<tr>
//           <td>${val.id}</td>
//           <td>${val.lokacija}</td>
//           <td>${val.data}</td>
//           <td><a href="${val.id}" class="delete">Delete</a></td>
//           <td><a href="${val.id}" class="edit">Edit</a></td>
//           </tr>`;
//   });

//   let table = `<table>
//       <tbody>
//           ${vidus}
//       </tbody>
//   </table>`;

//   document.querySelector(".rezultatas").innerHTML = table;

//   //Duomenu trynimas
//   document.querySelectorAll(".delete").forEach((val) => {
//     val.addEventListener("click", (event) => {
//       event.preventDefault();

//       let id = val.getAttribute("href");

//       fetch("http://localhost:3002/" + id, {
//         method: "DELETE",
//       })
//         .then((resp) => resp.json())
//         .then((resp) => {
//           console.log(resp);

//           if (resp.status == "success") displayList(JSON.parse(resp.jsonResp));
//         });
//     });
//   });

//   //Duomenu redagavimas
//   document.querySelectorAll(".edit").forEach((val) => {
//     val.addEventListener("click", (event) => {
//       event.preventDefault();
//       let id = val.getAttribute("href");

//       fetch("http://localhost:3002/get-match/" + id)
//         .then((resp) => resp.json())
//         .then((resp) => {
//           if (resp.status == "success") {
//             document
//               .querySelector("#naujas-macas")
//               .setAttribute("data-mode", "edit");
//             document
//               .querySelector("#naujas-macas")
//               .setAttribute("data-id", "edit");
//             document.querySelector("#naujas-macas").setAttribute("data-id", id);
//             document.querySelector(
//               '#naujas-macas input[name="lokacija"]'
//             ).value = resp.jsonResp.lokacija;
//             document.querySelector('#naujas-macas input[name="data"]').value =
//               resp.jsonResp.data;
//           }
//         });
//     });
//   });
// };

// /////////////// nu lyg ir nereikiaaaa

// fetch("http://localhost:3002/get-matches")
//   .then((resp) => resp.json())
//   .then((resp) => {
//     displayList(resp);
//   });
