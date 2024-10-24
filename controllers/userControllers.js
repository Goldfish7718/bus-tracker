import User from "../models/userModel.js";
import md5 from "md5";

export const signUpUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Please provide both fields" });
    }

    const potentialUser = await User.findOne({ username });

    if (potentialUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      password: md5(password),
    });

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Please provide both fields" });
    }

    const potentialUser = await User.findOne({ username });

    if (!potentialUser) {
      return res.status(400).json({ message: "Incorrect credentials" });
    }

    if (potentialUser.password !== md5(password)) {
      return res.status(400).json({ message: "Incorrect credentials" });
    }

    res.status(200).json({ potentialUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};
