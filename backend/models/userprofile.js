const mongoose = require("mongoose");

const userprofileSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobnumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
},
});

userprofileSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userprofileSchema.set("toJSON", {
  virtuals: true,
});

exports.Userprofile = mongoose.model("Userprofile", userprofileSchema);
exports.userprofileSchema = userprofileSchema;
