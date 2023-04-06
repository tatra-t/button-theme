"use strict";
let background = document.querySelector(".backgroundOff");
let button = document.querySelector("button");
let timeOnOff = document.querySelector(".timeOnOff");

if (localStorage.getItem("timeOff") !== null) {
  button.textContent = "TURN OFF";
    let time = localStorage.getItem("timeOff");
    timeOnOff.innerHTML = `Last turn off: ${formatDate(time)} `;
  timeOnOff.style.color = "#0d2e2e";
  
}
if (localStorage.getItem("timeOn") !== null) {
    button.textContent = "TURN ON";
    let time = localStorage.getItem("timeOn");
    timeOnOff.innerHTML = `Last turn on: ${formatDate(time)} `;
  timeOnOff.style.color = "#68ffde";

}

button.addEventListener("click", () => {
  if (button.textContent === "TURN OFF") {
    button.textContent = "TURN ON";
    localStorage.setItem("timeOn", new Date());
    localStorage.removeItem("timeOff");
    let time = localStorage.getItem("timeOn");
    timeOnOff.innerHTML = `Last turn on: ${formatDate(time)} `;
    timeOnOff.style.color = "#68ffde";
  } else {
    button.textContent = "TURN OFF";
    localStorage.setItem("timeOff", new Date());
    localStorage.removeItem("timeOn");
    let time = localStorage.getItem("timeOff");
    timeOnOff.innerHTML = `Last turn off: ${formatDate(time)} `;
    timeOnOff.style.color = "#0d2e2e";
  }
  button.classList.toggle("btnOff");
  button.classList.toggle("btnOn");
  background.classList.toggle("backgroundOff");
  background.classList.toggle("backgroundOn");
});
function formatDate(time) {
  let DD = new Date(time).getDate();
   if (DD <10) { 
    DD = "0"+ DD;
  }
  let MO = new Date(time).getMonth() + 1;
  if (MO <10) { 
    MO = "0"+ MO;
  }
  let YYYY= new Date(time).getFullYear();
  let HH = new Date(time).getHours();
   if (HH <10) { 
    HH = "0"+ HH;
  }
  let MI = new Date(time).getMinutes();
   if (MI <10) { 
    MI = "0"+ MI;
  }
  let SS = new Date(time).getSeconds();
   if (SS <10) { 
    SS = "0"+ SS;
  }
  let timeEnd =DD + "-" + MO + "-" + YYYY + "  " + HH + ":" + MI + ":" + SS;
  console.log(timeEnd);
  return timeEnd;
}
