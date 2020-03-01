function myCss(el, attr, value) {
    if (typeof attr === "string" && value) {
        el.style[attr] = value;
    }
    else {
        for (let key in attr) {
            el.style[key] = attr[key];
        }
    }
}
let wrap = document.querySelector("#wrap");
console.log(wrap);
if (wrap) {
    myCss(wrap, 'width', '400px');
    myCss(wrap, {
        height: "400px",
        background: "skyblue"
    });
}
