const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
  country: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  zip: {
    type: String,
    required: true,
    trim: true,
  },
});

const userSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required"],
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    select: false,
  },
  phone: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, "Phone number must be 10 digits"],
    sparse: true,
  },

  roles: {
    type: [String],
    enum: ["user", "admin", "manager"],
    default: "user",
  },

  status: {
    type: String,
    enum: ["active", "inactive", "blocked"],
    default: "active",
  },
  address: [addressSchema],
  loginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
