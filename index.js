const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listen to port ${port}`);
});

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     let code = `<h2>welcome to myapp @${username}</h2>`;
//     res.send(code);
// });

app.get("/search", (req, res) => {
    let {q} = req.query;
    let code = `<h2>search results ${q}</h2>`;
    res.send(code);
});


// app.use((req, res) => {
//     console.log(`request received`);
//     // res.send({
//     //     name: "ramu",
//     //     age: 21,
//     //     college: "mlrit",
//     //     bus: 24,
//     // });
// });

// app.get("/", (req, res) => {
//     res.send("your are at root");
// });

// app.get("/about", (req, res) => {
//     res.send("you are at about page");
// });

// app.get("*", (req, res) => {
//     res.send("you req page curr not aval");
// });

// const figlet = require("figlet");

// figlet("Dr. Bhavani", function(err, data) {
//     if(err) {
//         console.group(`something sent wrong...`);
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });