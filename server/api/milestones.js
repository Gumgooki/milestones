const { Milestone } = require("../db/models");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    let allMilestones = await Milestone.findAll();
    res.json(allMilestones);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
