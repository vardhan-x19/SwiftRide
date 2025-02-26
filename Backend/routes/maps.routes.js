const express = require('express');
const router = express.Router();
const { query } = require('express-validator');
const mapsController = require('../Controller/maps.controller');
const authMiddleware=require('../Middlewares/auth.middleware');
router.post('/coordinates', [
  query('address').isLength({ min: 3 }).withMessage('Address must be at least 3 characters long')
],authMiddleware.authUser, mapsController.getCoordinates);

router.post('/get-distance', [
  query('origin').isLength({ min: 3 }).withMessage('Origin must be at least 3 characters long'),
  query('destination').isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long')
],authMiddleware.authUser, mapsController.getDistance);

router.post('/suggestion', [
  query('input').isLength({ min: 1 }).withMessage('Input must not be empty')
], authMiddleware.authUser, mapsController.getSuggestion);

module.exports = router;
