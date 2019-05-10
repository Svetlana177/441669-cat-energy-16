var link = document.querySelector(".catalog-button");

var popup = document.querySelector(".modal__catalog");
var close = popup.querySelector(".modal-close");


var isStorageSupport = true;
var storage = "";


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");

});

$('.catalog-button').on('click', function () {
    modal.style.display = "block";
  });


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
