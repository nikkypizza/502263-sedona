var link = document.querySelector(".find-hotel-button");
var popup = document.querySelector(".booking");
var close = popup.querySelector(".find-hotel-button");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("booking-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("booking-show");
});
