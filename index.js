const header = document.querySelector('#header');
const headerTop = header.offsetTop;
const headerContainer = document.querySelector('.page-container');

function stickyNavigation() {
  if (window.scrollY >= headerTop) {
    headerContainer.style.paddingTop = header.offsetHeight + 'px';
    headerContainer.classList.add('fixed-nav');
  } else {
    headerContainer.style.paddingTop = 0;
    headerContainer.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);