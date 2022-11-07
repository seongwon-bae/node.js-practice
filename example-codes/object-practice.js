// 1. ToPrimitive
// 객체를 원시형으로 변환할땐 'string', 'number', 'default'중 하나를 hint로 사용.
let user = {
    name: 'john',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint : ${hint}`);
        return hint == 'string' ? `{name: '${this.name}'}` : this.money;
    }
};

console.log(user);  // hint: string -> {name: 'john'} 
// 위 출력을 alert로 하게 되면 주석과 같이 나오지만 이는 alert가 문자열을 기대하는 연산을 수행하는 함수라서 그런것. 여기서는 객체 전제가 출력됨.
console.log(+user); // hint: number -> 1000
console.log(user + 500);    // hint: default -> 1500

// 2. toString, valueOf
let user2 = {name: 'john'};

console.log(user2);
console.log(user2.valueOf() === user2);