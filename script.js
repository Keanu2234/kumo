window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topButtonClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}