const cards = document.querySelectorAll('.card');
const nav = document.getElementById("nav-bar");
const dropdown = document.querySelectorAll('#nav-drop');
const navlist = document.getElementById("nav-list");

const originalNavColor = getComputedStyle(nav).backgroundColor; // dropdown will have same color
const originalBodyColor = getComputedStyle(document.body).backgroundColor;
const originalNavListColor = getComputedStyle(navlist).backgroundColor;

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

// handle event listeners from light mode
const eventHandlers = {
    clickHandler: [],
    mouseEnterHandler: [],
    mouseLeaveHandler: [],
};

function colorTransition() {
    cards.forEach((card, index) => {
        const color = card.dataset.color;

        const clickHandler = () => {
            if (activeCardIndex === index) {
                // if same card clicked change back to original
                document.body.style.backgroundColor = originalBodyColor;
                nav.style.backgroundColor = originalNavColor;
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
    })
}

colorTransition();

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