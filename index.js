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