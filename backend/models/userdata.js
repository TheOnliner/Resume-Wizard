const mongoose = require ("mongoose");
const userdataSchema = new mongoose.Schema({
    resumecontact:{
        firstname: string,
        lastname: string,
        address: string,
        city: string,
        state: string,
        email: string,
        phone: string
    },
    education:{
        schoolname : string,
        degree : string,
        major: string,
        from:string,
        to: string
    },
})
var userdata = mongoose.model('userdata',userdataSchema);
module.exports = userdata;