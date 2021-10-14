const Sequelize = require("sequelize");
const db = require("../db");

const Milestone = db.define("milestone", {
  milestoneName: {
    type: Sequelize.STRING,
    defaultValue: "none",
    required: true,
  },
});

module.exports = Milestone;
