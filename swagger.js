const swaggerAutogen = require("swagger-autogen")();
const doc = {
    info: {
        title: "BytePerks API",
        description: "API Documentation for BytePerks",
    },
    host: "api.byteperks.com",
    schemes: ["https"],
};
const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
