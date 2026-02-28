import mongoose, { Schema } from "mongoose";

const allocationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    requestId: {
      type: String,
      required: true,
    },
    resourceId: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    allocated_start: {},
    allocated_end: {},
    allocated_method: {},
  },
  { timestamps: true },
);

export const allocation = mongoose.model("Allocation", allocationSchema);
