import { Model, Schema, ObjectID, Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercare: true,
    },
    name: {
      type: String,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercare: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 256,
    },
    address: { type: String, default: "" },
    company: { type: String, default: "" },
    phone: { type: String, default: "" },
    photo: {},
    role: {
      type: [String],
      default: ["Buyer"],
      enum: ["Buyer", "Seller", "Admin"],
    },
    enquiredProperties: [{ type: ObjectID, ref: "Ad" }],
    whishlist: [{ type: ObjectID, ref: "Ad" }],
    resetCode: "",
  },
  { timestamps: true }
);

export default model("User", schema);
