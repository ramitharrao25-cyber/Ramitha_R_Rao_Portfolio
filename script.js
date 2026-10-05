const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
const themeBtn=document.getElementById("themeBtn");

menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  themeBtn.textContent=document.body.classList.contains("dark")?"○":"◐";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".section,.project,.skill-card,.credential-card").forEach(el=>observer.observe(el));
