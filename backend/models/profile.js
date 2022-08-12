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
        firstname: { type: String},
        lastname: { type: String},
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







// const educationSchema = new mongoose.Schema({
//   school: { type: String, required: true },
//   degree: { type: String, required: true },
//   major: { type: String, required: true },
//   from: { type: String, required: true },
//   to: { type: String, required: true },
// });

// exports.Education = mongoose.model("Education", educationSchema);
// exports.educationSchema = educationSchema;

// const experienceSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   company: { type: String, required: true },
//   description: { type: String, required: true },
//   from: { type: String, required: true },
//   to: { type: String, required: true },
// });

// exports.Experience = mongoose.model("Experience", experienceSchema);
// exports.experienceSchema = experienceSchema;

// const skillSchema = new mongoose.Schema({
//   skill1: { type: String, required: true },
//   skill2: { type: String, required: true },
//   skill3: { type: String, required: true },
//   skill4: { type: String, required: true },
//   language: { type: String, required: true },
// });

// exports.Skill = mongoose.model("Skill", skillSchema);
// exports.skillSchema = skillSchema;

// const summarySchema = new mongoose.Schema({
//   summary: { type: String, required: true },
// });

// exports.Summary = mongoose.model("Summary", summarySchema);
// exports.summarySchema = summarySchema;

// const  objectiveSchema = new mongoose.Schema({
//   objective: { type: String, required: true },
// });

// exports.Objective = mongoose.model("Objective", objectiveSchema);
// exports.objectiveSchema = objectiveSchema;

// const contactSchema = new mongoose.Schema({
//   firstname: { type: String, required: true },
//   lastname: { type: String, required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   email: { type: String, required: true },
//   phoneNumber: { type: String, required: true },
// });

// exports.Contact = mongoose.model("Contact", contactSchema);
// exports.contactSchema = contactSchema;


// const  templateSchema = new mongoose.Schema({
//   selection: { type: Number, required: true },
// });

// exports.Template = mongoose.model("Template", templateSchema);
// exports.templateSchema = templateSchema;


// const profileSchema = new mongoose.Schema({
//   user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User',
//   },
//   education: [educationSchema],
//   experience: [experienceSchema],
//   skills: [skillSchema],
//   professionalSummary: [summarySchema],
//   careerObjective: [objectiveSchema],
//   contact: [contactSchema],
//   template: [templateSchema],
// });