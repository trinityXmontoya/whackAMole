window.onload = init;

var stage;
var mole = new createjs.Bitmap("https://lh3.ggpht.com/7zGUqk6UlhZaE9mrIXT5gOYyUKLP7gY1lu3tPpGPI7v3TQWD311ryGjwWtQdLyj4OsDQ=w300");
// var hammer = new createjs.Bitmap("http://i254.photobucket.com/albums/hh96/nahsonchilll/982ba1e3-7b24-4be9-a460-0de66543bb1c_zps26e7bd46.png");

function init(){
  stage = new createjs.Stage("board");
  stage.enableMouseOver();
  makeGameBoard();
  stage.cursor='crosshair';
  document.onclick=checkIfMole();
};

// function bringDownHammer(){
//   checkIfMole();
// };

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
    moleHole.id="mole-hole-"+i;
    stage.addChild(moleHole);
    updateStage();
  }

};


function checkIfMole(evt){
  console.log(evt.target);
  if (evt.target.id=='mole-hole-1'){
    whackMole();
  }
  whackEmptySpace();

};

function whackMole(){
    alert("you got it!");
};

function whackEmptySpace(){
   // hammer.x = 50;
  // stage.addChild(hammer)
  // updateStage();
};
