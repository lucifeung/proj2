
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var snd1, snd2, snd3;
let bg, bg1, bg2, gif;
// var duration;
// var  slideWidth = 500;

function preload() {
   bg = loadImage('assets/bg.png');
   bg1 = loadImage('assets/bg1.jpg');
   bg2 = loadImage('assets/bg2.jpg');

   snd1 = loadSound("sound/chime.mp3");
   snd2 = loadSound("sound/magic.mp3");
   snd3 = loadSound("sound/piano.mp3");
}


// define your p5.play sprites as global objects first.
var icon;


// global manager object
var mgr;

function setup() {
    createCanvas(1200, 675);
  //  console.log(hell);
     mgr = new SceneManager();
     //masterVolume(.05);

     icon = createSprite(0, 0);
     // asterisk.addAnimation("normal", "assets/asterisk_explode0001.png",  "assets/asterisk_explode0011.png");
     // asterisk.addAnimation("stand", "assets/asterisk_stretching0001.png",  "assets/asterisk_stretching0008.png");
     // asterisk.addAnimation("square", "assets/bubbly0001.png",  "assets/bubbly0004.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

// function mousePressed()
// {
//    // pass the mousePressed message into the SceneManager
//   mgr.mousePressed();
// }

function keyPressed()
{


    switch(key)
    {
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
