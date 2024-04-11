var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", drumname);

    function drumname() {
        var btninnerHtml = this.innerHTML;
        makeSound(btninner);


    };

};

function makesound(key) {
    switch (key) {
        case "w":
            var tom0 = new Audio('sounds/crash.mp3');
            tom0.play();
            break;

        case "a":
            var tom1 = new Audio('sounds/tom-2.mp3');
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio('sounds/tom-3.mp3');
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio('sounds/tom-4.mp3');
            tom3.play();
            break;

        case "j":
            var tom4 = new Audio('sounds/tom-1.mp3');
            tom4.play();
            break;

        case "k":
            var tom5 = new Audio('sounds/kick-bass.mp3');
            tom5.play();
            break;

        case "l":
            var tom6 = new Audio('sounds/snare.mp3');
            tom6.play();
            break;


        default:
            break;
    }
}
document.addEventListener("keydown", function(event) {
    console.log(event.key);

})