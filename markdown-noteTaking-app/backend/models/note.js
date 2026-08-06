import mongoose from "mongoose";

const nodeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const note = mongoose.model("Note", nodeSchema);

export default note;
