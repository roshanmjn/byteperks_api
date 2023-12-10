const express = require("express");
const cors = require("cors");
const routes = require("./routes/index.js");
const errorHandler = require("./middleware/errorHandler.js");
const { NotFound } = require("./errors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger-output.json");

const app = express();
const port = 5000;
const host = "localhost";

let corsOptions = {
    origin: "*",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", routes);

app.all("*", () => {
    throw new NotFound("Page not found!");
});
app.use(errorHandler);
app.listen(port, host, async () => {
    try {
        console.log(`Server hosted in http://${host}:${port}`);
    } catch (err) {
        throw err;
    }
});
