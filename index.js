var randomnumber1=Math.floor(Math.random()*6)+1;
var n="dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src" , n);

var randomnumber2=Math.floor(Math.random()*6)+1;
var m="dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",m);
if(randomnumber1 > randomnumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}
else if(randomnumber2 > randomnumber1){
  document.querySelector("h1").textContent="🚩 Player 2 Wins!";
}
else{
  document.querySelector("h1").textContent="DRAW";
}
