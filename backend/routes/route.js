const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();

// Get Route

router.get("/", async (req, res) => {
  try {
    const getAll = await User.find();
    res.status(200).json(getAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Create Route

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  console.log(name, email, age);
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Get Single User Route

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getOne = await User.findById({ _id: id });
    res.status(200).json(getOne);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Delete Route

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Update Route

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;