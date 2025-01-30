export const sendReservation = async (req, res) => {
    try {
        console.log("🔹 Received Reservation Data:", req.body);

        // Simulating a response (Replace this with your database logic)
        if (!req.body.name || !req.body.email || !req.body.date) {
            return res.status(400).json({ success: false, message: "Missing fields" });
        }

        return res.status(200).json({ success: true, message: "Reservation Sent Successfully!" });
    } catch (error) {
        console.error("❌ Error in sendReservation:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
