//Тоглоомын бүх газар зарлагдах ашигдагдах глобал хувьсагч зарлах
var activePlayer;
var scores;
var roundScore;
var isNewGame;

// window.document.querySelector("#score-1").innerHTML = "<em>" + dice + "<em>";

var diceDom = document.querySelector(".dice");
newGame();

function newGame() {
  isNewGame = true;
  // Тоглочийн ээлжийг хадгалах хувьсагч, player 1 = 0, player 2 = 1
  activePlayer = 0;

  // Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжийн оноог хадгалах хувьсагч
  roundScore = 0;

  // Шооны аль талаар буусны хадгалах хувьсагч. 1-6 гэсэн утгыг санамсаргүйгээр өгнө.

  // document.getElementById("#score - 0").textContent = 0;
  // window.document.querySelector("#score-0").textContent = dice;

  window.document.getElementById("score-0").textContent = "0";
  window.document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  diceDom.style.display = "none";
  document.getElementById("name-0").textContent = "Player-1";
  document.getElementById("name-1").textContent = "Player-1";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

// document.querySelector(".btn-roll").addEventListener("click", shooShid);

//Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame) {
    //Санамсаргүй нэг тоо гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зургыг вэб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    //Гарсан тоонд таарах зургыг гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      //1-с ялгаатай тоо буулга. буусан тоог нэмнэ.
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      changePlayer();
    }
  } else {
    alert("Game Over on Roll dice");
  }
});
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    // Уг тоглогчийн цуглуулсан ээлжийн огноог глобал оноон дээр нэмж өгнө.
    // if (activePlayer ==0){
    //   scores[0] = scores[0] + roundScore;
    // }else{
    //   scores[1] = scores[1] + roundScore;
    // }
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // дэлгэц дээр оноогч өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      changePlayer();
    }
  } else {
    alert("Game Over on Hold");
  }
});

function changePlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //Хэрэв идвэхитэй тоглогч нь 0 байх юм бол идвэхтэй тоглочийг 1 болго
  //үгүй бол идвэхтэй тоглогчийг 0 болго
  // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  //Улаан цэгийг сольно.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}
//New game button
document.querySelector(".btn-new").addEventListener("click", newGame);

// function shooShid() {
//   var diceNumber = Math.floor(Math.random() * 6) + 1;
//   alert("Шоо буулаа: " + diceNumber);
// }

// Буусан тоо ны 1 -с ялгаатай бол идвэхитэй тоглогчийн ээлжийн тоог нэмэгдүүлнэ.
