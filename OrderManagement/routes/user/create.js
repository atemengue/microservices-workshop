const express = require('express');
const User = require('../../models/userModel');

const router = express.Router();

router.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user)
  } catch (error) {
    res.status(500).send(error)
  }
});


const createUserRouter = router

module.exports = { createUserRouter };
