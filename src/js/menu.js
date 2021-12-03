const menu = () => {
  const menu = document.querySelector('.mobile-menu')
  const $open = document.querySelector('.burger.--open');
  const $close = document.querySelector('.burger.--close');

  $open.addEventListener('click', () => {
    menu.classList.add('active');
  });
  $close.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}


export { menu };