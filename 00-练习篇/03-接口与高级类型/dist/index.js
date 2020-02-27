function mycss(el, target) {
    for (let attr in target) {
        console.log(attr, target[attr]);
        el.style[attr] = target[attr];
    }
}
let myDiv = document.querySelector("#wrap");
if (myDiv) {
    mycss(myDiv, {
        width: '300px',
        height: '300px',
        background: 'red',
        opacity: 1
    });
}
