const {Schema , model} = require('mongoose');

const mettingSchema = new  Schema({
    user_id:{
        type:String,
    },
    meetingCode:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now,
    },
});

module.exports=model("Metting",mettingSchema);