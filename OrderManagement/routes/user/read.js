const express = require('express');
const User = require('../../models/userModel');

const router = express.Router();


// api to get all users
//swagger description
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Users fetched successfully
 *         content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error

 */
router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Failed to fetch users', error);
    res.status(500).json({ message: `Internal server error ${error}` });
  }
}
);

const readUserRouter = router

module.exports = { readUserRouter };
