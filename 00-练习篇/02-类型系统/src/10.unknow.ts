let notSure: unknown;

// notSure.xyz; //报错，如果是any也不会报错

let numTest: number = 10;
// numTest = notSure; //这里就会报错，如果是any就不会报错

numTest.toFixed(2); //如果使用any，然后给any赋值个字符串，就会有问题，因为any可以赋值给numTest