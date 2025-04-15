window.onload= function() {
  zimetuzcanva();
}

function zimetuzcanva() {
  const kanva = document.getElementById("zimejums"); //Iegūt kanvu pēc ID
  const konteksts = kanva.getContext("2d") // iegūt 2d zīmēšanu
  // taisnstūris
  konteksts.fillStyle = "yellow";
  konteksts.fillRect(10, 10, 200, 200);// 10, 10 xy asis, 150/200 izmērs
  konteksts.stokeStyle = "red";
  konteksts.strokeRect(10, 10, 202, 202);
  konteksts.linewidth =15;
  konteksts.strokeStyle = "black";
  konteksts.stroke();
  // aplis
  konteksts.beginPath();
  konteksts.arc(110, 330, 100, 0, 2 * Math.PI);
  konteksts.fillStyle = "red";
  konteksts.fill();
  konteksts.linewidth =15;
  konteksts.strokeStyle = "yellow";
  konteksts.stroke();
  
  //teksts
  konteksts.font = "30px Arial";
  konteksts.fillStyle = "Red";
  konteksts.fillText("Sveicieni!", 50, 50);
}