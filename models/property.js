const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
    title : String,
    description : String,
    image : String,
    price : String,
    location : String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    role: { type: String, enum: ["availabal", "sold", "pending"] },
});

const propertyschema = mongoose.model("user", propertySchema);

module.exports = propertyschema;


