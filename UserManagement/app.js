const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'users';
const serverPort = process.env.SERVER_PORT || 3003;
const serverHost = process.env.SERVER_HOST || 'localhost';

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Import required modules

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
const corsOptions = {
    origin: '*',
    methods: 'GET,POST'
};

app.use(cors(corsOptions));


// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Authentication API',
            version: '1.0.0',
            description: 'API endpoints for user registration and authentication',
        },
        servers: [
            {
                url: `http://${serverHost}:${serverPort}`,
            },
        ],
    },
    apis: ['./app.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Connect to MongoDB
const target = 'dbuser'
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
    // mongoose.connect('mongodb+srv://user1:userdb@testcluster.jjurk0m.mongodb.net/?retryWrites=true&w=majority&appName=testcluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));

// Define user schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});


// Create user model
const User = mongoose.model('User', userSchema);

// Routes
/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:  
 *                 type: string
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Username already exists, or missing username/password
 *       500:
 *         description: Internal server error
 */
app.post('/api/user/register', async (req, res) => {
    // Get username and password from request body
    const { username, password, email } = req.body;
    //validation des donnee
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Missing username/password/email' });
    }
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        //check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword, email: email });
        await newUser.save();

        res.json({ message: 'User registered successfully', "user": newUser });
    } catch (error) {
        console.error('Failed to register user', error);
        res.status(500).json({ message: `Internal server error ${error}` });
    }
});

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Authenticate a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       401:
 *         description: Invalid password
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
app.post('/api/user/login', async (req, res) => {
    // Get username and password from request body
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Missing email/password' });
    }
    try {

        var user = await User.findOne({ email })
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });

        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }

            if (!result) {
                return res.status(401).json({ message: 'Invalid password' });
            }

            // Generate JWT token with expiration time of 1 minute
            const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '15m' });

            // Return token
            // res.json({ token });
            const usertoreturn = { username: user.username, email: user.email, id: user.id }
            return res.status(200).json({ 'token': token, 'user': usertoreturn });
        });
    } catch (error) {
        console.error('Failed to register user', error);
        res.status(500).json({ message: `Internal server error ${error}` });

    }
});

// api to populate the database with some users
//swogger description
/**
 * @swagger
 * /api/user/populate:
 *   post:
 *     summary: populate the database with some users
 *     responses:
 *       200:
 *         description: Users added successfully
 *       500:
 *         description: Internal server error
 */
app.post('/api/user/populate', async (req, res) => {
    try {
        const users = [
        ];
        for (let i = 0; i < 20; i++) {
            users.push({ username: `user${i}`, email: `user${i}@gmail.com` });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash('password', 10);
        for (let i = 0; i < users.length; i++) {
            const newUser = new User({ username: users[i].username, password: hashedPassword, email: users[i].email });
            await newUser.save();
        }
        res.json({ message: 'Users added successfully' });
    } catch (error) {
        console.error('Failed to add users', error);
        res.status(500).json({ message: `Internal server error ${error}` });
    }
}
);

// api to get all users
//swogger description
/**
 * @swagger
 * /api/user/all:
 *   get:
 *     summary: get all users
 *     responses:
 *       200:
 *         description: Users fetched successfully
 *       500:
 *         description: Internal server error
 */
app.get('/api/user/all', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Failed to fetch users', error);
        res.status(500).json({ message: `Internal server error ${error}` });
    }
}
);


// Start the server
app.listen(serverPort, () => {
    console.log(`Server started on port http://${serverHost}:${serverPort} `);
});