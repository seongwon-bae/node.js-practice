// 이유 불문. '?.'이 실행이 안됨.
let user1 = {
    firstName: 'Violet'
};

let user2 = null;

let key = 'firstName';

console.log(user1?.[key]);
console.log(user2?.[key]);

console.log(user1?.[key]?.something?.not?.existing);