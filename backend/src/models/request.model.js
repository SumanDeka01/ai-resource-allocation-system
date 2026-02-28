import mongoose, { Schema } from "mongoose";

const requestSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const request = moongose.model("Request", requestSchema);
