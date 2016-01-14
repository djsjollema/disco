window.addEventListener("load", function () {
    var myName = document.getElementById("myName");
    var letters = ["J", "e", "l", "l", "e"," ",
                   "S", "j", "o","l","l","e","m","a"];
    //myName.innerHTML = "blah blah";
    //myName.style.color = "red";
    var muziek = new Audio();
     muziek.src = "media/Tommy Roe - Dizzy.mp3";
    muziek.play();

    function animate() {
        myName.innerHTML = "";
        for (teller = 0; teller < letters.length; teller++) {
            var letter = document.createElement('span');
            letter.innerHTML = letters[teller];
            letter.style.color = "rgb(" + rndGetal() + "," + rndGetal() + "," + rndGetal() + ")";
            myName.appendChild(letter);
        }
    }
    setInterval(animate, 100);

})

function rndGetal() {
    return Math.floor(Math.random() * 255);
}