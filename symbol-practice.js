// 잘 몰라도 될 거 같은 느낌...

let sym = Symbol.for('name');
sym = Symbol.for('id');

console.log(Symbol.keyFor(sym));