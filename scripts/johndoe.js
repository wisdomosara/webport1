window.onload = function() {
    document.querySelector(".preload").classList.add("hide")
    document.querySelector(".mainn").style.display = "block"
    console.log("hidee")
let hand = document.querySelector(".hand")
let img = document.querySelector(".hand img")
let clicked = false;

    hand.addEventListener("click", function() {
    clicked = !clicked
if(clicked == true) {
    img.src = "../assets/images/icons8-delete-30.png"
    console.log("open")
}else {
   img.src = "../assets/images/hamburger.png"
   }
 })


new WOW().init();
let navLinks = document.querySelectorAll(".nav-item")

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.forEach(function(links) {
            links.classList.remove("active");
        })
        link.classList.add("active")
    })
})

}