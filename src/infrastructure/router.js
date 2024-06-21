const express = require('express')
const router = express.Router()
const sort = require('../domain/sort')


/**
 * @swagger
 * /sort:
 *   post:
 *     summary: Process a list of entries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The item's ID
 *                 value:
 *                   type: string
 *                   description: The item's value
 *     responses:
 *       200:
 *         description: The processed list output
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The item's ID
 *                   value:
 *                     type: string
 *                     description: The item's value
 */
router.post('/sort', (req, res) => {
    const result = sort(req.body);
    res.json(result);
})

module.exports = router