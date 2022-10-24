
/////SCENE MANAGEMENT/////

var hell = "hi";


// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


// SCENE 1 //
function scene1()  {
    var textX;
    var textY;
    var lox= 0;



    this.draw = function()  //draw the first scene
    {
        background(bg);
        // fill(191,255,247);


        push();     //draw the rainbow
        noFill();
        strokeWeight(40);
        translate(width /2, height /1.2);
        rotate(22);
        stroke(255,random(90,127),random(90,127));
        arc( 0, 0, 400, 400, radians(0), radians(lox));
        stroke(255,random(230,252),random(120,145));
        arc( 0, 0, 320, 320, radians(0), radians(lox));
        stroke(101, random(240,255), random(100,120));
        arc( 0, 0, 240, 240, radians(0), radians(lox));
        stroke(random(90,101), random(150,184), 255);
        arc( 0, 0, 160, 160, radians(0), radians(lox));
        if (lox > 180) {
          lox = 0;
        }
         lox  ++;
        pop();

        push();
        translate(300,230);
        noStroke();  //draw the clouds
        fill(255);
        ellipse(100,370,180,100);     //left
        ellipse(140,340,140,100);
        ellipse(180,380,150,100);
        ellipse(420,380,180,100);     //right
        ellipse(460,340,150,100);
        ellipse(500,370,160,100);
        pop();
    }

    this.keyPressed = function() {
        // fill(0,255,0);
        // text(keyCode, textX, textY += 10);

       if ( !snd3.isPlaying() ) {
          snd3.play();
      }
      else {
           snd3.stop();
      }


        // if ( textY > height )  {
        //     textX += 20;
        //     textY = 0;
        // }
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}


// SCENE 2  //


function scene2()  {
    this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

    hell = "bye";

  this.setup = function() {
      console.log("We are at setup for scene2");
     icon.position.x++;

  }

  this.enter = function()
  {
      console.log("We are at entering scene2");
        console.log(hell);
        //asterisk.visible = false;
        icon.position.x = width/2;
        icon.position.y = height/2;


        icon.onMouseOver = function() {

          console.log("over");
          this.changeAnimation("stand");
          this.position.x-=5 ;
          this.position.y-=5 ;
        }

        icon.onMouseOut = function() {

          console.log("out");
          this.changeAnimation("normal");
          this.position.x+=5;
          this.position.y+=5;
        }



  }


  // this.keyPressed = function() {
  //       snd2.play();
  //       if ( !snd1.isPlaying() ) {
  //          snd1.stop();
  //      }
  // }



    this.draw = function()
    {
      background(bg1);

        drawSprites();

    }


    this.mousePressed = function()
    {

        this.sceneManager.showNextScene();
    }



}




// SCENE 3 ///

function scene3() {

    this.oAnim1 = null;
    var oAnim = null;

    this.setup = function()  {
        console.log("We are at setup for scene3");

        oAnim1 = this.sceneManager.findScene( scene2 );






    }

    this.enter = function()
    {

     icon.position.x =  width / 2;
     icon.position.y = height / 2;


     icon.onMouseOver = function() {


       this.changeAnimation("square");
       this.position.x-=0 ;
       this.position.y-=10 ;
     }

     icon.onMouseOut = function() {


       this.changeAnimation("square");
       this.position.x+=0;
       this.position.y+=10;
     }


    }




    this.draw = function() {
        background(bg2);

    }
    //
    // this.keyPressed = function() {
    //       snd3.play();
    //       if ( !snd2.isPlaying() ) {
    //          snd2.stop();
    //      }
    // }

    // this.mousePressed = function()  {
    //
    //    this.sceneManager.showNextScene();
    // }

}
