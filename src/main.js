// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const inp = document.querySelector('.inp');

const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

const submit = form.addEventListener('submit', function (event) {
  event.preventDefault();
  const queryVal = inp.value.trim();
  if (queryVal === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty.',
      position: 'topRight',
    });
    clearGallery();
    form.reset();
    return;
  }
  //   initLightbox();
  clearGallery();
  showLoader();

  try {
    getImagesByQuery(queryVal);
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: `${error}`,
      position: 'topRight',
    });
  } finally {
    form.reset();
  }

  //   refreshLightbox();
});
// console.log(showLoader());
