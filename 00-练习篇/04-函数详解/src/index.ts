interface CssObject{
    [key: string]: string | number;
}

function myCss(el: HTMLElement, attr: CssObject): void;
function myCss(el: HTMLElement, attr: string, value: string | number): void;
function myCss(el: HTMLElement, attr: any, value?: any): void{
    if(typeof attr === "string" && value){
       el.style[attr] = value;
    }else{
        for(let key in attr){
           el.style[key] = attr[key];
        }
    }
}

let wrap = document.querySelector("#wrap") as HTMLElement;
console.log(wrap);

if(wrap){
    myCss(wrap, 'width', '400px');
    myCss(wrap, {
        height: "400px",
        background: "skyblue"
    })
}
