const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  meeting_code: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Meeting=mongoose.model("Meeting",meetingSchema);
module.exports=Meeting;