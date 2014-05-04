window.onload = init;

var stage;
var mole = new createjs.Bitmap("https://lh3.ggpht.com/7zGUqk6UlhZaE9mrIXT5gOYyUKLP7gY1lu3tPpGPI7v3TQWD311ryGjwWtQdLyj4OsDQ=w300");
var hammer = new createjs.Bitmap("");




function init(){
  stage = new createjs.Stage("board");
  stage.enableMouseOver();
  makeGameBoard();
  stage.cursor='crosshair';
  document.onclick=bringDownHammer;
};

function bringDownHammer(){
  hammer.x = 50;
  hammer.y = 50;
  updateStage();
};

function makeGameBoard(){
  drawMoleHoles();
};

function updateStage(){
  stage.update();
}

function drawMoleHoles(){
  for (var i=0; i < 6; i++){
    var moleHole = new createjs.Shape();
    moleHole.graphics.beginFill("#00F").drawCircle(30,30, 25);

    if (i == 0 | i == 1 | i == 2){
      moleHole.x= 20 + (i * 60);
    }
    else if (i == 3 | i == 4 | i == 5){
      moleHole.x= (i * 60)-160;
      moleHole.y= 60;
    }
    // else if (i == 6 | i == 7 | i == 8){
    //   moleHole.x= (i * 60)-340;
    //   moleHole.y= 120;
    // }

    console.log(moleHole);
    moleHole.on("click",checkIfMole);
    stage.addChild(moleHole);
    updateStage();
  }

};


function checkIfMole(){
  whackEmptySpace();
  whackMole();
};

function whackMole(){

};

function whackEmptySpace(){

};
