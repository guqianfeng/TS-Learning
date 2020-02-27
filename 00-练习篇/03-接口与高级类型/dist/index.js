function myCss(el, attr, value) {
    if (attr != "length" && attr != "parentRule") {
        el.style[attr] = value;
    }
}
let myDiv = document.querySelector("#wrap");
if (myDiv) {
    myCss(myDiv, "width", "200px");
    myCss(myDiv, "height", "200px");
    myCss(myDiv, "opacity", .5);
    myCss(myDiv, "background", "skyblue");
}
