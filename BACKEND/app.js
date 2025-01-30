import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

// ✅ CORS Configuration (Allow local + deployed frontend)
app.use(
    cors({
        origin: [
            "http://localhost:3000", 
            "http://localhost:5173",
            "https://foodie-spot-kappa.vercel.app"
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ✅ Middleware to parse JSON & URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Test Route to check if backend is running
app.get("/", (req, res) => {
    res.send("Hello World! Backend is working 🚀");
});

// ✅ Reservation Routes
app.use("/api/v1/reservation", reservationRouter);

// ✅ Database Connection
dbConnection();

// ✅ Error Middleware
app.use(errorMiddleware);

export default app;
