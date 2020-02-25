function getStr(a: string, b: string): string{
    return a.substring(0, 1) + b.substring(b.length - 1, b.length);
} 

console.log(getStr("123456", "789"));