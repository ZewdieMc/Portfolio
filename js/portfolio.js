const body = document.querySelector('body');
const humberger = document.querySelector('#mobile-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');
const menuLinks = document.querySelectorAll('.menu-content a');

const toggleMobileMenu = () => menu.classList.toggle('hidden');

humberger.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect().y;
    if (rect < window.innerHeight - 200) {
      navLi.forEach((section) => section.classList.remove('active'));
      navLi[i].classList.add('active');
    }
  });
};
// store the projects' data in an array of objects
const projects = [
  {
    name: ['Tonic', 'Tonic'],
    images: ['./images/Snapshootmbl1.png', './images/Snapshootdsktp1.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s.',
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s.',
    ],
    technologies: ['html', 'css', 'JavaScript'],
    roles: [['CANOPY', 'CANOPY'], './images/Counter.png', ['Back End Dev', 'Back End Dev'], ['2015', '2015']],
    liveLink: 'Zewdiemc.github.io/Portfolio/',
    sourceLink: 'github.com/Zewdiemc/Portfolio',
  },
  {
    name: ['Multi-Post Stories', 'Multi-Post Stories'],
    images: ['./images/Snapshootmbl2.png', './images/Snapshootdsktp2.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s.',
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    ],
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript',
    ],
    roles: [['CANOPY', 'FACEBOOK'], './images/Counter.png', ['Back End Dev', 'Full Stack Dev'], ['2015', '2015']],
    liveLink: 'Zewdiemc.github.io/Portfolio/',
    sourceLink: 'github.com/Zewdiemc/Portfolio',
  },
  {
    name: ['Tonic', 'Facebook 360'],
    images: ['./images/Snapshootmbl3.png', './images/Snapshootdsktp3.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s.',
      'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    ],
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript',
    ],
    roles: [['CANOPY', 'FACEBOOK'], './images/Counter.png', ['Back End Dev', 'Full Stack Dev'], ['2015', '2015']],
    liveLink: 'Zewdiemc.github.io/Portfolio/',
    sourceLink: 'github.com/Zewdiemc/Portfolio',
  },
  {
    name: ['Multi-Post Stories', 'Uber Navigation'],
    images: ['./images/Snapshootmbl4.png', './images/Snapshootdsktp4.png'],
    description: [
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s.',
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    ],
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript',
    ],
    roles: [['CANOPY', 'Uber'], './images/Counter.png', ['Back End Dev', 'Lead Developer'], ['2015', '2018']],
    liveLink: 'https://Zewdiemc.github.io/Portfolio/',
    sourceLink: 'https://github.com/Zewdiemc/Portfolio',
  },
];

// cards section
const projectSection = document.querySelector('.works');
const projectCards = projects.map(
  (project, i) => `
<div class="card">
  <img class='snapshoot mobile' src='${project.images[0]}'alt='background Image'>
  <img class='snapshoot desktop' src='${project.images[1]}'alt='background Image'>
  <div class='left_block'>
    <div class="left_block_title">
    <h2>${project.name[0]}</h2>
    <div class='frame'>
    <div class="client mobile">${project.roles[0][0]}</div>
    <div class="client desktop">${project.roles[0][1]}</div>
    <img class="counter" src="${project.roles[1]}" alt="work role">
    <div class="role mobile">${project.roles[2][0]}</div>
    <div class="role desktop">${project.roles[2][1]}</div>
    <img class="counter" src="${project.roles[1]}" alt="work role">
    <div class="year mobile">${project.roles[3][0]}</div>
    <div class="year desktop">${project.roles[3][1]}</div>
  </div>
  <p class="description mobile">${project.description[0]}</p>
  <p class="description desktop">${project.description[1]}</p>
  <ul class="tags">
    <li>${project.technologies[0]}</li>
    <li class='desktop'>${project.technologies[1]}</li>
    <li class='mobile'>${projects[0].technologies[1]}</li>
    <li class='desktop'>${project.technologies[2]}</li>
    <li class='mobile'>${projects[0].technologies[2]}</li>
    <li class='desktop'>${project.technologies[3]}</li>
  </ul>
  <button data-target='${i}'class='action project-pop-btn'>See Project </button>
  </div>
</div>
  </div>
`,
);

// Dynamically add the cards to the DOM
for (let i = 0; i < projectCards.length; i += 1) {
  projectSection.innerHTML += projectCards[i];
}

// select the first card and remove the last li item from the ul
const lastTechnology = document.querySelector('.card:first-child .tags li:last-child');
if (lastTechnology.textContent === 'undefined') lastTechnology.remove();

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModal = () => {
  modal.classList.toggle('hide');
  overlay.classList.toggle('hide');
  body.style.overflow = 'auto';
};

const showModal = () => {
  modal.classList.toggle('hide');
  overlay.classList.toggle('hide');
  body.style.overflow = 'hidden';
};

function updateModalContent(id) {
  modal.innerHTML = `
  <div class='modal-header'>
    <h2 class='mobile'>${projects[id].name[0]}</h2>
    <h2 class='desktop'>${projects[id].name[0]}</h2>
    <a class='close-modal'>&times; </a>
  </div>
  <div class='modal-content'>
  <div class='frame'>
    <div class="client mobile">${projects[id].roles[0][0]}</div>
    <div class="client desktop">${projects[id].roles[0][1]}</div>
    <img class="counter" src="${projects[id].roles[1]}" alt="work role">
    <div class="role mobile">${projects[id].roles[2][0]}</div>
    <div class="role desktop">${projects[id].roles[2][1]}</div>
    <img class="counter" src="${projects[id].roles[1]}" alt="work role">
    <div class="year mobile">${projects[id].roles[3][0]}</div>
    <div class="year desktop">${projects[id].roles[3][1]}</div>
</div>
<div class='project-image-container mbl' style='background-image: url("${projects[id].images[0]}');'></div>
<div class='project-image-container dsktp' style='background-image: url("${projects[id].images[1]}");'></div>
<div class='description_wrapper'>
  <p class="description desktop">${projects[id].description[1]}</p>
  <p class="description mobile">${projects[id].description[0]}</p>
  <div class='tags-button_wrapper'>
      <ul class="tags">
       <li>HTML</li>
       <li>css</li>
       <li>JavaScript</li>
       <li class='desktop'>github</li>
       <li class='desktop'>ruby</li>
       <li class='desktop'>Bootstrap</li>
      </ul>
      <hr/  class='mobile'>
    <div class='live-source-container'>
      <a type='button'class='button live-link' href='https://${projects[id].liveLink}' target='_blank'>See Live <img src='./images/Icon-external-link.svg' alt='external link icon'></a>
      <a type='button'class='button source-link' href='https://${projects[id].sourceLink}' target='_blank'>See Source <img src='./images/Icon-github.svg' alt='github icon'></a>
    </div>
  </div>
</div>
</div>
`;
}
const projectDetailClickHandler = (projectId) => {
  updateModalContent(projectId);
  showModal();
  document.querySelector('.close-modal').addEventListener('click', closeModal);
};

const popupBtns = document.querySelectorAll('.project-pop-btn');
popupBtns.forEach((btn) => {
  const projectId = btn.getAttribute('data-target');
  btn.addEventListener('click', () => projectDetailClickHandler(projectId));
});

// close modal when clicked outside
overlay.addEventListener('click', closeModal);