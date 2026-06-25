/*=========================================
 DEEN OFFICIAL WEBSITE
 MODULE 04 PART B
 PREMIUM SCROLL REVEAL ENGINE
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

const elements = document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom,.rotate"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15,

rootMargin:"0px 0px -60px 0px"

});

elements.forEach(el=>observer.observe(el));

});
