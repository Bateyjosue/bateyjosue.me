const showMenu = document.querySelector('#show-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('ul.mobile-menu');
const al = document.querySelectorAll('section');
const menuList = document.querySelectorAll('ul.mobile-menu li');

showMenu.addEventListener('click', () => {
  menu.style.visibility = 'visible';
  al.forEach((el) => {
    el.classList.add('blur');
    el.style.backgroundColor = '#505f79';
  });
});

closeMenu.addEventListener('click', () => {
  menu.style.visibility = 'hidden';
});

menuList.forEach((el) => {
  el.addEventListener('click', () => {
    menu.style.visibility = 'hidden';
    al.forEach((el) => {
      el.classList.remove('blur');
      el.style.backgroundColor = 'transparent';
    });
  });
});