function aprekins() {
  let x=parseInt(document.getElementById("x").value);
  let y=parseInt(document.getElementById("y").value);
  let z=x+y;
  console.log("Pirmā vērtība:+ x ");
  console.log("Otrā vērtība:+ y ");
  console.log("Rezultāts:+ z ");
  //alert("Rezultats ir"+z);
}

window.onload= function() {
  zimetuzcanva();
  none alert("Rītdien Oranžais Brīdinājums, sola negaisu ar krusu");
}

function zimetuzcanva() {
}
  

  // aplis
function aplis() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvu pēc ID
  const konteksts = kanva.getContext("2d") // iegūt 2d zīmēšanu
  konteksts.beginPath();
  konteksts.arc(110, 330, 100, 0, 2 * Math.PI);
  konteksts.fillStyle = "red";
  konteksts.fill();
  konteksts.lineWidth =15; 
  konteksts.strokeStyle = "yellow";
  konteksts.stroke();
}
  //teksts
function tristuris() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvu pēc ID
  const konteksts = kanva.getContext("2d") // iegūt 2d zīmēšanu
  konteksts.font = "30px Arial";
  konteksts.fillStyle = "Red";
  konteksts.fillText("Sveicieni!", 50, 50);
}
  //līnija
function linija() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvu pēc ID
  const konteksts = kanva.getContext("2d") // iegūt 2d zīmēšanu  
  konteksts.beginPath();
  konteksts.moveTo(200, 0);
  konteksts.lineTo(500, 400);
  konteksts.lineWidth =15;
  konteksts.strokeStyle = "yellow";
  konteksts.stroke();
}
function taisnsturis() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvu pēc ID
  const konteksts = kanva.getContext("2d") // iegūt 2d zīmēšanu
  konteksts.fillStyle = "yellow";
  konteksts.fillRect(10, 10, 200, 200);// 10, 10 xy asis, 150/200 izmērs

  konteksts.strokeStyle = "black";
  konteksts.stroke(); //
}