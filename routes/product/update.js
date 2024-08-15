const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Update a product by ID.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 */
//TODO: complelez le code pour la mise a jour d'un produit

