// function fn(a: string | number){
//     if(typeof a === "string"){
//         a.substring(1);
//     }else{
//         a.toFixed(2);
//     }
// }
function canEach(data) {
    return data.forEach !== undefined;
}
function fn(elements) {
    if (canEach(elements)) {
        elements.forEach(el => {
            el.classList.add('');
        });
    }
    else {
        elements.classList.add('');
    }
}
