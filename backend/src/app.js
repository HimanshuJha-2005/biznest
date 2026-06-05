const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const businessRoutes = require("./routes/business.routes");

const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("BizNest API Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/business", businessRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;