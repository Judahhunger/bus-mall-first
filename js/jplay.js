'use strick';
// array to store all img instances

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

//create instances of imgs
new PicturesHere('img/bag.jpg', 'bag');
new PicturesHere('img/banana.jpg', 'banana');
new PicturesHere('img/bathroom.jpg', 'bathroom');
new PicturesHere('img/boots.jpg', 'boots');
new PicturesHere('img/breakfast.jpg', 'breakfast');
new PicturesHere('img/bubblegum.jpg', 'bubblegum');
new PicturesHere('img/chair.jpg', 'chair');
new PicturesHere('img/cthulhu.jpg', 'cthulhu');

//access the img from DOM (store in var)
var imgEL = document.getElementById('first-pic');

//event listener on img


imgEL.src = PicturesHere.allPictures[randomINDX].filepath;


PicturesHere.prototype.displayImage = function(){

  var randomINDX = Math.floor(Math.random() * PicturesHere.allPictures.length);
  if (!this.imgUsed[randomINDX]){
   
    this.imgUsed = true;
    this.clicked++;
    if (this.clicked === PicturesHere.allPictures){
      this.clicked = 0;
      this.imgUsed = {};
    }
  } else {
    displayImage();
  }
  
}
function makeAllPictures(){
  for(var i in PicturesHere.allPictures){
    PicturesHere.allPictures[i].render();
  }

 makeAllPictures();


// imgEL.addEventListener('click', randomIMG);
//invoke the callback on page load to show random img.

// Randomly put on 3 imgs that should not repeat
// track how many times img were clicked on
// track over all clicks
// removeEventListener.