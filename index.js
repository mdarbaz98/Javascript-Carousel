const data = [
  {
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Mike",
    roll: "SEO",
    desc: "I am a SEO analyst as employee.",
  },
  {
    img: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_5-1.jpg",
    name: "Alex",
    roll: "Developer",
    desc: "I am a Web Developer at webenetic doing three months of internship",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3tVi_44g0p5HaJu1_MsgdEJ32IpWkpIWQQ&usqp=CAU",
    name: "Angela",
    roll: "Market Executive",
    desc: "I am a Market Executive.",
  },
  {
    img: "https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_3.jpg",
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
