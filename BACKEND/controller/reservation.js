export const sendReservation = async (req, res) => {
    console.log("📩 Received reservation:", req.body); // ✅ Debugging

    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        console.log("❌ Missing fields:", { firstName, lastName, email, phone, date, time });
        return res.status(400).json({ success: false, message: "Missing fields" });
    }

    try {
        // Your database saving logic here...
        res.status(200).json({ success: true, message: "Reservation successful!" });
    } catch (error) {
        console.error("❌ Server Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
