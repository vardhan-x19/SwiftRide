const axios = require('axios');
const dotenv=require('dotenv');
dotenv.config();
module.exports.getAddress = async (address) => {
  try {
    const apiKey = process.env.GOOGLE_MAP_KEY;
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address: address,
        key: apiKey
      }
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        lat: location.lat,
        lng: location.lng
      };
    } else {
      throw new Error('Unable to fetch coordinates');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching coordinates');
  }
}
module.exports.getDistance = async (origin, destination) => {

  if (!origin || !destination) {
    return {
      error: 'Origin and destination must be provided'
    };
  }

  try {
    const apiKey = process.env.GOOGLE_MAP_KEY;
    const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
      params: {
        origins: origin,
        destinations: destination,
        key: apiKey
      }
    });

    if (response.data.status === 'OK') {
      const element = response.data.rows[0].elements[0];
      if (element.status === 'OK') {
        return {
          distance: element.distance.text,
          duration: element.duration.text
        };
      } else {
        throw new Error('Unable to fetch distance');
      }
    } else {
      throw new Error('Error fetching distance matrix');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching distance');
  }
}

module.exports.getSuggestions = async (input) => {
  try {
    const apiKey = process.env.GOOGLE_MAP_KEY;
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
      params: {
        input: input,
        key: apiKey
      }
    });

    if (response.data.status === 'OK') {
      return response.data.predictions.map(prediction => ({
        description: prediction.description,
        place_id: prediction.place_id
      }));
    } else {
      throw new Error('Unable to fetch suggestions');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching suggestions');
  }
}