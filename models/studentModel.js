import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  DOB: String,
  college_name: String,
  clgtime: String,
  course: String,
  branch: String,
  amount: String,
  year: String,
  address: String,
  stop: String,
  stopDistance: String,
  Student_MOB: String,
  Parent_MOB: String,
  Parent_name: String,
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
