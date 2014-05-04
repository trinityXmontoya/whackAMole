window.onload = loadGame;

var stage;
var score = 0;
var mole = new createjs.Bitmap("https://lh3.ggpht.com/7zGUqk6UlhZaE9mrIXT5gOYyUKLP7gY1lu3tPpGPI7v3TQWD311ryGjwWtQdLyj4OsDQ=w300");
// var hammer = new createjs.Bitmap("http://i254.photobucket.com/albums/hh96/nahsonchilll/982ba1e3-7b24-4be9-a460-0de66543bb1c_zps26e7bd46.png");

function loadGame(){
  stage = new createjs.Stage("board");
  stage.enableMouseOver();
  stage.cursor='crosshair';
  makeGameBoard();
  document.onclick=checkIfMole();
  score=0;
};

// function bringDownHammer(){
//   checkIfMole();
// };

function makeGameBoard(){
  drawMoleHoles();
  drawScoreboard();
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
      moleHole.y=30;
    }
    else if (i == 3 | i == 4 | i == 5){
      moleHole.x= (i * 60)-160;
      moleHole.y= 90;
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



function makeRandomMoleAppear(){

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
    score+=1;
    drawScoreboard(score);
};

function drawScoreboard(user_score){
  var scoreboard = new createjs.Shape();
  scoreboard.graphics.beginFill("#3cd").drawRect(10,10,200,20);
  stage.addChild(scoreboard);
  var currentScore = new createjs.Text("Score: "+ score, "20px Arial", "#000");
    currentScore.x = 20;
    currentScore.y = 8;
  stage.addChild(currentScore);
  updateStage();
};

function whackEmptySpace(){
   // hammer.x = 50;
  // stage.addChild(hammer)
  // updateStage();
};
