const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 9000;
const usersRoutes = require("./routes/users.js");
const datamasterRoutes = require("./routes/datamaster.js");
const middlewareLogRequest = require("./middleware/logs.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/datamaster", datamasterRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// // get a single data by id
// app.get('/data/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const result = data.find(item => item.id === id);
//   if (result) {
//     res.json(result);
//   } else {
//     res.status(404).json({ message: 'Data not found' });
//   }
// });

// // create new data
// app.post('/data', (req, res) => {
//   const { name, age, email } = req.body;
//   const id = data.length + 1;
//   data.push({ id, name, age, email });
//   res.status(201).json({ message: 'Data created successfully' });
// });

// // update a data by id
// app.put('/data/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name, age, email } = req.body;
//   const index = data.findIndex(item => item.id === id);
//   if (index !== -1) {
//     data[index] = { id, name, age, email };
//     res.json({ message: 'Data updated successfully' });
//   } else {
//     res.status(404).json({ message: 'Data not found' });
//   }
// });

// // delete a data by id
// app.delete('/data/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = data.findIndex(item => item.id === id);
//   if (index !== -1) {
//     data.splice(index, 1);
//     res.json({ message: 'Data deleted successfully' });
//   } else {
//     res.status(404).json({ message: 'Data not found' });
//   }
// });

// const express = require("express");
// const app = express();
// const port = 3005;
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

// app.get("/", (request, response) => {
//   response.send("Halaman Utama Guys");
// });

// app.get("/hello", (req, res) => {
//   res.send("Hello World");
// });

// app.post("/login", (req, res) => {
//   console.log({ requestFromOutside: req.body });
//   res.send("login berhasil");
// });

// app.put("/username", (req, res) => {
//   console.log({ Updatedata: req.body });
//   res.send("Update Berhasil");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
