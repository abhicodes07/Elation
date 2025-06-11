/* change background color on hover on card */
const cards = document.querySelectorAll('.card');
const nav = document.getElementById("nav-bar");
const compact_nav = document.getElementById("compact-nav");
const dropDown = document.querySelectorAll('.nav-drop');

const originalNavColor = getComputedStyle(nav).backgroundColor;
const originalCompactNavColor = getComputedStyle(compact_nav).backgroundColor;
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

function rgbToHex(rgb) {
  const result = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!result) return null;

  const [, r, g, b] = result.map(Number);
  return (
    '#' +
    Number(r).toString(16).padStart(2, '0') +
    Number(g).toString(16).padStart(2, '0') +
    Number(b).toString(16).padStart(2, '0')
  );
}


// DARK MODE
function toggleDarkMode() {
  const root = document.documentElement; // html
  const isDarkMode = root.classList.toggle('dark'); // adds or removes 'dark' class

  if (isDarkMode) {
    // reset changese when switching to dark mode
    resetLightModeChanges();
  } else {
    // run light mode specific script when switching to light mode 
    executeLightModeScript();
  }

  // save theme preference
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// load theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    executeLightModeScript();
  }
});

let activeCardIndex = null;
let clickAndHover = null;

// handle event listeners from light mode
const eventHandlers = {
  clickHandler: [],
  mouseEnterHandler: [],
  mouseLeaveHandler: [],
};

// execute light mode specific scripts
function executeLightModeScript() {
  // stop execution in dark mode
  if (document.documentElement.classList.contains('dark')) return;

  cards.forEach((card, index) => {
    const color = card.dataset.color;

    const clickHandler = () => {
      if (activeCardIndex === index) {
        // if same card clicked change back to original
        document.body.style.backgroundColor = originalBodyColor;
        nav.style.backgroundColor = originalNavColor;
        compact_nav.style.backgroundColor = originalCompactNavColor;
        activeCardIndex = null;
        clickAndHover = null;
        dropDown.forEach(drop => {
          drop.style.backgroundColor = originalDropColor;
        });
      } else {
        // change color when new card clicked
        document.body.style.backgroundColor = color;
        nav.style.backgroundColor = rgbaColors[index];
        compact_nav.style.backgroundColor = rgbaColors[index];
        activeCardIndex = index;
        clickAndHover = index;
        dropDown.forEach(drop => {
          drop.style.backgroundColor = color;
        });
      }
    };

    // on hover preview colors
    const mouseEnterHandler = () => {
      document.body.style.backgroundColor = color;
      nav.style.backgroundColor = rgbaColors[index];
    };

    // on leave change back to original
    const mouseLeaveHandler = () => {
      nav.style.backgroundColor = originalNavColor;
      document.body.style.backgroundColor = originalBodyColor;

      if (activeCardIndex != null) {
        document.body.style.backgroundColor = originalBodyColor;
        nav.style.backgroundColor = originalNavColor;
        document.body.style.backgroundColor = datasetColors[activeCardIndex];
        nav.style.backgroundColor = rgbaColors[activeCardIndex];
      }
    };

    // attach event listeners and store references
    card.addEventListener('click', clickHandler);
    card.addEventListener('mouseenter', mouseEnterHandler);
    card.addEventListener('mouseleave', mouseLeaveHandler);

    eventHandlers.clickHandler[index] = clickHandler;
    eventHandlers.mouseEnterHandler[index] = mouseEnterHandler;
    eventHandlers.mouseLeaveHandler[index] = mouseLeaveHandler;
  });
}

// reset light mode changes in dark mode
function resetLightModeChanges() {
  document.body.removeAttribute('style');
  nav.removeAttribute('style');
  compact_nav.style.removeProperty('background-color');

  cards.forEach((card, index) => {
    if (eventHandlers.clickHandler[index]) { 
      card.removeEventListener('click', eventHandlers.clickHandler[index]);
    }
    if (eventHandlers.mouseEnterHandler[index]) { 
      card.removeEventListener('mouseenter', eventHandlers.mouseEnterHandler[index]);
    }
    if (eventHandlers.mouseLeaveHandler[index]) { 
      card.removeEventListener('mouseleave', eventHandlers.mouseLeaveHandler[index]);
    }
  });

  // clean up stores event listeners
  eventHandlers.clickHandler = [];
  eventHandlers.mouseEnterHandler = [];
  eventHandlers.mouseLeaveHandler = [];
}


// ============ Animations ============
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

// fade in and move up
const fade_elements = document.querySelectorAll('.fade-in');
const new_observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100');
      entry.target.classList.remove('opacity-0');
      entry.target.classList.remove('translate-y-5');
      entry.target.classList.add('translate-y-0');
      // Unobserve if you only want it to animate once
      // new_observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

fade_elements.forEach(el => new_observer.observe(el));

// fade left
const fade_left = document.querySelectorAll('.fade-left');
const left_observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100');
      entry.target.classList.remove('opacity-0');
      entry.target.classList.remove('translate-x-5');
      entry.target.classList.add('translate-x-0');
      // Unobserve if you only want it to animate once
      // new_observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

fade_left.forEach(el => left_observer.observe(el));

// fade right
const fade_right = document.querySelectorAll('.fade-right');
const right_observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100');
      entry.target.classList.remove('opacity-0');
      entry.target.classList.remove('-translate-x-5');
      entry.target.classList.add('-translate-x-0');
      // Unobserve if you only want it to animate once
      // new_observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

fade_right.forEach(el => right_observer.observe(el));