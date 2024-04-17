const NAME_HEAD = "i'm niraj panchal"
const summary_content = "A software whiz with years of experience in Full Stack development. From crafting cool interfaces to coding powerful back - ends, I'm all about turning ideas into digital magic. Let's dive into the code together and create something awesome!";
let ifFirstOccMouse = false;

function nameGlitchEffect() {
  const name_head = document.querySelectorAll("#name_head")
  name_head.forEach((item, index) => {
    if (item.tagName === "MARK") {
      item.textContent = NAME_HEAD
    }
    if (item.tagName === "H1") {
      item.setAttribute("data-text", NAME_HEAD)
    }
  });
}

function animateProfileImg() {
  const hero_img_ctr = document.getElementById("hero_img_ctr")
  const about_content = document.getElementById("about_content");
  window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
      hero_img_ctr?.classList.add("animate-right");
      hero_img_ctr?.classList.remove("animate-left");
      about_content?.classList.add("about_content_fade-in");
      about_content?.classList.remove("about_content_fade-out");
    } else {
      about_content?.classList.add("about_content_fade-out");
      about_content?.classList.remove("about_content_fade-in");
      hero_img_ctr?.classList.add("animate-left");
      hero_img_ctr?.classList.remove("animate-right")
    }
  });
}

// function scrollSections() {
//   let currentSectionIndex = 0;
//   let sections = document.querySelectorAll('section');

//   function scrollToNextSection(event) {
//     let delta = Math.sign(event.deltaY);
//     let nextSectionIndex = currentSectionIndex + delta;

//     if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
//       let nextSection = sections[nextSectionIndex];
//       let scrollToY = nextSection.offsetTop;

//       window.scrollTo({
//         top: scrollToY,
//         behavior: 'smooth'
//       });

//       sections[currentSectionIndex].classList.remove('visible');
//       nextSection.classList.add('visible');

//       currentSectionIndex = nextSectionIndex;
//     }
//   }

//   window.addEventListener('wheel', scrollToNextSection);
// };

function scrollSections() {
  let currentSectionIndex = 0;
  let sections = document.querySelectorAll('section');

  function scrollToNextSection(event) {
    let delta = Math.sign(event.deltaY);
    let nextSectionIndex = currentSectionIndex + delta;

    if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
      let nextSection = sections[nextSectionIndex];
      let scrollToY = nextSection.offsetTop;

      // Check if the next section exceeds viewport height
      if (nextSection.scrollHeight > window.innerHeight) {
        // If it exceeds, scroll to the bottom first
        scrollToY = nextSection.offsetTop + nextSection.scrollHeight - window.innerHeight;
      }

      window.scrollTo({
        top: scrollToY,
        behavior: 'smooth'
      });

      sections[currentSectionIndex].classList.remove('visible');
      nextSection.classList.add('visible');

      currentSectionIndex = nextSectionIndex;
    }
  }

  window.addEventListener('wheel', scrollToNextSection);
}

function typewritterAnimation(id, text, speed) {
  let textElement = document.getElementById(id);
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}

function glitchAnimation(targetId, tagName, textContent) {
  const target = document.getElementById(targetId);

  const parentElement = document.createElement(tagName);
  parentElement.classList.add("intro__text", "user-select-none")
  parentElement.style.transform = "none";
  parentElement.style.opacity = "1"
  parentElement.setAttribute('data-text', textContent);

  const childElement = document.createElement('mark');
  childElement.classList.add("mark");
  childElement.textContent = textContent;

  parentElement.appendChild(childElement);

  target?.parentNode?.replaceChild(parentElement, target);
}

function aboutSecOpacity() {
  const allCards = document.querySelectorAll("#about__card");

  allCards.forEach((card, i) => {
    card.addEventListener("mouseover", () => {
      allCards.forEach((otherCard, j) => {
        if (i !== j) {
          otherCard.classList.add("opacity-25");
        } else {
          otherCard.classList.remove("opacity-25");
        }
      });
    });

    card.addEventListener("mouseout", () => {
      allCards.forEach((otherCard) => {
        otherCard.classList.remove("opacity-25");
      });
    });
  });
}

function getUrlRoute() {
  return window.location.href.split("#")[1];
}

function dynamicBgText() {
  const textSpace = document.querySelector(".body_bg-text");
  switch (getUrlRoute()) {
    case "home":
      textSpace.textContent = "Home"
      break;
    case "education":
      textSpace.textContent = "Education"
      break;
    case "about":
      textSpace.textContent = "About"
      break;
    case "experience":
      textSpace.textContent = "Experience"
      break;
    default:
      textSpace.textContent = "Portfolio"
      break;
  }
}

function hideNavbar() {
  document.getElementsByTagName("header")[0].classList.add('hidden');
}

function showNavbar() {
  document.getElementsByTagName("header")[0].classList.remove('hidden');
}

const experienceContent = [
  {
    company: "Expertrons",
    role: "Software Developer",
    companyDescription: "Expertrons is the world's largest AI Videobot Technology platform, offering advanced communication, hiring, and placement solutions to businesses and educational institutions, along with edtech and career guidance services for individuals.",
    techStack: ["MongoDB", "Express", "React", "Node"],
    date: "2020 - 2022",
    href: "https://www.expertrons.com/"
  },
  {
    company: "Legends",
    role: "POS Supervisor",
    companyDescription: "Legends is a global premium experiences company that specializes in delivering holistic solutions for sports and entertainment organizations and venues",
    techStack: ["POS", "Troubleshooting", "Networking"],
    date: "2023 - Present",
    href: "https://www.legends.net/"
  },
  {
    company: "Camp K12",
    role: "VFX Tutor Intern",
    companyDescription: "Mumbai-based JBCN Education has been a pioneering organization in the field of education for over 3 decades",
    techStack: ["Adobe Pr", "Adobe Ae", "DSLR"],
    date: "2019 - 2020",
    href: "https://campk12.com/us"
  }
];

const skills = [
  "Web",
  "Android",
  "iOS",
  "Desktop",
  "Database",
  "DevOps"
];

const educationSection = [
  {
    title: "BCA (Bachelor's in Computer Applications)",
    description: "BCA is an undergraduate degree program that provides students with a comprehensive understanding of computer applications and their practical implementation in various fields. It covers a wide range of topics including programming languages, database management, software development, networking, and web technologies. BCA equips students with the necessary skills and knowledge to pursue careers in software development, IT consulting, system analysis, and more.",
    skills: ["Java", "C/C++", "Python", "MySQL", "Oracle", "MongoDB"],
    date: "2017 - 2020"
  },
  {
    title: "Enterprise Software Development",
    description: "Enterprise software development focuses on creating software applications tailored to meet the specific needs and requirements of large organizations or enterprises. It involves the development of complex, scalable, and mission-critical software solutions that integrate with existing systems and processes within an enterprise. Enterprise software developers typically work on projects such as customer relationship management (CRM), enterprise resource planning (ERP), supply chain management (SCM), and business intelligence (BI) systems.",
    skills: ["RESTful", "APIs", "SOAP", "Git"],
    date: "2017 - 2020"
  },
  {
    title: "Web Development",
    description: "Web development encompasses the process of building and maintaining websites and web applications. It involves various aspects such as web design, front-end development, back-end development, and web server configuration. Web developers use programming languages such as HTML, CSS, and JavaScript for front-end development, and languages like PHP, Python, or Node.js for back-end development. Web development also includes tasks such as database integration, security implementation, and optimization for performance and user experience",
    skills: ["HTML", "CSS", "Javascript", "Adobe suite"],
    date: "2017 - 2020"
  },
];

const projectContent = [
  {
    title: "Cash Mate",
    description: "Architected a comprehensive full-stack web application named 'POStify,' proficiently equipped to handle rapid order processing, secure payment transactions, workforce management, inventory control, and an array of essential business functionalities.",
    href: "https://github.com/fsd-niraj/cashMate",
    platform: ["Web"],
    createdAt: "Personal"
  },
  {
    title: "NFT App",
    description: "A mobile app for browsing and checking details on NFTs",
    href: "https://github.com/fsd-niraj/nft_app",
    platform: ["Mobile", "Android", "iOS"],
    createdAt: "Personal"
  },
  {
    title: "Android Map Marker",
    description: "Description for Project 3",
    href: "https://github.com/fsd-niraj/Android-Map-Marker",
    platform: ["Android"],
    createdAt: "Humber ESDV"
  },
  {
    title: "Mars Image Viewer App",
    description: "An iOS app to view Mars Images with filtered Rovers & Date",
    href: "https://github.com/fsd-niraj/mars-image-viewer",
    platform: ["iOS"],
    createdAt: "Humber ESDV"
  },
  {
    title: "Quis App",
    description: "An iOS app to view Mars Images with filtered Rovers & Date",
    href: "https://github.com/fsd-niraj/QuizApp",
    platform: ["iOS"],
    createdAt: "Humber ESDV"
  },
  {
    title: "Todo App",
    description: "An iOS ToDo app to mark down your daily checklist.",
    href: "https://github.com/fsd-niraj/ToDo-App",
    platform: ["iOS"],
    createdAt: "Humber ESDV"
  }
]

function loadContent(list = []) {
  const allCards = document.getElementById("all_cards")

  list.forEach((experience) => {
    const link = document.createElement("a");
    link.href = experience.href;
    link.target = "_blank";
    link.style.textDecoration = "none"
    link.style.color = "inherit"
    const aboutCard = document.createElement("div");
    aboutCard.classList.add("about__card", "card__bg-anim", "row");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("col-md-3", "exp_date");
    dateDiv.textContent = experience.date;

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("col");
    infoDiv.innerHTML = `
      <h4 class="about__card-title">${experience.role} · ${experience.company}</h4>
      <div class="my-3">${experience.companyDescription}</div>
    `;

    const techStackDiv = document.createElement("div");
    techStackDiv.classList.add("row", "gap-3");
    experience.techStack.forEach((tech) => {
      const techDiv = document.createElement("div");
      techDiv.classList.add("col", "chips");
      techDiv.textContent = tech;
      techStackDiv.appendChild(techDiv);
    });

    aboutCard.appendChild(dateDiv);
    aboutCard.appendChild(infoDiv);
    aboutCard.appendChild(techStackDiv);
    link.appendChild(aboutCard);

    allCards.appendChild(link);
  });
}

function loadSkills(list = []) {
  const about_skill = document.querySelectorAll("#about_skill");
  about_skill.forEach((parent) => {
    const ul = document.createElement("ul");
    list.forEach((skill) => {
      const listItem = document.createElement("li");
      listItem.classList.add("code");
      listItem.textContent = skill;

      ul.appendChild(listItem)

      parent.appendChild(ul);
    });
  })
}

function loadEduSection(list = []) {
  const edu__section = document.getElementById('edu__section-wrapper');
  list.forEach((card) => {
    const eduCard = document.createElement("div");
    eduCard.classList.add("edu__section-card")
    const h4 = document.createElement("h4");
    h4.classList.add("edu_card-title")
    const span = document.createElement("span");
    const descDiv = document.createElement("div");
    const skillDiv = document.createElement("div");
    h4.textContent = card.title
    span.textContent = card.date
    h4.appendChild(span)
    descDiv.textContent = card.description;
    skillDiv.classList.add("my-2", "row", "gap-2")
    card.skills.forEach((s) => {
      const chip = document.createElement("div");
      chip.classList.add("chips", "col");
      chip.textContent = s;
      skillDiv.appendChild(chip)
    })

    eduCard.appendChild(h4)
    eduCard.appendChild(descDiv)
    if (card.skills) {
      eduCard.appendChild(skillDiv)
    }

    edu__section.appendChild(eduCard);
  })
}

function projectSectionContent(list = []) {
  const tableBody = document.getElementById('table-body');

  list.forEach(project => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.classList.add("project_title")
    titleCell.textContent = project.title;
    row.appendChild(titleCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = project.createdAt;
    row.appendChild(descriptionCell);
    const platFormList = document.createElement('ul');
    project.platform.forEach((d) => {
      console.log(d)
      const platformCell = document.createElement('td');
      console.log(project.platform)
      platformCell.innerHTML = `<div class="chips" style="padding: 6px 10px">${d}</div>`;
      platFormList.appendChild(platformCell)
    })
    row.appendChild(platFormList);

    const linkCell = document.createElement('td');
    const link = document.createElement('a');
    link.textContent = project.href;
    link.href = project.href;
    link.target = "_blank";
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    tableBody.appendChild(row);
  });
}

window.addEventListener('popstate', function () {
  getUrlRoute();
  dynamicBgText();
});

document.addEventListener('mousemove', function (event) {
  let mouseY = event.clientY;
  let mouseX = event.clientX;

  if (ifFirstOccMouse) {
    if (mouseY <= 150 && mouseX >= window.innerWidth / 2) {
      showNavbar();
      document.getElementsByTagName("main")[0].style.opacity = ".2"
    } else {
      hideNavbar()
      document.getElementsByTagName("main")[0].style.opacity = "1"
    }
  }

});

document.addEventListener('DOMContentLoaded', function () {
  dynamicBgText();
  animateProfileImg()
  scrollSections()
  aboutSecOpacity()
  loadContent(experienceContent)
  loadSkills(skills)
  loadEduSection(educationSection)
  projectSectionContent(projectContent)
  glitchAnimation('name_head', 'h1', NAME_HEAD);
  typewritterAnimation('home_summary', summary_content, 10);
  setTimeout(function () {
    hideNavbar();
    ifFirstOccMouse = true;
  }, 5000);
});