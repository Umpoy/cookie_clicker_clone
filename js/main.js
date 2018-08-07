var cookies = 0;
var cookiesPerSecond = 0;
//quantity
var cursor = {
    baseCost: 15,
    quantity: 0,
    CPS: 0.1
}
$(document).ready(init);

function init() {
    renderCookies();
    assignClickHandler();
    setInterval(function () {
        autoAddCookies();
    }, 1000)
}

function assignClickHandler() {
    $(".cookie").on("click", function () {
        cookies++;
        renderCookies();
    });
    $(".cursor").on("click", function () {
        if (cookieCostFormula(cursor) > cookies) {
            console.log("not enough cookies");
            return
        }
        cursor.quantity++;
        cookiesPerSecond += cursor.CPS;
        cookies -= cookieCostFormula(cursor);
        renderCookies();

    })
}

function renderCookies() {
    $(".cookieAmount").html(Math.round(cookies));
}

function cookieCostFormula(obj) {
    return obj.baseCost * Math.pow(1.1, obj.quantity)
}

function autoAddCookies() {
    cookies += cookiesPerSecond;
    renderCookies();
}
