const mongoose = require ("mongoose");

const profileSchema = new mongoose.Schema({
    education:{
        schoolname : String,
        degree : String,
        major: String,
        from:String,
        to: String
    },
    experience:{
        title: String,
        company:String,
        years:String,
    },
    skills: {
        skill1: String,
        skill2: String,
        skill3: String,
        skill4: String,
        languages: String,
    },
    summary:{
        summary:String,
    },
    careerObjective:{
        objective:String,
    },
    contact:{
        firstname: String,
        lastname: String,
        address: String,
        city: String,
        state: String,
        email: String,
        phone: String
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