import axios from 'axios';
import iziToast from 'izitoast';
import { createGallery, hideLoader } from './render-functions';

const API_KEY = '49785323-b36a5eef0b3f98d7012f38339';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  const total = response.data.totalHits;
  const pictures = response.data.hits;
  return { pictures, total };
};
