let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (this.scrollY > 0) {
        header.classList.add("bg");
    } else {
        header.classList.remove("bg");
    }
})
let lis = document.querySelectorAll(".tabs li");
let imgs = document.querySelectorAll(".blog-box");

lis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImg);
});
function removeActive() {
    lis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}
function manageImg() {
    imgs.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((e) => {
        e.style.display = "block";
    })
}
