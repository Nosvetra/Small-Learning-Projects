import mongoose from "mongoose";

const nodeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    markdown: {
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
