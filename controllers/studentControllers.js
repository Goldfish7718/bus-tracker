import Student from "../models/studentModel.js";

export const registerStudent = async (req, res) => {
  try {
    // Create a new student document
    const student = await Student.create(req.body);

    console.log(student);

    // Respond with a success message
    res.status(201).json({ message: "Registration successfull" });
  } catch (error) {
    console.error("Error registering student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the student" });
  }
};

export const fetchStudents = async (req, res) => {
  try {
    const students = await Student.find({});

    res.json(students);
  } catch (error) {
    console.error("Error registering student:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the student" });
  }
};
