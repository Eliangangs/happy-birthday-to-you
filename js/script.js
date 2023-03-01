const startDate = new Date("2022-12-22T17:32:23");

function updateTimer() {
  const now = new Date();
  const timeDiff = now.getTime() - startDate.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  const timeString = days.toString().padStart(2, '0') + ' днів ' +
    hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

  document.getElementById("timer").innerHTML = timeString;
}

setInterval(updateTimer, 1000);


// function replaceBlocks() {
//   var imageBlock = document.getElementById("imageBlock");
//   var textBlock = document.getElementById("textBlock");

//   imageBlock.style.display = "none";
//   textBlock.style.display = "block";
// }

function replaceBlocks1() {
  var imageBlock = document.getElementById("img1");
  var textBlock = document.getElementById("box1");

  imageBlock.style.opacity = 0;
  textBlock.style.opacity = 1;
}
function replaceBlocks2() {
  var imageBlock = document.getElementById("img2");
  var textBlock = document.getElementById("box2");

  imageBlock.style.opacity = 0;
  textBlock.style.opacity = 1;
}
function replaceBlocks3() {
  var imageBlock = document.getElementById("img3");
  var textBlock = document.getElementById("box3");

  imageBlock.style.opacity = 0;
  textBlock.style.opacity = 1;
}
function replaceBlocks4() {
  var imageBlock = document.getElementById("img4");
  var textBlock = document.getElementById("box4");

  imageBlock.style.opacity = 0;
  textBlock.style.opacity = 1;
}
function replaceBlocks5() {
  var imageBlock = document.getElementById("img5");
  var textBlock = document.getElementById("box5");

  imageBlock.style.opacity = 0;
  textBlock.style.opacity = 1;
}
function replaceBlocks6() {
  var imageBlock = document.getElementById("img6");
  var textBlock = document.getElementById("box6");

  // imageBlock.style.display = "none";
  // textBlock.style.display = "block";
  imageBlock.style.opacity = 0;
  textBlock.style.opacity = 1;
}
