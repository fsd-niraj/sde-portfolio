const NAME_HEAD = "i'm niraj panchal"
const summary_content = "A software whiz with years of experience in Full Stack development. From crafting cool interfaces to coding powerful back - ends, I'm all about turning ideas into digital magic. Let's dive into the code together and create something awesome!";
let ifFirstOccMouse = false;

function mouseHoverGradient() {
  const body = document.body;
  const radGrdDiv = document.createElement('div');
  radGrdDiv.id = 'gradient_bg_screen';
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const gradientValue = `radial-gradient(400px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 90%)`;
    radGrdDiv.style.background = gradientValue;
  });
  return body.appendChild(radGrdDiv)
}

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
  // mouseHoverGradient()
  dynamicBgText();
  animateProfileImg()
  scrollSections()
  aboutSecOpacity()
  glitchAnimation('name_head', 'h1', NAME_HEAD);
  typewritterAnimation('home_summary', summary_content, 10);
  setTimeout(function () {
    hideNavbar();
    ifFirstOccMouse = true;
  }, 5000);
});