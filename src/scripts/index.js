import 'regenerator-runtime';
import App from './views/app';
import swRegister from './utils/sw-register';
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const skipContent = document.querySelector('.skip-content');
  skipContent.addEventListener('click', (event) => {
    event.preventDefault();
    const mainContent = document.querySelector('main');
    mainContent.focus();
  });
});

const app = new App({
  button: document.querySelector('#menu-hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
