import RestaurantSource from '../../data/restsource';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/favorite-initiator';
import { createRestaurantDetailTemplate, createFormReview } from '../template/template-creator';
import inputReview from '../../utils/review-initiator';

const Detail = {
  async render() {
    return `
      <h1 class="restaurant-title">Detail About Restaurant</h1>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    restaurantContainer.innerHTML += createFormReview();
    inputReview.inputNewReview(url);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },

};

export default Detail;
