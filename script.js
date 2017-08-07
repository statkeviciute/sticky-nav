const header = document.querySelector('header');
const height = header.getBoundingClientRect();
const navigation = document.querySelector('nav');


window.addEventListener('scroll', function(e) {
  const totalScrolled = this.scrollY;
  const lost = document.querySelector('.lost');


  if (totalScrolled >= height.height ) {
    navigation.classList.add('stickyNav');
    lost.classList.add('visible')
  }else {
    navigation.classList.remove('stickyNav');
    lost.classList.remove('visible')
  }
});
