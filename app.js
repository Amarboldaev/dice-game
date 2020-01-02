// Тоглочийн ээлжийг хадгалах хувьсагч, player 1 = 0, player 2 = 1
var activePlayer = 0;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаар буусны хадгалах хувьсагч. 1-6 гэсэн утгыг санамсаргүйгээр өгнө.

// document.getElementById("#score - 0").textContent = 0;
// window.document.querySelector("#score-0").textContent = dice;

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// window.document.querySelector("#score-1").innerHTML = "<em>" + dice + "<em>";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// document.querySelector(".btn-roll").addEventListener("click", shooShid);

//Шоог шидэх event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
  //Санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Шооны зургыг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";
  //Гарсан тоонд таарах зургыг гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    //1-с ялгаатай тоо буулга. буусан тоог нэмнэ.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 Буусан бол тоглогчийн ээжлийг сольж тоог тэглэнэ.

    //Энэ тоглогчийн ээлжиндээ цуглуулсан огноог 0 болгоно.
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
});

// function shooShid() {
//   var diceNumber = Math.floor(Math.random() * 6) + 1;
//   alert("Шоо буулаа: " + diceNumber);
// }

// Буусан тоо ны 1 -с ялгаатай бол идвэхитэй тоглогчийн ээлжийн тоог нэмэгдүүлнэ.
