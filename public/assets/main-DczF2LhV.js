import{f as c}from"./fetch-hDQBONsW.js";/* empty css              */const u=document.querySelector(".createuser");u.addEventListener("click",async n=>{n.preventDefault(),console.log("Nyt luodaan käyttäjä");const r="https://vilihak.northeurope.cloudapp.azure.com/api/users",o=document.querySelector(".create_user_form"),a={username:o.querySelector("input[name=username]").value,password:o.querySelector("input[name=password]").value,email:o.querySelector("input[name=email]").value},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)};try{const e=await c(r,t);console.log(e)}catch(e){console.error(e)}});const i=document.querySelector(".loginuser");i.addEventListener("click",async n=>{n.preventDefault(),console.log("Nyt logataan sisään");const r="https://vilihak.northeurope.cloudapp.azure.com/api/auth/login",o=document.querySelector(".login_form_navbar"),l={username:o.querySelector("input[name=username]").value,password:o.querySelector("input[name=password]").value},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};try{const t=await c(r,a);console.log(t);const e=t;console.log(e);const s=e==null?void 0:e.token;s?(localStorage.setItem("token",s),localStorage.setItem("username",e.user.username),console.log("loginResponse",`localStorage set with token value: ${s}`),alert("Login succesful!")):alert("Unauthorized: username or password incorrect!")}catch(t){console.error(t)}});const m=document.getElementById("logoutBtn");m.addEventListener("click",async n=>{n.preventDefault(),console.log("Nyt kirjaudutaan ulos"),localStorage.removeItem("token"),localStorage.removeItem("username")});
