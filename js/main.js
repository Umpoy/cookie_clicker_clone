var cookies = 0;
var cookiesPerSecond = 0;
//quantity

$(document).ready(init);

function init() {
    renderToDOM();
    assignClickHandler();
    setInterval(function () {
        autoAddCookies();
    }, 1000)
}

function assignClickHandler() {
    $(".cookie").on("click", function () {
        cookies++;
        renderToDOM();
    });
    $(".cursor").on("click", function () {
        if (cookieCostFormula(cursor) > cookies) {
            console.log("not enough cookies");
            return
        }
        cursor.quantity++;
        cookiesPerSecond += cursor.CPS;
        cookies -= cookieCostFormula(cursor);
        renderToDOM();

    })
}

function renderToDOM() {
    // unlockStore();
    $(".cookieAmount").html(Math.round(cookies));
    $(".CPS").html(cookiesPerSecond);
}

function cookieCostFormula(obj) {
    return obj.baseCost * Math.pow(1.1, obj.quantity)
}

function autoAddCookies() {
    cookies += cookiesPerSecond;
    renderToDOM();
}

// function unlockStore(){

// }
