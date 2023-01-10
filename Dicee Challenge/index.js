var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var changeP1 , changeP2;
switch( randomNumber1 )
{
case 1:
{
   changeP1 =  document.querySelector(".img1").setAttribute("src", "images/dice1.png");   
    break;
}
case 2:
{
    changeP1 =  document.querySelector(".img1").setAttribute("src", "images/dice2.png");      
    break;
}
case 3:
{   
    changeP1 =  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;
}
case 4:
{
    changeP1 =  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
}
case 5:
{
    changeP1 =  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;
}
case 6:
{
    changeP1 =  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    break;
} 
}

switch( randomNumber2 )
{
case 1:
{
   changeP2 =  document.querySelector(".img2").setAttribute("src", "images/dice1.png");   
    break;
}
case 2:
{
    changeP2 =  document.querySelector(".img2").setAttribute("src", "images/dice2.png");      
    break;
}
case 3:
{   
    changeP2 =  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;
}
case 4:
{
    changeP2 =  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;
}
case 5:
{
    changeP2 =  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;
}
case 6:
{
    changeP2 =  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    break;
} 
}

var msg = document.querySelector("h1");

if(randomNumber1 > randomNumber2)
{msg.textContent = "Player 1 wins!"; }

else if(randomNumber1 < randomNumber2)
{msg.textContent = "Player 2 wins!";}

else
{msg.textContent = "It's a draw";} 




