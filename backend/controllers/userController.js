const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (res, user_id) => {
  const token = jwt.sign({ user_id }, "jwtSecret", { expiresIn: "7d" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // Set to true in production with HTTPS
    sameSite: "Lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPass,
    });
    generateToken(res, user._id);
    res.status(201).json({
      message: "User registered Successfully",
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Signup error:", err); // Log the error for debugging
    res.status(500).json({ message: "SignUp failed" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    generateToken(res, user._id);
    res.status(200).json({ user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed" });
  }
};

exports.logout = async (req, res) => {
  res.cookie("token", "", { maxAge: 0 });
  res.status(200).json({ message: "Logged out" });
};