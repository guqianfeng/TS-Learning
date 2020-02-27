function css (el: Element, attr: string, value: string | number) {
    //具体实现
}

let oDiv = document.querySelector("div");

if(oDiv){
    css(oDiv, "width", "100px");
    css(oDiv, "opacity", 1);
}