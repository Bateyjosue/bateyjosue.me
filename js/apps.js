const showMenu = document.querySelector('#show-menu');
const closeMenu = document.querySelector('#close-menu');
const menu = document.querySelector('ul.mobile-menu');
const al = document.querySelectorAll('section');
// const alModal = document.querySelectorAll(' :not(#works .modal)');
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

const projectDetails = [
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'Javascript'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'Javascript'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'Javascript'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Java', 'HTM', 'CSS', 'Javascript', 'Spring Boot'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'React'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Django', 'HTM', 'CSS', 'React'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
];

const cardContainer = document.querySelector('#grid');

projectDetails.forEach((el) => {
  cardContainer.innerHTML += `
      <div class="card-container">
        <div class="card-image">
          <img src="${el.featuredImageUrl}" alt="gray Image" />
        </div>
        <div class="card-body">
          <div class="card-title">
            <h2>${el.name}</h2>
          </div>
          <div class="card-content">
            <ul>
                ${el.technologies.map((lang) => `<li>${lang} </li>`).join('')}
          </ul>
          </div>
          <div class="card-button">
            <button type="submit" class="button" name="project" value="${el.id}">See Project</button>
          </div>
        </div>
      </div>
  `;
});

const detailsBtn = document.querySelectorAll('#grid .card-container .card-button button');
const modalDetails = document.querySelector('#works .modal');
const blurryGray = document.querySelector('.blurry-gray');

detailsBtn.forEach((el) => {
  el.addEventListener('click', () => {
    modalDetails.style.visibility = 'visible';
    blurryGray.style.visibility = 'visible';
    const position = el.getAttribute('value');
    modalPopup(position - 1);
  });
});
