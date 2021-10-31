const { Router } = require("express");
const router = Router();

const {
  getUserById,
  getOpportunityById,
  getUsersBySubject,
} = require("../controllers/index_controller");

router.get("/user/:id", getUserById);
router.get("/opportunities/:id", getOpportunityById);
router.post("/users/:subject", getUsersBySubject);

module.exports = router;
