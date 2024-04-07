document.getElementById("myH1").textContent = "Bulb ON/OFF";
document.getElementById("bulbon").onclick = function(){
    document.getElementById("bulb").src = "pic_bulbon.gif";
};
document.getElementById("bulboff").onclick = function(){
    document.getElementById("bulb").src = "pic_bulboff.gif";
};