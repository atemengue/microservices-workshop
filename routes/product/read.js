const express = require('express');
const Product = require('../../models/productModel');

const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products.
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: products not found.
 *       500:
 *         description: Internal server error.
 */

//TODO: complelez le code pour la recuperation de la liste des produits



/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a product by ID.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: product not found.
 *       500:
 *         description: Internal server error.
 */
//TODO: complelez le code pour la recuperation  d'un produit par son identifiant
