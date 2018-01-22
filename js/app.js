'use strick';
// array to store all img instances
PicturesHere.allPictures = [];
//Make a constructor for img objects
function PicturesHere(filepath, name){
  this.filepath = filepath;
  this.name = name;
  // this.shown = 0;
  // this.clicked = 0;
  PicturesHere.allPictures.push(this);
}

//create instances of imgs
new PicturesHere('../img/bag.jpg', 'bag');
new PicturesHere('../img/banana.jpg', 'banana');
new PicturesHere('../img/bathroom.jpg', 'bathroom');
new PicturesHere('../img/boots.jpg', 'boots');
new PicturesHere('../img/breakfast.jpg', 'breakfast');
new PicturesHere('../img/bubblegum.jpg', 'bubblegum');
new PicturesHere('../img/chair.jpg', 'chair');
new PicturesHere('../img/cthulhu.jpg', 'cthulhu');
new PicturesHere('../img/dog-duck.jpg', 'duck');
new PicturesHere('../img/dragon.jpg', 'dragon');
new PicturesHere('../img/pen.jpg', 'pen');
new PicturesHere('../img/pet-sweep.jpg', 'pet-sweep');
new PicturesHere('../img/scissors.jpg', 'scissors');
new PicturesHere('../img/shark.jpg', 'shark');
new PicturesHere('../img/sweep.png', 'sweep');
new PicturesHere('../img/tauntaun.jpg', 'tauntaun');
new PicturesHere('../img/unicorn.jpg', 'unicorn');
new PicturesHere('../img/usb.gif', 'usb');
new PicturesHere('../img/water-can.jpg', 'water-can');
new PicturesHere('../img/wine-glass.jpg', 'wine-glass');

//access the img from DOM (store in var)
var imgEL = document.getElementById('first-pic');
//event listener on img
imgEL.addEventListener('click', randomIMG);
// callback function for event listerner to randomly display img
function randomIMG(){
// random number generator to return a number between 0- length of array. (PicturesHere.allPictures)
  var randomINDX = Math.floor(Math.random() * PicturesHere.allPictures.length);

  imgEL.src = PicturesHere.allPictures[randomINDX].filepath;

}
//invoke the callback on page load to show random img.
randomIMG();
// Randomly put on 3 imgs that should not repeat
// track how many times img were clicked on
// track over all clicks
// removeEventListener.