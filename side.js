$("document").ready(function() {
    wgreen();
})
var classes = "red orange yellow green blue indigo violet light";
var classesi = "red orange yellow green blue indigo violet dark";
$
g = false;
mytheme = "light";

function tdark() {
    if (g == false) {
        $("#toggleDark").addClass("fa-toggle-on").removeClass("fa-toggle-off");
        $("body").addClass("dark").removeClass("light");
        mytheme = "dark";
        g = true;
    } else {
        $("#toggleDark").addClass("fa-toggle-off").removeClass("fa-toggle-on");
        $("body").addClass("light").removeClass("dark");
        mytheme = "light";
        g = false;
    }
}

function wpurple() {
    $("h1,h2,h3,h4,h5,nav li,nav p,.controls,#contact,r").css({
        'color': 'rgb(255,0,255)'
    });
    $("button").css({
        'color': 'white',
        'background': 'rgb(255,0,255)'
    });
}

function wred() {
    $("h1,h2,h3,h4,h5,nav li,nav p,.controls,#contact,r").css({
        'color': 'rgb(255,0,0)'
    });
    $("nav").css({
        'color': 'rgb(255,0,0)'
    });
    $("button").css({
        'color': 'white',
        'background': 'rgb(255,0,0)'
    });
}

function wgreen() {
    $("h1,h2,h3,h4,h5, li,nav p,.controls,#contact,r").css({
        'color': 'green'
    });
    $("nav").css({
        'color': 'green'
    });
    $("button").css({
        'color': 'white',
        'background': 'green'
    });
}

function wblue() {
    $("h1,h2,h3,h4,h5,h6,nav li,nav p,.controls,#contact,r").css({
        'color': 'rgb(0,100,255)'
    });
    $("nav").css({
        'color': 'rgb(0,100,255)'
    });
    $("button").css({
        'color': 'white',
        'background': 'blue'
    });
}

function wingdigo() {
    $("h1,h2,h3,h4,h5,nav li,nav p,.controls,#contact,r").css({
        'color': 'rgb(130,10,200)'
    });
    $("nav").css({
        'color': 'rgb(130,10,200)'
    });
    $("button").css({
        'color': 'white',
        'background': 'rgb(130,10,200)'
    });
}

function wgreen() {
    $("h1,h2,h3,h4,h5,nav li,nav p,.controls,#contact,r").css({
        'color': 'green'
    });
    $("nav").css({
        'color': 'green'
    });
    $("button").css({
        'color': 'white',
        'background': 'green'
    });
}

function wbrown() {
    $("h1,h2,h3,h4,h5,nav p,.controls,#contact,r").css({
        'color': 'brown'
    });
    $("nav").css({
        'color': 'brown'
    });
    $("button").css({
        'color': 'white',
        'background': 'brown'
    });
}
setTimeout(home, 1);
var t = false;

function settings() {
    if (t == true) {
        close();
        t = false;
    } else {
        open();
        t = true;
    }
}

function close() {
    $("#black").fadeOut("slow");
    $("#white").fadeOut("slow");
}

function open() {
    $("#black").fadeIn("slow");
    $("#white").fadeIn("slow");
}

function home() {
    $("#home").removeClass("off").addClass("on");
    $("#blog").removeClass("on").addClass("off");
    $("#about").removeClass("on").addClass("off");
    $("#portfolio").removeClass("on").addClass("off");
    $("#contact").removeClass("on").addClass("off");
    $("#services").removeClass("on").addClass("off");
    $("#h").addClass("now");
    $("#b").removeClass("now");
    $("#a").removeClass("now");
    $("#p").removeClass("now");
    $("#c").removeClass("now");
    $("#s").removeClass("now");
}

function blog() {
    $("#blog").removeClass("off").addClass("on");
    $("#home").removeClass("on").addClass("off");
    $("#about").removeClass("on").addClass("off");
    $("#portfolio").removeClass("on").addClass("off");
    $("#contact").removeClass("on").addClass("off");
    $("#services").removeClass("on").addClass("off");
    $("#b").addClass("now");
    $("#h").removeClass("now");
    $("#a").removeClass("now");
    $("#p").removeClass("now");
    $("#c").removeClass("now");
    $("#s").removeClass("now");
}

function portfolio() {
    $("#portfolio").removeClass("off").addClass("on");
    $("#blog").removeClass("on").addClass("off");
    $("#about").removeClass("on").addClass("off");
    $("#home").removeClass("on").addClass("off");
    $("#contact").removeClass("on").addClass("off");
    $("#services").removeClass("on").addClass("off");
    $("#p").addClass("now");
    $("#b").removeClass("now");
    $("#a").removeClass("now");
    $("#h").removeClass("now");
    $("#c").removeClass("now");
    $("#s").removeClass("now");
}


function about() {
    $("#about").removeClass("off").addClass("on");
    $("#blog").removeClass("on").addClass("off");
    $("#home").removeClass("on").addClass("off");
    $("#portfolio").removeClass("on").addClass("off");
    $("#contact").removeClass("on").addClass("off");
    $("#services").removeClass("on").addClass("off");
    $("#a").addClass("now");
    $("#b").removeClass("now");
    $("#h").removeClass("now");
    $("#p").removeClass("now");
    $("#c").removeClass("now");
    $("#s").removeClass("now");
}

function contact() {
    $("#contact").removeClass("off").addClass("on");
    $("#blog").removeClass("on").addClass("off");
    $("#about").removeClass("on").addClass("off");
    $("#portfolio").removeClass("on").addClass("off");
    $("#home").removeClass("on").addClass("off");
    $("#services").removeClass("on").addClass("off");
    $("#c").addClass("now");
    $("#b").removeClass("now");
    $("#a").removeClass("now");
    $("#p").removeClass("now");
    $("#h").removeClass("now");
    $("#s").removeClass("now");
}

function services() {
    $("#services").removeClass("off").addClass("on");
    $("#blog").removeClass("on").addClass("off");
    $("#about").removeClass("on").addClass("off");
    $("#portfolio").removeClass("on").addClass("off");
    $("#contact").removeClass("on").addClass("off");
    $("#home").removeClass("on").addClass("off");
    $("#s").addClass("now");
    $("#b").removeClass("now");
    $("#a").removeClass("now");
    $("#p").removeClass("now");
    $("#c").removeClass("now");
    $("#h").removeClass("now");
}