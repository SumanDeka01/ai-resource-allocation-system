import mongoose, { Schema } from "mongoose";

const resourceSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    capacity: {
      type: String,
    },
    location: {
      type: Schema.type.location,
      ref: "user", // Not sure of this! Have to fix this
    },
    tags: {
      type: Schema.type.tags,
    },
  },
  { timestamps: true },
);

export const resource = mongoose.model("Resource", resourceSchema);
