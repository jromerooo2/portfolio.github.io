

//Button for scrolling to top & appearing
//let btn = document.getElementById("btn");
//let secondSe = document.getElementById("second");
//function for appearing 
//function scrolldown(){
   //secondSe.onscroll(function(){appear})
//}
function appear(){
    btn.style.display = "block";;
} 


//function 4 returning 2 top

function clickDetected(){
    btn.addEventListener("click", function(){scrollin()})
}

function scrollin() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

//Progress bar
window.onscroll = function() {myFunction()};

function myFunction() {
                        //Safari                   //Others
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}




