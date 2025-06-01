/* change background color on hover on card */ 
const cards = document.querySelectorAll('.card');
const nav = document.getElementById("nav-bar");
const dropDown = document.querySelectorAll('.nav-drop');


const originalNavColor = getComputedStyle(nav).backgroundColor;
const originalBodyColor = getComputedStyle(document.body).backgroundColor;
const originalDropColor = "#ffffff";

const datasetColors = ["#F6E7E9", "#FDF1D9", "#DAF3FA", "#E1F0DA", "#E1E2E9"];
const solidColors = ["#d98d97", "#f7c143", "#4dc6eb", "#6db848", "#6f7596"];
const rgbaColors = [
  "rgba(217, 141, 151, 0.5)",
  "rgba(247, 193, 67, 0.5)",
  "rgba(77, 198, 235, 0.5)",
  "rgba(109, 184, 72, 0.5)",
  "rgba(111, 117, 150, 0.5)"
];

let activeCardIndex = null;
let clickAndHover = null;

cards.forEach((card, index) => {
  const color = card.dataset.color;

  card.addEventListener('click', () => {
    if (activeCardIndex === index) {
      // if same card clicked change back to original
      document.body.style.backgroundColor = originalBodyColor;
      nav.style.backgroundColor = originalNavColor;
      activeCardIndex = null;
      clickAndHover = null;
      dropDown.forEach(drop => {
        drop.style.backgroundColor = originalDropColor;
      });
    } else {
      // change color when new card clicked
      document.body.style.backgroundColor = color;
      nav.style.backgroundColor = rgbaColors[index];
      activeCardIndex = index;
      clickAndHover = index;
      dropDown.forEach(drop => {
        drop.style.backgroundColor = color;
      });
    }
  })

  // card.style.transition = 'box-shadow 0.5s ease-in-out';

  // on hover preview colors
  card.addEventListener('mouseenter', () => {
    document.body.style.backgroundColor = color;
    nav.style.backgroundColor = rgbaColors[index];
  });

  // on leave change back to original
  card.addEventListener('mouseleave', () => {
    nav.style.backgroundColor = originalNavColor;
    document.body.style.backgroundColor = originalBodyColor;

    if (activeCardIndex != null) {
      document.body.style.backgroundColor = originalBodyColor;
      nav.style.backgroundColor = originalNavColor;
      document.body.style.backgroundColor = datasetColors[activeCardIndex];
      nav.style.backgroundColor = rgbaColors[activeCardIndex];
    }
  });
});

// fade-in box
const fade_boxes = document.querySelectorAll('#fade-box')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100');
    }
  });
}, {
  threshold: 0.1
});

fade_boxes.forEach(box => observer.observe(box));