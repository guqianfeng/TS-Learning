let str = 'gqf';

let a = typeof str;

type b = typeof str;

let c:b = 'test';

interface Person{
    name: string;
    age: number;
}

type personKey = keyof Person;

let p1 = {
    name: 'gqf',
    age: 28
}

function getPersonValue(key: keyof typeof p1){
    return p1[key];
}

type newPerson = {
    [k in personKey]: boolean;
}