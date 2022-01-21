const data = [
  {
    img: "./images/pexels-photo-220453.jpeg",
    name: "Mike",
    roll: "SEO",
    desc: "I am a SEO analyst as employee.",
  },
  {
    img: "./images/Portrait_5-1.jpg",
    name: "Alex",
    roll: "Developer",
    desc: "I am a Web Developer at webenetic doing three months of internship",
  },
  {
    img: "./images/images.jpg",
    name: "Angela",
    roll: "Market Executive",
    desc: "I am a Market Executive.",
  },
  {
    img: "./images/Portrait_3.jpg",
    name: "Smith",
    roll: "Senior HR",
    desc: "I am a Senior HR at Octamicro  for last three year's.",
  },
];

var img = document.getElementById("img");
var clientName = document.getElementById("name");
var roll = document.getElementById("roll");
var desc = document.getElementById("desc");

var prev = document.getElementById("prev");
var next = document.querySelector(".next");
var random = document.getElementById("random");

let currentItem = 0;

// initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  let item = data[person];
  img.src = item.img;
  clientName.textContent = item.name;
  roll.textContent = item.roll;
  desc.textContent = item.desc;
}

// next client
next.addEventListener("click", function () {
  currentItem++;
  if (currentItem === data.length) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// prev client
prev.addEventListener("click", function () {
  console.log(currentItem);
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  showPerson(currentItem);
});

// random
random.addEventListener("click", function () {
  showPerson(Math.floor(Math.random() * data.length));
});
