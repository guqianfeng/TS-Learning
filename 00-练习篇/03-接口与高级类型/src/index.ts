interface Target {
    [props: string]: string | number,
}

function mycss (el: HTMLElement, target: Target) {
    for(let attr in target){
        console.log(attr, target[attr]);
        el.style[attr] = target[attr];
    }
}

let myDiv = document.querySelector("#wrap") as HTMLElement;
if(myDiv){
    mycss(myDiv, {
        width: '300px',
        height: '300px',
        background: 'red',
        opacity: 1
    })

}