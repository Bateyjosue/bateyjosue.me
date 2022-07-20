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
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'Javascript'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'Javascript'],
    liveVersion: 'github.io/Bateyjosue/bateyjosue.me',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 6,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImageUrl: '../images/modal-img.png',
    technologies: ['Ruby_on_rails', 'HTM', 'CSS', 'Javascript'],
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
            <h2>${el.name}[${el.id}]</h2>
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
let projectID = 1;
const blurryGray = document.querySelector('.blurry-gray');

detailsBtn.forEach((el) => {
  el.addEventListener('click', () => {
    modalDetails.style.visibility = 'visible';
    blurryGray.style.visibility = 'visible';
    projectID = detailsBtn.value;
  });
});

modalDetails.innerHTML = `
  <div class="modal-image">
    <span class="modal-close-btn"><i class="bi bi-x-lg"></i></span>
    <img src="${projectDetails[0].featuredImageUrl}" alt="">
  </div>
  <div class="modal-body card-content">
    <h2 class="title">${projectDetails[0].name}[${projectID}]</h2>
    <ul>
      ${projectDetails[0].technologies.map((lang) => `<li>${lang} </li>`).join('')}
    </ul>
    <p class="more">
    ${projectDetails[0].description}
    </p>
  </div>
  <div class="modal-button">
    <a href="" class="button">See Live <i class="bi bi-arrow-up-right-circle"></i></a>
    <a href="" class="button">See Source <i class="bi bi-github"></i></a>
  </div>
`;
projectDetails.forEach((images) => {
  document.querySelectorAll('.modal .modal-image img').src = `'${images.featuredImageUrl}'`;
});

const modalCloseBtn = document.querySelector('#works .modal .modal-image .modal-close-btn');

modalCloseBtn.addEventListener('click', () => {
  modalDetails.style.visibility = 'hidden';
  blurryGray.style.visibility = 'hidden';
});

// projectID = 1;
// for (let i of projectDetails) {
//   if (projectID == i.id) {
//     console.log(i.id);
//     console.log(i.name);
//     console.log(i.description);
//     console.log(i.technologies);
//   }
// };