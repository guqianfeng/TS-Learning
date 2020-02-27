function myCss(el, target) {
    if (target.targetArr) {
        //设置样式
        target.attrArr.forEach((attr, index) => {
            if (attr != "length" && attr != "parentRule" && target.targetArr) {
                el.style[attr] = target.targetArr[index];
            }
        });
    }
    else {
        //获取样式
        return target.attrArr.map(attr => getComputedStyle(el)[attr]);
    }
}
let myDiv = document.querySelector("#wrap");
if (myDiv) {
    //设置
    myCss(myDiv, {
        attrArr: ["width", "height", "backgroundColor", "opacity"],
        targetArr: ["100px", "200px", "skyblue", ".5"]
    });
    //获取
    console.log(myCss(myDiv, {
        attrArr: ["width", "height", "backgroundColor", "opacity"]
    }));
}
