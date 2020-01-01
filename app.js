// Тоглочийн ээлжийг хадгалах хувьсагч, player 1 = 0, player 2 = 1
var activePlayer = 1;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаар буусны хадгалах хувьсагч. 1-6 гэсэн утгыг санамсаргүйгээр өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
// window.document.querySelector("#score-0").textContent = dice;
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// window.document.querySelector("#score-1").innerHTML = "<em>" + dice + "<em>";
document.querySelector(".dice").style.display = "none";
console.log("Шоо: " + dice);
