// Carousel Setup
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


// Mobile Navigation Menu Setup
var menu = document.querySelector(".hamburger");
var mobileNav = document.querySelector(".mobile-nav");

menu.addEventListener("click", function(){
  menu.classList.toggle("is-active");
  mobileNav.classList.toggle("is-active");
})

console.log();


// Page Animation Setup
const fadeInLeftElements = document.querySelectorAll('.fadeInLeft');
const fadeIndownElements = document.querySelectorAll('.fadeIndown');


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('showfadeInLeft')
      entry.target.classList.add('showfadeIndown')
    } else {
      // entry.target.classList.remove('showfadeInLeft')
      // entry.target.classList.remove('showfadeIndown')
    }
  })
});

fadeInLeftElements.forEach((el) => observer.observe(el));
fadeIndownElements.forEach((el) => observer.observe(el));