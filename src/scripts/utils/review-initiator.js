import RestaurantSource from '../data/restsource';
import { createReviewTemplate } from '../views/template/template-creator';

const inputReview = {
  inputNewReview(url) {
    const submitReview = document.querySelector('#submit-review');

    submitReview.addEventListener('click', async (event) => {
      const userReview = document.querySelector('#user-review').value;
      const textReview = document.querySelector('#text-review').value;

      event.preventDefault();
      const reviewValue = {
        id: url.id,
        name: userReview,
        review: textReview,
      };

      const response = await RestaurantSource.inputNewReview(reviewValue);
      const content = document.querySelector('#content-review');
      content.innerHTML = ' ';
      content.innerHTML = createReviewTemplate(response.customerReviews);
    });
  },
};

export default inputReview;
