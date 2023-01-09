var butClick = document.querySelectorAll(".drum");

for(var i=0;i<butClick.length;i++)
{
butClick[i].addEventListener("click", function()
{
    var buttonPress =  this.innerHTML; //to grab the key that is clicked

    makeSound(buttonPress); //one make sound for clicking the button the other below for pressing the keys
    buttonAnimation(buttonPress);
});
}

document.addEventListener("keydown",function(event) //listen to the entire document
{
makeSound(event.key); //enter the key property 
buttonAnimation(event.key); 
}
)

function makeSound(key)
{
    switch(key) //simple choice of click/key to choose our sound
    {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();

        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
        break;

        default: console.log("Wrong button");
    }

}

function buttonAnimation(currentKey)
{
var activeButton = document.querySelector("."+ currentKey); // selects the class from its letter in the definition

activeButton.classList.add("pressed"); //the animation runs but stays, we need to make it go away!

setTimeout(function(){
    activeButton.classList.remove("pressed"); //removes the animation after a certain time passes

}, 100);

}