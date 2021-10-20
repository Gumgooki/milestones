const db = require("../server/db");

const { Milestone } = require("../server/db/models");

const milestonesToSeed = [
  {
    milestoneName: "Believing Is The Absence Of Doubt",
    dueDate: "2021-11-03",
    isComplete: false,
    assignedUsers: ["Joffrey", "Chloe"],
  },
  {
    milestoneName: "When The Morning Dawns",
    dueDate: "2021-11-07",
    isComplete: false,
    assignedUsers: ["Joffrey"],
  },
  {
    milestoneName: "Control Your Own Level Of Motivation",
    dueDate: "2021-11-14",
    isComplete: false,
    assignedUsers: ["Joffrey", "Chloe", "Zoe"],
  },
  {
    milestoneName: "Trust In Yourself",
    dueDate: "2021-11-18",
    isComplete: false,
    assignedUsers: ["Chloe", "Zoe"],
  },
  {
    milestoneName: "Don't Let Them Get You Down",
    dueDate: "2021-11-21",
    isComplete: false,
    assignedUsers: ["Zoe"],
  },
  {
    milestoneName: "Test Yourself Often",
    dueDate: "2021-11-28",
    isComplete: false,
    assignedUsers: ["Chloe"],
  },
  {
    milestoneName: "Better Yourself Through Action",
    dueDate: "2021-12-02",
    isComplete: false,
    assignedUsers: ["Joffrey", "Zoe"],
  },
];

async function seed() {
  await db.sync({ force: true });
  let milestones;

  const seedRawData = async () => {
    milestones = await Promise.all(
      milestonesToSeed.map((milestone) => {
        return Milestone.create(milestone);
      })
    );
  };
  seedRawData();
}

seed();

module.exports = seed;
