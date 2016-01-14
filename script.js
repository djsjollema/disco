window.addEventListener("load",function(){ 
	var myName = document.getElementById("myName");
    var letters = ["j","e","l","l","e"];
    //myName.innerHTML = "blah blah";
    //myName.style.color = "red";
    
    for(teller= 0; teller<5; teller++){
        var letter = document.createElement('span');
        letter.innerHTML = letters[teller];
        letter.style.color = "rgb(" + rndGetal() + ",0,0)"
        myName.appendChild(letter);
    }
})

function rndGetal(){
    return Math.floor(Math.random()*255);
}