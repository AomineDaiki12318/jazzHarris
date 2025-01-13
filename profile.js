
const names=["A Htin Ka Ya","DaiKi","Jazz Harris"];
const name_Element=document.getElementById("ele");


let current_Index=1;

function changeName(){

    name_Element.textContent = names[current_Index];

    current_Index=(current_Index+1) % names.length;
}
setInterval(changeName,1500);



let popup=document.getElementById("popup"); 
function openPopUp(){
    popup.classList.add("open-popup");
    popup.classList.remove("popup");
}
function closePopUp(){
    popup.classList.remove("open-popup");
    popup.classList.add("popup");

}

var typed = new Typed(".typing", {
    strings: ["I am an Edvantage Japanese Teacher.", "I am a Web Designer.", "I am a Coder.","I am Daner.","Rapper.","Music Producer.","lyricist.","Otaku."],
    typeSpeed: 50, 
    backSpeed: 25, 
    loop: true     
});


var education= new Typed(".Education",{
    strings : ["Attended at Magway I.B.S(private <br>school)","M.S.T","Myanmar School Technology <br>University"],
    typeSpeed: 50, 
    backSpeed: 25, 
    loop: true     
});