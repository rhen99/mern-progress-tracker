const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;
app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(port, () => console.log("Server runing on port " + port));
