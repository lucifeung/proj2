// The midi notes of a scale
var notes = [ 60, 62, 64, 65, 67, 69, 71];
var osc;
let bg, bg1, bg2;

var space = 90;
var rSide = [];
var black = [];
var mid = [];
var lSide = [];
var osc = [];
var envo = [];

var rKee = ['A', null, null, 'F', null, null, null, 'K', null, null];
var blKee = ['W', 'E', null, 'T', 'Y', 'U', null, 'O', 'P', null, null];
var midKee = [null, 'S', null, null, 'G', 'H', null, null, 'L', null];
var lKee = [null, null, 'D', null, null, null, "J", null, null, ';'];

function preload() {
   bg = loadImage('assets/bg.png');
   bg1 = loadImage('assets/bg1.jpg');
   bg2 = loadImage('assets/bg2.jpg');

   snd3 = loadSound("sound/piano.mp3");
}


function setup() {
  createCanvas(1050, 591);

  cursor ('assets/cursor.png');


// function setup() {
//   createCanvas(space * 10, 500);

  for (var j = 0; j < 17; j++) {
    envo.push(new p5.Env());
    envo[j].setADSR(0.01, 0.05, 1, 0.1);
    envo[j].setRange(1, 0);
    osc.push(new p5.Oscillator());
    osc[j].amp(envo[j]);
  }

  for (var i = 0; i < 10; i++) {
    rSide.push(new rSideKey(i, space, rKee[i]));
    black.push(new BlackKey(i + 0.667, space, blKee[i]));
    mid.push(new MidKey(i, space, midKee[i]));
    lSide.push(new lSideKey(i, space, lKee[i]));
  }
}


function draw() {
  background(bg1);
  for (var i = 0; i < rSide.length; i++) {
    if (i === 0 || i === 3 || i === 7) {
      rSide[i].display();
    }
    if ((i !== 2) && (i !== 6) && (i !== 9) && (i !== 10)) {
      black[i].display();
    }
    if (i === 1 || i === 4 || i === 5 || i === 8) {
      mid[i].display();
    }
    if (i === 2 || i === 6 || i === 9) {
      lSide[i].display();
    }
  }
}


function mousePressed() {
  if (snd3.isPlaying()) {
    // .isPlaying() returns a boolean
    snd3.stop();
    // background(255, 0, 0);
  } else {
    snd3.play();
    // background(0, 255, 0);
  }
}


function keyPressed() {
  var root = 60;
  if (keyCode === 65) {
    rSide[0].red();
    osc[0].start();
    osc[0].freq(midiToFreq(root));
    envo[0].play();
  } else if (keyCode === 87) {
    black[0].red();
    osc[1].start();
    osc[1].freq(midiToFreq(root + 1));
    envo[1].play();
  } else if (keyCode === 83) {
    mid[1].red();
    osc[2].start();
    osc[2].freq(midiToFreq(root + 2));
    envo[2].play();
  } else if (keyCode === 69) {
    black[1].red();
    osc[3].start();
    osc[3].freq(midiToFreq(root + 3));
    envo[3].play();
  } else if (keyCode === 68) {
    lSide[2].red();
    osc[4].start();
    osc[4].freq(midiToFreq(root + 4));
    envo[4].play();
  } else if (keyCode === 70) {
    rSide[3].red();
    osc[5].start();
    osc[5].freq(midiToFreq(root + 5));
    envo[5].play();
  } else if (keyCode === 84) {
    black[3].red();
    osc[6].start();
    osc[6].freq(midiToFreq(root + 6));
    envo[6].play();
  } else if (keyCode === 71) {
    mid[4].red();
    osc[7].start();
    osc[7].freq(midiToFreq(root + 7));
    envo[7].play();
  } else if (keyCode === 89) {
    black[4].red();
    osc[8].start();
    osc[8].freq(midiToFreq(root + 8));
    envo[8].play();
  } else if (keyCode === 72) {
    mid[5].red();
    osc[9].start();
    osc[9].freq(midiToFreq(root + 9));
    envo[9].play();
  } else if (keyCode === 85) {
    black[5].red();
    osc[10].start();
    osc[10].freq(midiToFreq(root + 10));
    envo[10].play();
  } else if (keyCode === 74) {
    lSide[6].red();
    osc[11].start();
    osc[11].freq(midiToFreq(root + 11));
    envo[11].play();
  } else if (keyCode === 75) {
    rSide[7].red();
    osc[12].start();
    osc[12].freq(midiToFreq(root + 12));
    envo[12].play();
  } else if (keyCode === 79) {
    black[7].red();
    osc[13].start();
    osc[13].freq(midiToFreq(root + 13));
    envo[13].play();
  } else if (keyCode === 76) {
    mid[8].red();
    osc[14].start();
    osc[14].freq(midiToFreq(root + 14));
    envo[14].play();
  } else if (keyCode === 80) {
    black[8].red();
    osc[15].start();
    osc[15].freq(midiToFreq(root + 15));
    envo[15].play();
  } else if (keyCode === 186) {
    lSide[9].red();
    osc[16].start();
    osc[16].freq(midiToFreq(root + 16));
    envo[16].play();
  }
}

function keyReleased() {
  for (var i = 0; i < 10; i++) {
    rSide[i].white();
    black[i].white();
    mid[i].white();
    lSide[i].white();
  }
}

function rSideKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(255);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x, 0);
    vertex(this.x, 200);
    vertex(this.x + this.keyWidth, 200);
    vertex(this.x + this.keyWidth, 200 * 0.6)
    vertex(this.x + (this.keyWidth * 0.667), 200 * 0.6)
    vertex(this.x + (this.keyWidth * 0.667), 0);
    endShape();

    fill(0, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.4), 200 - this.size);
  }

  this.red = function() {
    this.col = color(255, 0, 0);
  }

  this.white = function() {
    this.col = color(255);
  }
}

function BlackKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(0);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    rect(this.x, 0, (this.keyWidth * 0.667), 200 * 0.6);

    fill(255, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.2), (200 * 0.6)  - this.size);
  }

   this.red = function() {
    this.col = color(255, 0, 0); //color for the chosen black keys
  }

  this.white = function() {
    this.col = color(0);
  }
}

function MidKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(255);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x + (this.keyWidth * 0.333), 0);
    vertex(this.x + (this.keyWidth * 0.333), 200 * 0.6);
    vertex(this.x, 200 * 0.6);
    vertex(this.x, 200);
    vertex(this.x + this.keyWidth, 200);
    vertex(this.x + this.keyWidth, 200 * 0.6);
    vertex(this.x + (this.keyWidth * 0.667), 200 * 0.6);
    vertex(this.x + (this.keyWidth * 0.667), 0);
    endShape();

    fill(0, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.4), 200 - this.size);
  }

   this.red = function() {
    this.col = color(255, 0, 0);
  }

  this.white = function() {
    this.col = color(255);
  }
}

function lSideKey(start, space, kee) {
  this.x = start * space;
  this.keyWidth = space;
  this.col = color(255);
  this.kee = kee;
  this.size = space/3;

  this.display = function() {
    fill(this.col);
    beginShape();
    vertex(this.x + (this.keyWidth * 0.333), 0);
    vertex(this.x + (this.keyWidth * 0.333), 200 * 0.6);
    vertex(this.x, 200 * 0.6);
    vertex(this.x, 200);
    vertex(this.x + this.keyWidth, 200);
    vertex(this.x + this.keyWidth, 0);
    endShape();

    fill(0, 0, 230);
    textSize(this.size);
    text(this.kee, this.x + (this.keyWidth *0.4), 200 - this.size);
  }

   this.red = function() {
    this.col = color(255, 0, 0);
  }

  this.white = function() {
    this.col = color(255);
  }
}




// // This contains the use of both Scenemanager and P5.play
// // Documentation and additional examples of these libraries can be found at:
// //https://github.com/mveteanu/p5.SceneManager
// //http://molleindustria.github.io/p5.play/
//
//
// var snd1, snd2, snd3;
// let bg, bg1, bg2;
// let myButton;
// let myButton1;
// let myButton2;
// let myButton3;
// // var duration;
// // var  slideWidth = 500;
//
// // The midi notes of a scale
// var notes = [ 60, 62, 64, 65, 67, 69, 71];
// var osc;
//
//
// function preload() {
//    bg = loadImage('assets/bg.png');
//    bg1 = loadImage('assets/bg1.jpg');
//    bg2 = loadImage('assets/bg2.jpg');
//
//    snd1 = loadSound("sound/chime.mp3");
//    snd2 = loadSound("sound/magic.mp3");
//    snd3 = loadSound("sound/piano.mp3");
// }
//
//
// // define your p5.play sprites as global objects first.
// var icon;
//
//
// // global manager object
// var mgr;
//
// function setup() {
//     createCanvas(1200, 675);
//   //  console.log(hell);
//      mgr = new SceneManager();
//      //masterVolume(.05);
//
//      icon = createSprite(0, 0);
//      // asterisk.addAnimation("normal", "assets/asterisk_explode0001.png",  "assets/asterisk_explode0011.png");
//      // asterisk.addAnimation("stand", "assets/asterisk_stretching0001.png",  "assets/asterisk_stretching0008.png");
//      // asterisk.addAnimation("square", "assets/bubbly0001.png",  "assets/bubbly0004.png");
//
//     // Preload scenes. Preloading is normally optional
//     // ... but needed if showNextScene() is used.
//     mgr.addScene (scene1);
//     mgr.addScene (scene2);
//     mgr.addScene (scene3);
//     mgr.showNextScene();
//
// }
//
// function draw()
// {
//
//     // passthe current draw function into the SceneManager
//     mgr.draw();
// }
//
// // function mousePressed()
// // {
// //    // pass the mousePressed message into the SceneManager
// //   mgr.mousePressed();
// // }
//
// function keyPressed()
// {
//
//
//     switch(key)
//     {
//         case '1':
//             mgr.showScene( scene1 );
//             break;
//         case '2':
//             mgr.showScene( scene2 );
//             break;
//         case '3':
//             mgr.showScene( scene3 );
//             break;
//     }
//
//     // ... then dispatch via the SceneManager.
//     mgr.keyPressed();
// }
