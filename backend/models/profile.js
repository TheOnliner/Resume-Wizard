const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    education:{
        school : { type: String},
        degree : { type: String},
        major: { type: String},
        from:{ type: String},
        to: { type: String}
    },
    experience:{
        title: { type: String},
        company:{ type: String},
        description:{ type: String},
        from:{ type: String},
        to: { type: String}
    },
    skills: {
        skill1: { type: String},
        skill2: { type: String},
        skill3: { type: String},
        skill4: { type: String},
        language: { type: String},
    },
    professionalSummary:{
        summary:{ type: String},
    },
    careerObjective:{
        objective:{ type: String},
    },
    contact:{
        firstName: { type: String},
        lastName: { type: String},
        address: { type: String},
        city: { type: String},
        state: { type: String},
        email: { type: String},
        phoneNumber: { type: String}
    },
    template:{
        selection: { type: String},
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

profileSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

profileSchema.set("toJSON", {
  virtuals: true,
});

exports.Profile = mongoose.model("Profile", profileSchema);
exports.profileSchema = profileSchema;

