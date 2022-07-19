let showMenu = document.querySelector('#show-menu');
let closeMenu = document.querySelector('#close-menu');
let menu = document.querySelector('ul.mobile-menu');
let al = document.querySelectorAll('section')
let menuList =  document.querySelectorAll('ul.mobile-menu li');

showMenu.addEventListener('click',()=>{
    menu.style.visibility = 'visible';
    al.forEach(el =>{
        el.classList.add('blur');
        el.style.backgroundColor='#505f79';
    })
});

closeMenu.addEventListener('click',()=>{
    menu.style.visibility = 'hidden';
});

menuList.forEach(el =>{
    el.addEventListener('click',()=>{
    menu.style.visibility = 'hidden';
    al.forEach(el =>{
        el.classList.remove('blur');
        el.style.backgroundColor='transparent';
    })
    })
});