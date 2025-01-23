const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const farmerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  coordinates: { type: String, required: true },
  primaryCrop: { type: String, required: true },
  waterResource: { type: String, required: true },
  landArea: { type: Number, required: true },
});

// Hash password before saving
farmerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model("Farmer", farmerSchema);
