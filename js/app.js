'use strick';
// array to store all img instances
PicturesHere.allPictures = [];
PicturesHere.TotalPicturesClicked = 0;
PicturesHere.allPictures.imgUsed = {};
//Make a constructor for img objects
function PicturesHere(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.shown = 0;
  this.clicked = 0;
  PicturesHere.allPictures.push(this);
}


//create instances of imgs
new PicturesHere('img/bag.jpg', 'bag');
new PicturesHere('img/banana.jpg', 'banana');
new PicturesHere('img/bathroom.jpg', 'bathroom');
new PicturesHere('img/boots.jpg', 'boots');
new PicturesHere('img/breakfast.jpg', 'breakfast');
new PicturesHere('img/bubblegum.jpg', 'bubblegum');
new PicturesHere('img/chair.jpg', 'chair');
new PicturesHere('img/cthulhu.jpg', 'cthulhu');
// new PicturesHere('img/dog-duck.jpg', 'duck');
// new PicturesHere('img/dragon.jpg', 'dragon');
// new PicturesHere('img/pen.jpg', 'pen');
// new PicturesHere('img/pet-sweep.jpg', 'pet-sweep');
// new PicturesHere('img/scissors.jpg', 'scissors');
// new PicturesHere('img/shark.jpg', 'shark');
// new PicturesHere('img/sweep.png', 'sweep');
// new PicturesHere('img/tauntaun.jpg', 'tauntaun');
// new PicturesHere('img/unicorn.jpg', 'unicorn');
// new PicturesHere('img/usb.gif', 'usb');
// new PicturesHere('img/water-can.jpg', 'water-can');
// new PicturesHere('img/wine-glass.jpg', 'wine-glass');

//access the img from DOM (store in var)
var imgEl = document.getElementById('first-pic');
var imgEl2 = document.getElementById('second-pic');
var imgEl3 = document.getElementById('third-pic');
//event listener on img
// imgEL.addEventListener('click', randomIMG);
// imgEl2.addEventListener('click', randomIMG);
// imgEl3.addEventListener('click', randomIMG);
// callback function for event listerner to randomly display img
// function displayImage(){

//   var num = Math.floor(Math.random() * (imagesArray.length));
//   if (!usedImages[num]){
//     document.canvas.src = imagesArray[num];
//     usedImages[num] = true;
//     usedImagesCount++;
//     if (usedImagesCount === imagesArray.length){
//       usedImagesCount = 0;
//       usedImages = {};
//     }
//   } else {
//     displayImage();
//   }

function randomIMG(){
  // random number generator to return a number between 0- length of array. (PicturesHere.allPictures)
  var pictureLeft = Math.floor(Math.random() * PicturesHere.allPictures.length);
  if (!PicturesHere.allPictures.usedImages[pictureLeft]){
    imgEl.src = PicturesHere.allPictures[pictureLeft].filepath;
    PicturesHere.allPictures.imgUsed[pictureLeft] = true;
    PicturesHere.allPictures.clicked++;
    if (PicturesHere.allPictures.clicked === PicturesHere.allPictures.length){
      PicturesHere.allPictures.clicked = 0;
      PicturesHere.allPictures.imgUsed = {};
    }
  }
  var pictureCenter = Math.floor(Math.random() * PicturesHere.allPictures.length);
  if (!PicturesHere.allPictures.usedImages[pictureCenter]){
    imgEl2.src = PicturesHere.allPictures[pictureCenter].filepath;
    PicturesHere.allPictures.imgUsed[pictureCenter] = true;
    PicturesHere.allPictures.clicked++;
    if (PicturesHere.allPictures.clicked === PicturesHere.allPictures.length){
      PicturesHere.allPictures.clicked = 0;
      PicturesHere.allPictures.imgUsed = {};
    }
}
  var pictureRight = Math.floor(Math.random() * PicturesHere.allPictures.length);
  if (!PicturesHere.allPictures.usedImages[pictureRight]){
    imgEl3.src = PicturesHere.allPictures[pictureRight].filepath;
    PicturesHere.allPictures.imgUsed[pictureRight] = true;
    PicturesHere.allPictures.clicked++;
    if (PicturesHere.allPictures.clicked === PicturesHere.allPictures.length){
      PicturesHere.allPictures.clicked = 0;
      PicturesHere.allPictures.imgUsed = {};
    }
    else{
      randomIMG();
    }
  }
}
//   var pictureCenter = Math.floor(Math.random() * PicturesHere.allPictures.length + 1);
//   var pictureRight = Math.floor(Math.random() * PicturesHere.allPictures.length + 1);


//   imgEl2.src = PicturesHere.allPictures[pictureCenter].filepath;
//   imgEl3.src = PicturesHere.allPictures[pictureRight].filepath;
//   PicturesHere.lastDisplayed[0] = imgEL;
//   PicturesHere.lastDisplayed[1] = imgEL;
//   PicturesHere.lastDisplayed[2] = imgEl3;
//  }
// }

//invoke the callback on page load to show random img.
randomIMG();
// Randomly put on 3 imgs that should not repeat
// track how many times img were clicked on
// track over all clicks
// removeEventListener.