const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getAllUsers);
router.post("/", controller.addUser);
router.get("/:id", controller.getUsersById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
