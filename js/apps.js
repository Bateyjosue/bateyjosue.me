/* eslint-disable no-plusplus */
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
    name: 'Moni share',
    description: 'Car renting app facilitating vehicle registration, location sharing, and real-time tracking',
    featuredImageUrl: 'images/moni-share.png',
    technologies: ['reactjs', 'TypScript', 'tailwindcss'],
    sourceURL: 'https://github.com/Bateyjosue/monishare',
    liveVersion: 'https://www.monishare-jb.netlify.app',
  },
  {
    id: 2,
    name: 'amani-fest',
    description: 'Amani-fest is a project to design a platform for Amani Festival which is the annual festival where people get united to sing, dance, and proclaim peace. Take place in February every year in Goma Town/DRCongo. With this platform you will get all information about the Festival, and even book the ticket for the event.',
    featuredImageUrl: './images/amani.png',
    technologies: ['HTM', 'CSS', 'SASS', 'Javascript'],
    liveVersion: 'https://amani-fest-jb.netlify.app/',
    sourceURL: 'https://github.com/Bateyjosue/amani-fest',
  },
  {
    id: 3,
    name: 'Notion Clone',
    description: 'note create with a / command to add a heading to the created text. just like in notion',
    featuredImageUrl: './images/notion.png',
    technologies: ['JavaScript', 'tailwindcss', 'HTM'],
    liveVersion: 'https://www.notion-clone-jb.netlify.app/',
    sourceURL: 'https://github.com/Bateyjosue/notion-clone',
  },
  {
    id: 4,
    name: 'The Meal',
    description: 'This is a web application that allows you to get information about various kinds of meals and recipes from all over the world. Using, MealzDB you can get information about various meals and recipes from all over the world',
    featuredImageUrl: './images/meals.png',
    technologies: ['JavaScript', 'webpack', 'HTM', 'CSS'],
    liveVersion: 'https://bateyjosue.github.io/The-Meal/',
    sourceURL: 'https://github.com/Bateyjosue/The-Meal',
  },
  {
    id: 5,
    name: 'mi_bugdet ',
    description: "It's a apps to help you out to manage your bugdet whereby you ca n Add a category and transactions that belongs to that category. ",
    featuredImageUrl: './images/budget.png',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Rspec', 'Postgresql'],
    liveVersion: 'https://www.loom.com/share/7b1e4eb40a95466a81104a080ffe2042',
    sourceURL: 'https://github.com/Bateyjosue/mi_bugdet',
  },
];

const cardContainer = document.querySelector('#grid');

projectDetails.forEach((el) => {
  cardContainer.innerHTML += `
      <div class="card-container">
        <div class="card-image">
          <img src="${el.featuredImageUrl}" alt="gray Image" width="400" height="180" />
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

const moreButtton = document.querySelector('#more');
const cards = document.querySelectorAll('#grid .card-container');

cards.forEach((card, index) => {
  if (index >= 3) {
    card.classList.add('hide-card');
  }
});

if (projectDetails.length < 3) {
  moreButtton.parentNode.style.display = 'none';
}

moreButtton.addEventListener('click', (event) => {
  if (event.target.innerText === 'Show Less') {
    event.target.innerText = 'Show More';
    cards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.add('hide-card');
      }
    });
  } else {
    event.target.innerText = 'Show Less';
    cards.forEach((card, index) => {
      if (index >= 3) {
        card.classList.remove('hide-card');
      }
    });
  }
});

// if (projectDetails.length < 3) {
//   moreButtton.parentNode.style.display = 'none';
// }

// moreButtton.addEventListener('click', (event) => {
//   if (event.target.innerText === 'Show More') {
//     event.target.innerText = 'Show Less';
//     cards.forEach((card, index) => {
//       if (index >= 3) {
//         card.classList.remove('hide-card');
//       }
//     });
//   } else {
//     event.target.innerText = 'Show More';
//     cards.forEach((card, index) => {
//       if (index >= 3) {
//         card.classList.add('hide-card');
//       }
//     });
//   }
// });

const detailsBtn = document.querySelectorAll('#grid .card-container .card-button button');
const modalDetails = document.querySelector('#works .modal');
const blurryGray = document.querySelector('.blurry-gray');

const modalPopup = (index) => {
  modalDetails.innerHTML = `
    <div class="modal-image">
      <span class="modal-close-btn"><i class="bi bi-x-lg"></i></span>
      <img src="${projectDetails[index].featuredImageUrl}" alt="" width="300" height="180">
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

// const active = (element) => {
//   if (element.classList === 'active') {
//     element.classList.remove('active');
//   } else {
//     element.classList.add('active');
//   }
// };

// const navigation = document.querySelectorAll('.desk-menu li a');
// navigation.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     if (element.innerText === e.target.innerHTML) {
//       element.setAttribute('aria-current', 'active');
//     }
//   });
// });
const typeWriterElement = document.querySelector('#typewriter');

const textArray = ['Holla', 'Hello', 'Salut', 'Jambo'];

function delWriter(text, i, cb) {
  if (i >= 0) {
    // eslint-disable-next-line no-plusplus
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    const rndBack = 10 + Math.random() * 100;
    setTimeout(() => {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb === 'function') {
    setTimeout(cb, 1000);
  }
}

function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    // eslint-disable-next-line no-plusplus
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    const rndTyping = 250 - Math.random() * 100;
    setTimeout(() => {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(() => {
      delWriter(text, i, cb);
    }, 1000);
  }
}

// the main writer function
function StartWriter(i) {
  if (typeof textArray[i] === 'undefined') {
    setTimeout(() => {
      StartWriter(0);
    }, 1000);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, () => {
      StartWriter(i + 1);
    });
  }
}
// wait one second then start the typewriter
setTimeout(() => StartWriter(0), 100);
