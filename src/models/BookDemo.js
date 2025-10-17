import mongoose from "mongoose";

const bookDemoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    mobile: {
      type: String,
      required: [true, "Please add a mobile number"],
    },
    societyName: {
      type: String,
      required: [true, "Please add a society name"],
    },
    city: {
      type: String,
      required: [true, "Please add a city"],
    },
  },
  { timestamps: true }
);

const BookDemo = mongoose.model("BookDemo", bookDemoSchema);
export default BookDemo;
