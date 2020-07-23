window.onload = function() {
    document.querySelector(".preload").classList.add("hide")
    document.querySelector(".mainn").style.display = "block"
    console.log("hidee")



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
