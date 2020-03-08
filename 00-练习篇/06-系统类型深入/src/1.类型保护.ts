// function fn(a: string | number){
//     if(typeof a === "string"){
//         a.substring(1);
//     }else{
//         a.toFixed(2);
//     }
// }

function canEach(data: any): data is Element[] | NodeList{
    return data.forEach !== undefined;
}

function fn(elements: Element[] | NodeList | Element){
    if(canEach(elements)){
        elements.forEach(el => {
            el.classList.add('');
        })
    }else{
        elements.classList.add('');
    }
}