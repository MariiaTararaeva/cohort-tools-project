const router = require("express").Router();

// All the routes in there starts with "/api", see app.js to see how the router is imported and used

// router.get("/", (req, res) => {
//   res.json("All good in here");
// });
router.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

const cohortsRoutes = require("./cohorts.routes");
router.use("/cohorts", cohortsRoutes);

module.exports = router;
