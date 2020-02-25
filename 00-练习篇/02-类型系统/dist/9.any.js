let testAny; // 任何值可以赋值给any类型
testAny = 1;
testAny = "1";
testAny = true;
testAny.a; // ok
testAny.b; // ok
let notAny = 10;
notAny = testAny; //不会报错，因为any也可以赋值给任何类型，但实际上应该是有问题的
function testParam(a) {
    a.a;
}
