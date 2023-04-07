"use strict";
let background = document.querySelector(".backgroundOff");
let button = document.querySelector("button");
let timeOnOff = document.querySelector(".timeOnOff");

function turnOff() {
  button.textContent = "TURN OFF";
  let time = localStorage.getItem("timeOff");
  timeOnOff.innerHTML = `Last turn off: ${formatDate(time)} `;
  timeOnOff.style.color = "#0d2e2e";
}
function turnOn() {
  button.textContent = "TURN ON";
  let time = localStorage.getItem("timeOn");
  timeOnOff.innerHTML = `Last turn on: ${formatDate(time)} `;
  timeOnOff.style.color = "#68ffde";
}

if (localStorage.getItem("timeOff") !== null) {
  turnOff();
}
if (localStorage.getItem("timeOn") !== null) {
  turnOn();
}

button.addEventListener("click", () => {
  if (button.textContent === "TURN OFF") {
    localStorage.setItem("timeOn", new Date());
    localStorage.removeItem("timeOff");
    turnOn();
  } else {
    localStorage.setItem("timeOff", new Date());
    localStorage.removeItem("timeOn");
    turnOff();
  }
  button.classList.toggle("btnOff");
  button.classList.toggle("btnOn");
  background.classList.toggle("backgroundOff");
  background.classList.toggle("backgroundOn");
});

function formatDate(time) {
  const date = new Date(time);
  let DD = date.getDate();
   if (DD <10) { 
    DD = "0"+ DD;
  }
  let MO = date.getMonth() + 1;
  if (MO <10) { 
    MO = "0"+ MO;
  }
  let YYYY= date.getFullYear();
  let HH = date.getHours();
   if (HH <10) { 
    HH = "0"+ HH;
  }
  let MI = date.getMinutes();
   if (MI <10) { 
    MI = "0"+ MI;
  }
  let SS = date.getSeconds();
   if (SS <10) { 
    SS = "0"+ SS;
  }
  let timeEnd =DD + "-" + MO + "-" + YYYY + "  " + HH + ":" + MI + ":" + SS;
  return timeEnd;
}
