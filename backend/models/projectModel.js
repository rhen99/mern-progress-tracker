const mongoose = require("mongoose");

const stepSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please name this step."],
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name to your goal."],
  },
  steps: [stepSchema],
  progress: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Project", projectSchema);
