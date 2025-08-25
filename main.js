var typed = new Typed(".full-name", {
  strings: ["Nguyen Quang Tho"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(event, tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxTsC-myS7GkTBbeLP_Cl7pG0H27eFDV0FK0BUGsFQnU42si-fyA7Il_vF-m1BBRQDr/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      msg.innerHTML = "Message not sent!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      console.error("Error!", error.message);
    });
});

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-150px";
}

// Xử lý See More / See Less button
const seeMoreBtn = document.getElementById("seeMoreBtn");
const extraProjects = document.querySelector(".extra-projects");
let expanded = false;
seeMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  expanded = !expanded;
  extraProjects.classList.toggle("show", expanded);
  seeMoreBtn.textContent = expanded ? "See Less" : "See More";
});



