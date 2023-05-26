import express from 'express';
import dotenv from 'dotenv';
import router from './controller/routes.js'
import cors from 'cors'
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

dotenv.config();

const app = express();
const port = process.env.PORT | 3001;

app.use(cors());
app.use(express.json())
app.use(router)

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "OpenAPI Example API",
        version: "1.0.0",
        description: "A simple Express API that utilizes OpenAPI",
    },
};
const options = {
    swaggerDefinition,
    apis: ["./controller/*.js"],
};
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));



app.listen(8080, () => console.log("Server is running on port", 8080));

app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);