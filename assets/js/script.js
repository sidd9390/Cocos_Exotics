let scrollContainer = document.querySelector(".gallery");
let btnLeft = document.getElementById("btnleft");
let btnRight = document.getElementById("btnright");

let scrollContainer1 = document.querySelector(".gallery1");
let btnLeft1 = document.getElementById("btnleft1");
let btnRight1 = document.getElementById("btnright1");

scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
})
btnRight.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 280
})
btnLeft.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 280
})
scrollContainer1.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
    scrollContainer1.style.scrollBehavior ="auto";
})
btnRight1.addEventListener("click",()=>{
    scrollContainer1.style.scrollBehavior ="smooth";
    scrollContainer1.scrollLeft += 280
})
btnLeft1.addEventListener("click",()=>{
    scrollContainer1.style.scrollBehavior ="smooth";
    scrollContainer1.scrollLeft -= 280
})


function changeBg()
{
  var navbar = document.getElementById('navigation-bar');
  var scrollValue = window.scrollY;
  console.log(scrollValue);
  
  if(scrollValue < 300){
    navbar.classList.remove('bgcolornav');
  }
  else if(scrollValue > 300){
    navbar.classList.add('bgcolornav');
  }
  
}

window.addEventListener('scroll', changeBg);