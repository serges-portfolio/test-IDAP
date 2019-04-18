document.addEventListener("DOMContentLoaded", function (event) {
    //show-hide navbar
    var navbarBtn = document.querySelector(".general__show-navbar");
    navbarBtn.onclick = function (e) {
        document.querySelector(".navigation").classList.toggle("show-nav");
    };
    //scroll init
    $('.custom-scroll').each(function () {
        const ps = new PerfectScrollbar($(this)[0]);
    });

    //show-hide left-column-items
    var showBtn = document.querySelectorAll(".general__arrow-button");
    var hiddenItem = document.querySelector(".general__hidden-item");

    for (let i = 0; showBtn.length; i++) {

        showBtn[i].onclick = ( function () {

            this.parentNode.parentNode.nextElementSibling.classList.toggle("general__hidden-item-active");

        })
    };

    var hiddenBox = document.querySelectorAll(".show-box");
    var imgToggle = document.querySelectorAll(".image");
    for (i = 0; i < hiddenBox.length; i++) {
        hiddenBox[i].onclick = (function () {
            this.nextElementSibling.classList.toggle('img-show');
        });
    };

});

