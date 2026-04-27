import "./scss/main.scss";

import { Header } from "./js/Header";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

window.addEventListener('load',async()=>{

try {
    const { default: cssUrl } = await import('./scss/main.scss?url')
    
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = cssUrl
    document.head.appendChild(link)

    console.log('Поздний SCSS загружен:', cssUrl)
  } catch (err) {
    console.error('Ошибка загрузки позднего CSS:', err)
  }



new Header();

const swiper = new Swiper(".reviews__slider", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  navigation: {
    nextEl: ".reviews__slider-next",
    prevEl: ".reviews__slider-prev",
  },

  breakpoints: {
    // when window width is >= 720px
    720: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
})