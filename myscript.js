<!--section1-->
function mOver() {
    document.getElementById("section1").innerHTML = "Welcome to my page!"
}
document.getElementById("section1").addEventListener("onmouseover", mOver);

function mOut() {
    document.getElementById("section1").innerHTML = "Hello, mouse over me!"
}
document.getElementById("section1").addEventListener("onmouseout", mOut);

<!--section2-->
function displayDate() {
  alert("You clicked the button");
    document.getElementById("section2").innerHTML = Date();
}
document.getElementById("myBtn").addEventListener("click", displayDate);


<!--section3-->

function myFocus() {   
document.getElementById("name").style.backgroundColor ="yellow";
}

document.getElementById("name").addEventListener("focus", myFocus);

<!--section4-->

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topbutton").style.display = "block";
    } else {
        document.getElementById("topbutton").style.display = "none";
    }
}

window.addEventListener("scroll", scrollFunction);


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("topbutton").addEventListener("click", topFunction);

<!--section5-->

function dClick(){
    if (document.getElementById("double").style.color!='red') {
        document.getElementById("double").style.color='red'; document.getElementById("section5").style.backgroundColor='green';
    } else {
        document.getElementById("double").style.color='black'
            document.getElementById("section5").style.backgroundColor='greenyellow';
    }
}

document.getElementById("double").addEventListener("dblclick",dClick);

