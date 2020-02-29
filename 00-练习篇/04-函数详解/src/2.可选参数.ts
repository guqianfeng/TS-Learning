let div = document.querySelector("div");

function css(el: HTMLElement, attr: keyof CSSStyleDeclaration, val?: number | string){

}

div && css(div, 'width', '200px');
div && css(div, 'height');