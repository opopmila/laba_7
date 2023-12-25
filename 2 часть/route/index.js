const express = require("express");
const { getUser, postUser, deleteUser, putUser } = require("../contoller");
// const { getUser } = require("../contoller");
const router = express.Router();
// /api/user/localhost:3000
/*
* @route GET api/user
* @desc получаем пользователей
*/
router.get("/user", getUser);
router.post("/user/:id", postUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", putUser);
/*
* @route POST api/user/.id
* создаём пользователя
*/
// /api/user/...
// .delete("/user/:id", getUser)

module.exports = router;
