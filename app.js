var display=window.innerWidth;
console.log(display);

const $burger= document.querySelector(".burger");
const $navLinksContainer =document.querySelector(".nav-links-container");
const $navLinks=document.querySelectorAll(".nav-links-container li");

$burger.onclick= () =>{
    $navLinksContainer.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");
    // $burger.style.hover="blue";
       $navLinks.forEach((link,index)=>{
           if(link.style.animation)
           {
               link.style.animation="";
           }
           else
           {
            link.style.animation=`navLinksAnimation 0.2s ease forwards ${index/5 +0.5}s`;
            
            }
       });
};
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });