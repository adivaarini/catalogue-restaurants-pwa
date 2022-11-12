import RestaurantSource from '../../data/restsource';
import { createRestaurantItemTemplate } from '../template/template-creator';

const Homepage = {
  async render() {
    return `
    <div class="hero-header">
        <div class="text-hero">
            <h1>Temukan Restoran dan Menu Favoritmu disini ...</h1>
        </div>
    </div>
    <h2 class="restaurant-title" tabindex="0">Daftar Restoran</h2>
    <div class="restaurant-list" id="restaurant-list">
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Homepage;
