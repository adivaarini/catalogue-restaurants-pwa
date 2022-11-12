import CONFIG from '../../global/config';

const createCategorieTemplate = (categories) => {
  let categorieItem = '';
  categories.forEach((item) => {
    categorieItem += `<p class="categorie">${item.name}</p>`;
  });
  return categorieItem;
};

const createMenuTemplate = (menus) => {
  let menuItem = '';
  menus.forEach((item) => {
    menuItem += `<li>${item.name}</li>`;
  });
  return menuItem;
};

const createReviewTemplate = (reviews) => {
  let reviewItem = '';
  if (reviews === null) {
    reviewItem += '<h2>0 Review</h2>';
  } else {
    reviews.forEach((item) => {
      reviewItem += `
      <div class="review-item-restaurant">
        <div class="review-header">
          <h3>${item.name}</h3>
          <p>${item.date}</p>
        </div>
        <div class="content-review2">
          <p>${item.review}</p>
        </div>
      </div>
      `;
    });
  }
  return reviewItem;
};

const createFormReview = () => `
  <div class="review-form">
    <h2 class="review-title">Add Review</h2>
    <label for="user-review">Name</label>
    <input type="text" class="user-form-review" name="user-review" id="user-review" value="">
    <label for="text-review">Review</label>
    <textarea class="text-form-review" name="text-review" id="text-review" value=""></textarea>
    <button type="button" class="submit-review" id="submit-review">Submit</button>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="content" onclick="window.location.href='/#/detail/${restaurant.id}'">
    <img src="${CONFIG.BASE_SMALL_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.title}" tabindex= "0">
    <div class="desc-content">
            <p class="rating-restaurant" tabindex="0"><i class="fas fa-star"></i>${restaurant.rating}</p>
            <p class="city-restaurant" tabindex="0"><i class="fas fa-map-marker-alt"></i> ${restaurant.city}</p>
        <h1 tabindex="0">${restaurant.name}</h1>
        <p class="description-restaurant" tabindex= "0">${restaurant.description}</p>
    </div>
  </div>`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="item-restaurant">
      <div class="header-item-restaurant">
          <img class="poster-item-restaurant" alt="${restaurant.name}"
              src="${CONFIG.BASE_MEDIUM_IMAGE_URL}${restaurant.pictureId}">
          <div class="rating-item-restaurant">
              <p class="value-rate-item-restaurant">⭐️${restaurant.rating}</p>
          </div>
      </div>
      <div class="content2-item-restaurant">
        <h3 class="name-restaurant">${restaurant.name}</h3>
        <div class="categorie-item-restaurant">
          ${createCategorieTemplate(restaurant.categories)}
        </div>
        <p class="address-restaurant"><i class="fas fa-city"></i> ${restaurant.city}</p>
        <p class="address-restaurant"><i class="fas fa-map-marked-alt"></i> ${restaurant.address}</p>
      </div>
    </div>
    <div class="description-item-restaurant">
      <h2 class="desc-title">Description</h2>
      <p class="desc-detail">${restaurant.description}</p>
    </div>
    <div class="menu-restaurant-item">
          <div class="menu2-item-restaurant">
            <h2 class="menu-title">Food</h2>
            <ul>
            ${createMenuTemplate(restaurant.menus.foods)}
            </ul>
          </div>
          <div class="menu2-item-restaurant">
            <h2 class="menu-title">Drinks</h2>
            <ul>
            ${createMenuTemplate(restaurant.menus.drinks)}
            </ul>
          </div>
    </div>
    <div class="review2-item-restaurant">
      <h2 class="review-title">Review</h2>
      <div id="content-review">${createReviewTemplate(restaurant.customerReviews)}</div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="far fa-heart"></i>
</button>
`;

const createLikedButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
  createFormReview,
};
