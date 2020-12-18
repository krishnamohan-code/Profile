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
var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}