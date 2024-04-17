import axios from 'axios';

const API_KEY = 'YizyugfQ45fXCH8eJnV2U8gwZFnceLP5tDD5Ipcv';

export const fetchAsteroidData = async (startDay: string, endDay: string) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDay}&end_date=${endDay}&api_key=${API_KEY}`);
    return response.data.near_earth_objects;
  } catch (error) {
    throw new Error('Failed to fetch asteroid data');
  }
};

export const fetchPhotoDay = async (date: Date | null) => {
  try {
    if (!date) return null;
    const day = date.toISOString().slice(0, 10);
    const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${day}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch photo of the day');
  }
};
