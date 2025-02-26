const { validationResult } = require('express-validator');
const mapService = require('../services/mapsService');

module.exports.getCoordinates = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const address = req.query.address;

  if (!address) {
    return res.status(400).json({ message: 'Address is required' });
  }

  try {
    const coordinates = await mapService.getAddress(address);
    res.status(200).json(coordinates);
  } catch (error) {
    next(error);
  }
}

module.exports.getDistance = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { origin, destination } = req.query;

  if (!origin || !destination) {
    return res.status(400).json({ message: 'Origin and destination are required' });
  }

  try {
    const distance = await mapService.getDistance(origin, destination);
    res.status(200).json(distance);
  } catch (error) {
    next(error);
  }
}

module.exports.getSuggestion = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {input} = req.query;

  if (!input) {
    return res.status(400).json({ message: 'Query is required' });
  }

  try {
    const suggestions = await mapService.getSuggestions(input);
    res.status(200).json(suggestions);
  } catch (error) {
    next(error);
  }
}