/* set random flash card*/

function setRandomCards() {

  var randomNumber = Math.floor((Math.random() * 7)) + 1;

  var lvl = document.querySelector("p.mylevel").textContent;
  if (lvl < 5) {
    var src = "url('cards/level1/" + randomNumber + ".png')";
  } else if (lvl >= 5 && lvl < 10) {
    var src = "url('cards/level2/" + randomNumber + ".png')";
  } else if (lvl >= 10 && lvl < 15) {
    var src = "url('cards/level3/" + randomNumber + ".png')";
  } else if (lvl >= 15 && lvl < 20) {
    var src = "url('cards/level4/" + randomNumber + ".png')";
  } else if (lvl >= 20 && lvl < 25) {
    var src = "url('cards/level5/" + randomNumber + ".png')";
  } else if (lvl >= 25 && lvl < 30) {
    var src = "url('cards/level6/" + randomNumber + ".png')";
  }

  document.querySelector("div.cards").style.backgroundImage = src;
  console.log(src);
}

/* define note by src name*/
function defineCard() {

  var srcName = document.querySelector("div.cards").style.backgroundImage;
  var srcLength = srcName.length;

  var num = srcName[srcLength - 7]; //note number in url
  // alert(num);
  var noteName;
  if (num === '1') {
    noteName = "do";
  } else if (num === '2') {
    noteName = "re";
  } else if (num === '3') {
    noteName = "mi";
  } else if (num === '4') {
    noteName = "fa";
  } else if (num === '5') {
    noteName = "sol";
  } else if (num === '6') {
    noteName = "la";
  } else if (num === '7') {
    noteName = "si";
  }
  return (noteName);
}



// /* detect answer by mouse click*/


function mouseClick() {

  var numberOfNote = document.querySelectorAll(".note").length;

  for (var i = 0; i < numberOfNote; i++) {

    document.querySelectorAll(".note")[i].addEventListener("click", function() {


      var buttonInnerHtml = this.innerHTML;
      return (examineAnswer(buttonInnerHtml));
    });
  }
  setRandomCards();
}


// function currentLevel() {
//   var level = document.querySelector("p.mylevel").textContent;
//   return (level);
// }



function starScore() {
  var score = document.querySelector("p.star").textContent;
  var numOfStar = score.length;
  if (numOfStar < 9) { // length 20 = 10star
    var getAstar = score + "⭐️";
    document.querySelector("p.star").textContent = getAstar;
    // console.log(score);
  } else if (numOfStar >= 9) {
    document.querySelector("p.star").textContent = "";
    var level = document.querySelector("p.mylevel").textContent;
    level++;
    document.querySelector("p.mylevel").textContent = level;
    levelupAnimation();
     if(level===10){
      var name=prompt("Olala! tu t'appelles comment?");
       alert(name+", Tu es un genie du Jue des notes :)");
    }

  }
  document.querySelector("div.level-up").style.visibility = "hidden";
}


function levelupAnimation() {
  setTimeout(function() {
    document.querySelector("div.level-up").style.visibility = "visible";
  }, 100);
}

function examineAnswer(answerValue) {

  var cardValue = defineCard();
  if (cardValue === answerValue) {
    var success = new Audio('sound/success.mp3');
    success.play();
    starScore();
    setRandomCards();

    return (1);
  } else if (cardValue !== answerValue) {
    var fail = new Audio('sound/fail.mp3');
    fail.play();
    return (2);
  }

}

function launch() {
  var action = mouseClick();
  while (action === 1) {
    action = mouseClick;
  }
}

launch();
