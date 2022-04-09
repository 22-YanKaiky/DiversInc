const users = require('../../data/users.json');
const questions = require('../../data/questions.json');
const createError = require("http-errors");
const express = require("express");
const router = express.Router();

router.get("/", (_, response) =>
  response.status(200).json({ message: "© 2022, Divers/nc" })
);

router.use("/users", (_, response) => {
  response.status(200).json(users)
});

router.use("/questions", (_, response) => {
  response.status(200).json(questions)
});

router.use(async (_, __, message) => {
  message(createError.NotFound("Route not Found"));
});

router.use((error, _, response, __) => {
  response.status(error.status || 500).json({
    message: error.message,
  });
});

module.exports = router;
