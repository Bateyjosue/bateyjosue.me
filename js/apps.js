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

const projectDetails = [
  {
    id: 1,
    name: 'YouTube Video Player Page Clone',
    description: "Its a clone of the official YouTube's Video Player Page",
    featuredImageUrl: 'images/youtude.png',
    technologies: ['Front-End', 'HTM', 'CSS'],
    liveVersion: 'https://bateyjosue.github.io/YouTubeVideoPlayerPage/',
    sourceURL: 'https://github.com/Bateyjosue/YouTubeVideoPlayerPage',
  },
  {
    id: 2,
    name: 'Awesome Books',
    description: "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.",
    featuredImageUrl: 'images/awesome-books.png',
    technologies: ['Front-End', 'HTM', 'CSS', 'Javascript'],
    liveVersion: 'https://bateyjosue.github.io/awesome-books/',
    sourceURL: 'https://github.com/Bateyjosue/awesome-books',
  },
  {
    id: 3,
    name: 'amani-fest',
    description: "Amani-fest is a project to design a platform for Amani Festival which is the annual festival where people get united to sing, dance, and proclaim peace. Take place in February every year in Goma Town/DRCongo. With this platform you will get all information about the Festival, and even book the ticket for the event.",
    featuredImageUrl: './images/amani.png',
    technologies: ['HTM', 'CSS', 'SASS', 'Javascript'],
    liveVersion: 'https://www.loom.com/share/223e4ec4006549b3a5341fa48c999096',
    sourceURL: 'https://github.com/Bateyjosue/bateyjosue.me',
  },
  {
    id: 4,
    name: 'Automated Mark Recording System',
    description: "The system is able to capture an image from a webcam that contains information which the Student Registration Number and the mark. The system is going to extract the text will be stored it in a database after then the user can get data and convert it in any format he wishes. The system actually supports excel, pdf, SVG, etcThis project is designed using Python and its Django framework.",
    featuredImageUrl: './images/captured.png',
    technologies: ['Python','OpenCV', 'HTM', 'CSS', 'Javascript','jquery', 'Bootstrap'],
    liveVersion: 'https://github.com/Bateyjosue/mark-recordingUsingOCR',
    sourceURL: 'https://github.com/Bateyjosue/mark-recordingUsingOCR',
  },
  {
    id: 5,
    name: 'fleet-management',
    description: "Fleet Management System A management system where you can easily manage vehicles",
    featuredImageUrl: './images/fleet-management.png',
    technologies: ['PHP', 'HTM', 'CSS', 'Bootstrap'],
    liveVersion: 'https://fleet-sys.herokuapp.com/',
    sourceURL: 'https://github.com/Bateyjosue/fleet-management',
  },
  {
    id: 6,
    name: 'Bakery Managment System',
    description: "Bakery Management System is a Desktop based application built with aims first eliminating the paper-based system intended to manage a Bakery company. With the objectives of helping the manager of the store to control and manage the store properly, for now, he is going to have control of products in stock, products purchased daily, remaining products in stock, real clients, as long as his staff.",
    featuredImageUrl: './images/bakery.png',
    technologies: ['Java', 'Swing', 'MySql', 'Xanpp','Jasper Report'],
    liveVersion: 'https://github.com/Bateyjosue/bakery',
    sourceURL: 'https://github.com/Bateyjosue/bakery',
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

const modalPopup = (index) => {
  modalDetails.innerHTML = `
    <div class="modal-image">
      <span class="modal-close-btn"><i class="bi bi-x-lg"></i></span>
      <img src="${projectDetails[index].featuredImageUrl}" alt="">
    </div>
    <div class="modal-body card-content">
      <h2 class="title">${projectDetails[index].name}</h2>
      <ul>
        ${projectDetails[index].technologies.map((lang) => `<li>${lang} </li>`).join('')}
      </ul>
      <p class="more">
      ${projectDetails[index].description}
      </p>
    </div>
    <div class="modal-button">
      <a href="${projectDetails[index].liveVersion}" class="button">See Live <i class="bi bi-arrow-up-right-circle"></i></a>
      <a href="${projectDetails[index].sourceURL}" class="button">See Source <i class="bi bi-github"></i></a>
    </div>
  `;

  const modalCloseBtn = document.querySelectorAll('#works .modal .modal-image .modal-close-btn');
  modalCloseBtn.forEach((el) => {
    el.addEventListener('click', () => {
      modalDetails.style.visibility = 'hidden';
      blurryGray.style.visibility = 'hidden';
    });
  });
};

detailsBtn.forEach((el) => {
  el.addEventListener('click', () => {
    modalDetails.style.visibility = 'visible';
    blurryGray.style.visibility = 'visible';
    const position = el.getAttribute('value');
    modalPopup(position - 1);
  });
});

const emailError = document.querySelector('.contact-form form ul li .email-error');
const form = document.querySelector('.contact-form form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.querySelector('.contact-form form ul li input[type="email"]').value;
  if (email === email.toLowerCase()) {
    emailError.innerText = '';
    emailError.style.display = 'none';
    form.submit();
  } else {
    emailError.style.display = 'flex';
    emailError.innerText = 'Please enter your email using lowercase!';
  }
});

let active = (element) => {
  if (element.classList === 'active') {
    element.classList.remove('active');
  }
  else {
    element.classList.add('active');
  }
}

// const navigation = document.querySelectorAll('.desk-menu li a');
// navigation.forEach((element) => {
//   element.addEventListener('click',(e) => {
//     if(element.innerText === e.target.innerHTML) {
//       element.setAttribute('aria-current', 'active')
//     }
//   });
// });
