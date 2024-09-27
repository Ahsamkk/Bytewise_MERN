import axios from 'axios'

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '44cc7a6fc2msh993222c80d86e6ep11dea2jsn54d2c33883db',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (e) {
    console.log(e.message);
  }
}