const userValorantModel = require("../models/ValorantSchema");
const userCODMModel = require("../models/codmSchema");
const userBGMIModel = require("../models/BGMISchema");
const userMinecraftModel = require("../models/minescraftSchema");

// Register Callback
const registerValorantController = async (req, res) => {
  try {
    const newUser = new userValorantModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerCODMController = async (req, res) => {
  try {
    const newUser = new userCODMModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerBGMIController = async (req, res) => {
  try {
    const newUser = new userBGMIModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
const registerMinecraftController = async (req, res) => {
  try {
    const newUser = new userMinecraftModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  registerValorantController,
  registerBGMIController,
  registerCODMController,
  registerMinecraftController,
};
