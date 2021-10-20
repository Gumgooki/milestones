const Sequelize = require("sequelize");
const db = require("../db");

const Milestone = db.define("milestone", {
  milestoneName: {
    type: Sequelize.STRING,
    defaultValue: "none",
    required: true,
  },
  dueDate: {
    type: Sequelize.DATEONLY,
    defaultValue: "2021-06-20",
    required: true,
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    required: false,
  },
  assignedUsers: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    required: false,
  },
});

module.exports = Milestone;
