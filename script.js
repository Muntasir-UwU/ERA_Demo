const menu = document.querySelector(".menu");
const closebtn = document.querySelector(".closebtn");
const menulinks = document.querySelector(".menelik");
const hiddenelements = document.querySelectorAll(".box2");
const h5 = document.querySelectorAll(".h5");
const wh = document.querySelectorAll(".wh");
const robo = document.querySelectorAll(".robo");
const elect = document.querySelectorAll(".elect");
const img = document.querySelectorAll(".img, .img1");
const bout= document.querySelectorAll(".img, .img1");
const se= document.querySelectorAll(".h1");
const int= document.querySelectorAll(".int1,.int2");
const box= document.querySelectorAll(".box1");

menu.onclick = function() {
menulinks.style.transform = "translate(0,0)";
menulinks.style.position = "fixed";
}

closebtn.onclick = function() {
  menulinks.style.transform = "translate(-100%,0)";
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
    else{
     entry.target.classList.remove("show");
    }
  });
});
hiddenelements.forEach((el) => observer.observe(el));
h5.forEach((el) => observer.observe(el));
wh.forEach((el) => observer.observe(el));
robo.forEach((el) => observer.observe(el));
elect.forEach((el) => observer.observe(el));    
img.forEach((el) => observer.observe(el));  
se.forEach((el) => observer.observe(el));  
int.forEach((el) => observer.observe(el));  
box.forEach((el) => observer.observe(el)); 
