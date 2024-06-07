const mongoose = require("mongoose")

const appointmentschema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: "property" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    status: { type: String, enum: ["scheduled", "completed", "canceled"] },
    date: Date,
})


const AppointmentSchema = mongoose.model("Appointment", appointmentschema);

module.exports = AppointmentSchema;
