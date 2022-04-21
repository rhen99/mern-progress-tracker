const express = require("express");
require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/api/users", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log("Server running on port " + port));
