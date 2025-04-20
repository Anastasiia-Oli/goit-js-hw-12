import axios from 'axios';
import iziToast from 'izitoast';
import { createGallery, hideLoader } from './render-functions';

const API_KEY = '49785323-b36a5eef0b3f98d7012f38339';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      const images = response.data.hits;
      //   console.log(images);
      createGallery(images);
      //   return images;
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: `${error}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
};
