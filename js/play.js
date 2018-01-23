'use strick';
// array to store all img instances
var placeHoldFor1;
var placeHoldFor2;
var placeHoldFor3;
//Make a constructor for img objects
function PicturesHere(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.shown = 0;
  this.clicked = 0;
  this.imgUsed = [];
  PicturesHere.allPictures.push(this);
}
PicturesHere.allPictures = [];

function makeImgDif(){
  randomIMG();
  placeHoldFor1 = PicturesHere.allPictures[randomIMG - 1];
  

}




var imgEL = document.getElementById('first-pic');
// var imgEl2 = document.getElementById('second-pic');
// var imgEl3 = document.getElementById('third-pic');
//event listener on img
imgEL.addEventListener('click', randomIMG);
// imgEl2.addEventListener('click', randomIMG);

// imgEl3.addEventListener('click', randomIMG);
// callback function for event listerner to randomly display img
function randomIMG(){
  // random number generator to return a number between 0- length of array. (PicturesHere.allPictures)
  var randomINDX = Math.floor(Math.random() * PicturesHere.allPictures.length + 1);
  imgEL.src = PicturesHere.allPictures[randomINDX].filepath;
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
//invoke the callback on page load to show random img.
makeImgDif()
randomIMG();
// Randomly put on 3 imgs that should not repeat
// track how many times img were clicked on
// track over all clicks
// removeEventListener.