/* Resize navbar on scroll */
var navbar = document.querySelector(".navbar");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
};
/* nav toggler */
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("active");
}
navLink.forEach(n => n.addEventListener("click", linkAction));
/* scroll section */
const Section = Array.from(document.querySelectorAll('section[id]'));
function scrollActive() {
    const scrollY = window.scrollY;
    Section.forEach(curr => {
        const sectionHeight = curr.offsetHeight;
        const sectionTop = curr.offsetTop - 50;
        const sectionId = curr.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".links a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".links a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}
window.addEventListener('scroll', scrollActive);
/* Skills animation */
const skills_wrap = document.querySelector(".about-skills"),
    skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener('scroll', () => {
    skillsEffect(skills_wrap);
});
function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    return (window.innerHeight >= rect.top + el.offsetHeight);
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) return;
    skills_bar.forEach((skill) => {
        skill.style.width = skill.dataset.progress;
    });
}

/* portfolio item filter */
const FilterContainer = document.querySelector(".portfolio-filter");
const filterBtns = FilterContainer.children;
const totalFilterBtn = filterBtns.length;
const PortfolioItems = document.querySelectorAll(".portfolio-item");
const totalPortfoliosItems = PortfolioItems.length;
for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfoliosItems; k++) {
            console.log(filterValue, PortfolioItems[k].getAttribute('data-category'));
            if (filterValue === PortfolioItems[k].getAttribute('data-category')) {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            } else {
                PortfolioItems[k].classList.remove("show");
                PortfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                PortfolioItems[k].classList.remove("hide");
                PortfolioItems[k].classList.add("show");
            }
        }
    });
}
