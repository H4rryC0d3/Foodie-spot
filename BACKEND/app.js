import express from "express";
import cors from "cors";
import dotenv  from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js'


const app = express()
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:5173"], // Allow both ports ((origin: "*")), // Allow all origins
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter)

dbConnection();

app.use(errorMiddleware);

export default app;
