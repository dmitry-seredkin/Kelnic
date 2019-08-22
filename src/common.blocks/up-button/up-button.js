
export default function () {
  const upButton = document.querySelector('.up-button');
  const appButton = document.querySelector('.app__button');

  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const windowMiddle = document.documentElement.clientHeight / 2 - 40;
    if (scrollHeight > 0) {
      appButton.classList.add('app__button_visible');
      appButton.style.top = `${window.pageYOffset + windowMiddle}px`;
    } else {
      appButton.classList.remove('app__button_visible');
    }
  });

  upButton.addEventListener('click', () => {
    let offset = window.pageYOffset;
    const interval = setInterval(() => {
      offset -= 20;
      window.scrollTo(0, offset);
      if (offset < 0) {
        clearInterval(interval);
      }
    }, 2);
  });
}
