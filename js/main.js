var cookies = 0;

$(document).ready(init);


function init() {
    assignClickHandler();
}

function assignClickHandler() {
    $(".cookie").on("click", function () {
        cookies++;
        render_cookies();
    })
}

function render_cookies() {
    $(".cookieAmount").html(cookies);
}