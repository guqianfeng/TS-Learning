// function showOrHide(el: HTMLElement, attr: 'display' | 'opacity', value: 'none' | 'block' | number){
function showOrHide(el, attr, value) {
}
let box = document.querySelector('div');
if (box) {
    showOrHide(box, "display", 'block');
    showOrHide(box, "display", 'none');
    showOrHide(box, "opacity", 1);
    // showOrHide(box, "display", 1); //不用重载会有问题，这个就不会报错了
}
