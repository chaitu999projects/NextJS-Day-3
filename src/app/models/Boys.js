const { default: mongoose } = require("mongoose");

const BoysScheema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    rollNumber: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

const boysModel = mongoose.models.boys || mongoose.model("boys", BoysScheema);
export default boysModel;
