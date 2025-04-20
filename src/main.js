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
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const inp = document.querySelector('.inp');

const form = document.querySelector('.form');
const loadMore = document.querySelector('.load-btn');

let queryVal = '';
let page = 1;
let totalPages;
let card;
let cardSize;

const submit = form.addEventListener('submit', function (event) {
  event.preventDefault();
  queryVal = inp.value.trim();
  page = 1;
  if (queryVal === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Search field cannot be empty.',
      position: 'topRight',
    });
    clearGallery();
    hideLoadMoreButton();
    form.reset();
    return;
  }

  hideLoadMoreButton();
  clearGallery();
  showLoader();

  getImagesByQuery(queryVal, page)
    .then(({ pictures, total }) => {
      if (pictures.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(pictures);
      showLoadMoreButton();

      // calculating pages
      const calculate = () => {
        return (totalPages = Math.floor(total / 15));
      };
      calculate();

      card = document.querySelector('.gallery-item');
      cardSize = card.getBoundingClientRect();

      if (totalPages === page || total <= 15) {
        iziToast.info({
          title: 'Oops',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
        hideLoadMoreButton();
        return;
      }
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
      form.reset();
    });
});

const loadBtn = loadMore.addEventListener('click', async () => {
  try {
    if (totalPages === page) {
      iziToast.info({
        title: 'Oops',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
      hideLoadMoreButton();
      return;
    }
    showLoader();
    const { pictures, total } = await fetchPosts();
    createGallery(pictures);
    window.scrollBy({
      top: cardSize.height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
      position: 'topRight',
    });
    console.log(error);
  } finally {
    hideLoader();
  }
});

async function fetchPosts() {
  page += 1;

  const response = await getImagesByQuery(queryVal, page);
  return response;
}
