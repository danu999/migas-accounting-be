const express = require("express");
const usersRoutes = require("./routes/users.js");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/users", usersRoutes);

const port = 3005;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// get all data
// app.get("/api/journals", (req, res) => {
//   const data = [
//     {
//       id: 1,
//       no: "G-0001",
//       date: "01-12-2020",
//       description: "General Journal",
//       value: "5.000.000",
//     },
//     {
//       id: 2,
//       no: "G-0002",
//       date: "05-12-2020",
//       description: "General Journal",
//       value: "6.000.000",
//     },
//     {
//       id: 3,
//       no: "G-0003",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "7.000.000",
//     },
//     {
//       id: 4,
//       no: "G-0004",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "8.000.000",
//     },
//     {
//       id: 5,
//       no: "G-0005",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "9.000.000",
//     },
//     {
//       id: 6,
//       no: "G-0006",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "10.000.000",
//     },
//     {
//       id: 7,
//       no: "G-0007",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "11.000.000",
//     },
//     {
//       id: 8,
//       no: "G-0008",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "12.000.000",
//     },
//     {
//       id: 9,
//       no: "G-0009",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "13.000.000",
//     },
//     {
//       id: 10,
//       no: "G-0010",
//       date: "08-12-2020",
//       description: "General Journal",
//       value: "14.000.000",
//     },
//   ];
//   res.json(data);
// });

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
