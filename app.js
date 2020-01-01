// Тоглочийн ээлжийг хадгалах хувьсагч, player 1 = 0, player 2 = 1
var activePlayer = 1;

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
document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
// function shooShid() {
//   var diceNumber = Math.floor(Math.random() * 6) + 1;
//   alert("Шоо буулаа: " + diceNumber);
// }
