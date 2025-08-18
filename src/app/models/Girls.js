const { default: mongoose } = require("mongoose");

const girlsScheema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    rollNumber: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

const girlsModel = mongoose.models.girls || mongoose.model("girls", girlsScheema);
export default girlsModel;
