
export default function () {
  const menuButton = document.querySelector('.header__menu');
  const menuList = document.querySelector('.header__list');
  menuButton.addEventListener('click', () => {
    menuList.classList.toggle('header__list_visible');
  });
}
