const express = require("express");
const app = express();
const { port, mongoURL } = require("./config.js");
const mongoose = require("mongoose");
const bookRoutes = require("./route/bookroute.js");
const Book = require("./model/bookmodel.js");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use("/books", bookRoutes);

app.get("/", async (request, response) => {
  return response.status(200).json({ message: "Server is Live 🚀" });
});

// Handle 404 Errors
app.use((req, res) => {
  return res
    .status(404)
    .json({ error: "Not Found", message: "Resource was not found" });
});

// Handle other kinds of error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Internal Server Error");
  next();
});

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
