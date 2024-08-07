
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".header").classList.toggle("open")
        document.querySelector("body").classList.toggle("lock")
    })
})

const menu = document.querySelector(".nav")

menu.querySelectorAll(".navlink").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".header").classList.remove("open")
        document.querySelector("body").classList.remove("lock")
    })
});

let video = document.querySelector(".video");
let videodesc = document.querySelector(".videodesc ");

video.addEventListener("click", function (){

    if(videodesc .classList.contains('ready')) {
        return;
    }

    videodesc .classList.add("ready");

    video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube-nocookie.com/embed/7Lv53sPi5nk?si=nsYIJzI9DyoCALYV?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>')

})