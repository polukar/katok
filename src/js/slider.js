import Swiper, { Navigation, Pagination } from 'swiper';
const slider = () => {
  Swiper.use([Navigation, Pagination]);
  const swiper = new Swiper('.main__slider', {
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
  });
}

export { slider };
