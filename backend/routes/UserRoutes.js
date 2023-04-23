const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
  signup,
  signin
} = require("../controllers/UserController");

const router = require("express").Router();

// router.get("/liked/:email", getLikedMovies);
// router.post("/add", addToLikedMovies);
// router.put("/remove", removeFromLikedMovies);
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
