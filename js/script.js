var link = document.querySelector(".find-hotel-button");
var popup = document.querySelector(".booking");


link = link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("booking-show");
});