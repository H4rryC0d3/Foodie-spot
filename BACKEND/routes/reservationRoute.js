import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

// ✅ Debugging log
console.log("✅ Reservation Route Loaded");

// POST request to send a reservation
router.post("/send", async (req, res, next) => {
    try {
        console.log("🔹 Received Request:", req.body); // Check what data is coming in
        await sendReservation(req, res);
    } catch (error) {
        console.error("❌ Error in sendReservation:", error);
        next(error);
    }
});

export default router;
