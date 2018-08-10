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
    console.log(cookies);
    unlockStore();
    $(".cookieAmount").html(Math.round(cookies));
    $(".CPS").html(cookiesPerSecond);
}

function cookieCostFormula(obj) {

    return parseInt((obj.baseCost * Math.pow(1.1, obj.quantity)).toFixed(1));
}

function autoAddCookies() {
    cookies += cookiesPerSecond;
    renderToDOM();
}

function unlockStore() {
    if (cookies >= cursor.baseCost) {
        $(".cursor").removeClass("hidden");
    }
    if (cookies >= grandma.baseCost) {
        $(".grandma").removeClass("hidden")
    }
    if (cookies >= factory.baseCost) {
        $(".factory").removeClass("hidden")
    }
    if (cookies >= mine.baseCost) {
        $(".mine").removeClass("hidden")
    }
    if (cookies >= shipment.baseCost) {
        $(".shipment").removeClass("hidden")
    }
    if (cookies >= lab.baseCost) {
        $(".lab").removeClass("hidden")
    }
    if (cookies >= portal.baseCost) {
        $(".portal").removeClass("hidden")
    }
    if (cookies >= timemachine.baseCost) {
        $(".timemachine").removeClass("hidden")
    }
}
