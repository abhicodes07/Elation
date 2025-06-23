const cards = document.querySelectorAll('.card');
const nav = document.getElementById("nav-bar");
const dropdown = document.querySelectorAll('#nav-drop');
const navlist = document.getElementById("nav-list");

// light mode colors
const originalNavColor = getComputedStyle(nav).backgroundColor; // dropdown will have same color
const originalBodyColor = getComputedStyle(document.body).backgroundColor;
const originalNavListColor = getComputedStyle(navlist).backgroundColor;

// dark mode colors
const darkBodyColor = "#121212";
const darkNavColor = "rgba(41, 41, 41, 0.5)";

const datasetColors = ["#F6E7E9", "#FDF1D9", "#DAF3FA", "#E1F0DA", "#E1E2E9"];
const solidColors = ["#d98d97", "#f7c143", "#4dc6eb", "#6db848", "#6f7596"];
const rgbaColors = [
    "rgba(217, 141, 151, 0.5)",
    "rgba(247, 193, 67, 0.5)",
    "rgba(77, 198, 235, 0.5)",
    "rgba(109, 184, 72, 0.5)",
    "rgba(111, 117, 150, 0.5)"
];

// ============ DARK MODE ============
function toggleDarkMode() {
    const root = document.documentElement; // html
    const isDarkMode = root.classList.toggle('dark'); // adds or removes 'dark' class

    if (isDarkMode) {
        // reset changese when switching to dark mode
        setDarkModeColors();
    } else {
        // run light mode specific script when switching to light mode 
        colorTransitions();
    }

    // save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// load theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        setDarkModeColors();
    } else {
        document.documentElement.classList.remove('dark');
        colorTransitions();
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

function colorTransitions() {
    document.body.style.backgroundColor = originalBodyColor;
    nav.style.setProperty("--nav-color", originalNavColor);
    nav.style.setProperty("--nav-blur", '8px');
    navlist.style.setProperty("--nav-list-color", originalNavColor);
    navlist.style.setProperty("--nav-list-blur", "8px");
    dropdown.forEach(drop => {
        // drop.style.backgroundColor = originalNavColor;
        drop.style.setProperty("--nav-drop-color", originalNavColor);
    });

    cards.forEach((card, index) => {
        const color = card.dataset.color;

        const clickHandler = () => {
            if (activeCardIndex === index) {
                // if same card clicked change back to original
                document.body.style.backgroundColor = originalBodyColor;
                // nav.style.backgroundColor = originalNavColor;
                nav.style.setProperty("--nav-color", originalNavColor);
                navlist.style.setProperty("--nav-list-color", originalNavColor);

                dropdown.forEach(drop => {
                    // drop.style.backgroundColor = originalNavColor;
                    drop.style.setProperty("--nav-drop-color", originalNavColor);
                });
                activeCardIndex = null;
                clickAndHover = null;
            } else {
                // change color when new card clicked
                document.body.style.backgroundColor = color;
                nav.style.setProperty("--nav-color", rgbaColors[index]);
                navlist.style.setProperty("--nav-list-color", rgbaColors[index]);
                // nav.style.backgroundColor = rgbaColors[index];

                dropdown.forEach(drop => {
                    // drop.style.backgroundColor = rgbaColors[index];
                    drop.style.setProperty("--nav-drop-color", rgbaColors[index]);
                });
                activeCardIndex = index;
                clickAndHover = index;
            }
        };

        // on hover preview colors
        const mouseEnterHandler = () => {
            document.body.style.backgroundColor = color;
            // nav.style.backgroundColor = rgbaColors[index];
            nav.style.setProperty("--nav-color", rgbaColors[index]);
        };

        // on leave change back to original
        const mouseLeaveHandler = () => {
            // nav.style.backgroundColor = originalNavColor;
            nav.style.setProperty("--nav-color", originalNavColor);
            document.body.style.backgroundColor = originalBodyColor;

            if (activeCardIndex != null) {
                document.body.style.backgroundColor = originalBodyColor;
                // nav.style.backgroundColor = originalNavColor;
                nav.style.setProperty("--nav-color", originalNavColor);

                document.body.style.backgroundColor = datasetColors[activeCardIndex];
                // nav.style.backgroundColor = rgbaColors[activeCardIndex];
                nav.style.setProperty("--nav-color", rgbaColors[activeCardIndex]);

            }
        };

        // attach event listeners and store references
        card.addEventListener('click', clickHandler);
        card.addEventListener('mouseenter', mouseEnterHandler);
        card.addEventListener('mouseleave', mouseLeaveHandler);

        eventHandlers.clickHandler[index] = clickHandler;
        eventHandlers.mouseEnterHandler[index] = mouseEnterHandler;
        eventHandlers.mouseLeaveHandler[index] = mouseLeaveHandler;
    })
}

// reset light mode changes in dark mode
function setDarkModeColors() {
    document.body.style.backgroundColor = darkBodyColor;
    nav.style.setProperty("--nav-color", darkNavColor);
    nav.style.setProperty("--nav-blur", '24px');
    navlist.style.setProperty("--nav-list-color", darkNavColor);
    navlist.style.setProperty("--nav-list-blur", '24px');
    dropdown.forEach(drop => {
        // drop.style.backgroundColor = originalNavColor;
        drop.style.setProperty("--nav-drop-color", darkNavColor);
    });

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

// colorTransition();

// ============ HEIGHT RE-ADJUSTMENT FOR PSEUDO ELEMENT IN HEADER TO FIT NAV-BAR ============
function pseudoElementHeight() {
    const nav = document.querySelector(".nav__bar");
    const width = nav.offsetWidth + "px";
    const height = nav.offsetHeight + "px";
    nav.style.setProperty('--nav-width', width);
    nav.style.setProperty('--nav-height', height);
}

pseudoElementHeight();
window.addEventListener("resize", pseudoElementHeight);

// ============ SHOW MENU FOR MOBILE DEVICES ============
const showMenu = (toggleID, navID) => {
    const togglebtn = document.getElementById(toggleID)
    const navMenu = document.getElementById(navID)

    togglebtn.addEventListener('click', () => {
        // add show-menu css class to nav to display it
        navMenu.classList.toggle('show-menu')

        // add show-icon to show and hide the menu burgir
        togglebtn.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')