const router = require("express").Router();

router.use("/milestones", require("./milestones"));

router.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

module.exports = router;

router.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
