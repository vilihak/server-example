(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function l(s){async function c(){console.log("Moro täällä ollaan");try{const t=await fetch("https://api.chucknorris.io/jokes/random");if(console.log(t),!t.ok)throw new Error("Huono haku!!");const n=await t.json();console.log(n),console.log(n.value),document.querySelector(".show_joke").innerHTML=n.value}catch(t){console.log(t)}}console.log(s),s.addEventListener("click",()=>c())}function p(s){async function c(){console.log("Creating images on the fly!");try{const t=await fetch("catpics.json");if(!t.ok)throw new Error("Bad search!!");const n=await t.json(),e=document.querySelector("#cards");e.innerHTML="",console.log(n),n.forEach(o=>{console.log(`Name: ${o.name}`);const r=document.createElement("figure");e.appendChild(r);const a=document.createElement("img");a.src=o.address,a.alt=o.name,r.appendChild(a);const i=document.createElement("figcaption"),u=document.createTextNode(o.description);i.appendChild(u),r.appendChild(i)})}catch(t){console.log(t)}}console.log(s),s.addEventListener("click",()=>c())}function m(s){s.addEventListener("click",function(){fetch("http://localhost:3000/api/entries").then(c=>c.json()).then(c=>{const t=document.querySelector(".card-area");c.forEach(n=>{const e=document.createElement("div");e.className="card";const o=document.createElement("div");o.className="card-img";const r=document.createElement("img");r.src=n.address,r.width="136",r.alt="Gym-Cat",o.appendChild(r);const a=document.createElement("div");a.className="card-diary";const i=document.createElement("p");i.textContent=n.description,a.appendChild(i),e.appendChild(o),e.appendChild(a),t.appendChild(e)})}).catch(c=>console.error("Error:",c))})}document.querySelector("#app").innerHTML="Moi täällä ollaan";let d=document.querySelector(".chuck");console.log(d);l(d);l(document.querySelector(".toinen"));const f=document.querySelector(".pics");p(f);m(document.querySelector(".diary"));
