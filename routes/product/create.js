const express = require('express');
const Product = require('../../models/productModel');
const axios = require('axios');
const config = require('../../config');

const router = express.Router();

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Create a new product.
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The created product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */

//TODO: complelez le code pour la creation du produit