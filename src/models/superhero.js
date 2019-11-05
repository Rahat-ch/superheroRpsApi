import mongoose from "mongoose";

const Hero = mongoose.model("Hero", {
  name: String,
  uses: Number,
  wins: Number
});

export default Hero;
