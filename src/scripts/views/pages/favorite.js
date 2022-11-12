import FavoriteRestaurantIdb from '../../data/favrest-idb';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Favorite = {
  async render() {
    return `
    <h1 class="restaurant-title">Favorite Restaurant</h1>
    <div id="restaurant-list" class="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Favorite;
