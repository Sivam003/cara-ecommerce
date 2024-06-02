const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const cross = document.getElementById("cross");

if(bar) {
    bar.addEventListener("click", function() {
        nav.classList.add("active");
    })
}

if(cross) {
    cross.addEventListener("click", function() {
        nav.classList.remove("active");
    })
}

const allImg = document.querySelectorAll(".small-img-col");
for(let i=0; i<allImg.length; i++) {
    allImg[i].addEventListener("click", function(){
        document.getElementById("MainImg").setAttribute("src", this.querySelector("img").getAttribute("src"));
    })
}
