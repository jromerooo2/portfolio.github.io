

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




(function() {
    scrollTo();
})();

function scrollTo() {
    const links = document.querySelectorAll('.scroll');
    links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    e.preventDefault();
    var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = '-1';
            targetAnchor.focus();
            window.history.pushState('', '', targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}