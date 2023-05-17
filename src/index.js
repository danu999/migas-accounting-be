require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const usersRoutes = require("./routes/users.js");
const datamasterRoutes = require("./routes/datamaster.js");
const middlewareLogRequest = require("./middleware/logs.js");
const upload = require('./middleware/multer');


const app = express();

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/datamaster", datamasterRoutes);
app.use('/assets', express.static('public/images'))

app.post('/upload',upload.single('photo'),(req, res) => {
  res.json({
      message: 'Upload berhasil'
  })
})

app.use((err, req, res, next) => {
  res.json({
      message: err.message
  })
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


