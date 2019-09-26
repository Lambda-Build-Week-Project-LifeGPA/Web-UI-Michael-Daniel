// // Team Carosel
// let i = 0;
// let profiles = [];
// const time = 5000;

// const sam_profile = {
//   image: "img/team/sam_image.png",
//   github: "https://github.com/sam-malanchuk"
// };

// const mysti_profile = {
//   image: "img/team/mysti_image.png",
//   github: "https://github.com/MystiDyse"
// };

// const andy_profile = {
//   image: "img/team/andy_image.png",
//   github: "https://github.com/Ariuka11"
// };

// const austin_profile = {
//   image: "img/team/austin_image.png",
//   github: "https://github.com/AustinKelsay"
// };

// const michaeld_profile = {
//   image: "img/team/michaeld_image.png",
//   github: "https://github.com/jess-daniel"
// };

// profiles[0] = sam_profile;
// profiles[1] = mysti_profile;
// profiles[2] = andy_profile;
// profiles[3] = austin_profile;
// profiles[4] = michaeld_profile;

// function updateTeam() {
//   document.slide.src = profiles[i].image;
//   document.getElementById("github").href = profiles[i].github;

//   if (i < profiles.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   setTimeout("updateTeam()", time);
// }

// function sticky() {
//   // Get the navbar
//   var navbar = document.getElementById("navbar");

//   // Get the offset position of the navbar
//   var sticky = navbar.offsetTop;

//   // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   function myFunction() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }
//   myFunction();
// }


// window.onload = updateTeam;
// window.onscroll = sticky;
