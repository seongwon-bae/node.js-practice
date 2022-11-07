function BigUser() {
    this.name = '원숭이';

    return {name: '고릴라'};
}

function SmallUser() {
    this.name = '원숭이';

    return;
}

// 생성자 함수는 괄호 없이 호출해도 동일. new User() == new User

function Accumulator(startingValue){
    this.value = startingValue;

    this.read = function(number){
        this.value += number;
    }
}
let accumulator = new Accumulator(1);
accumulator.read(3); // 사용자 입력값 더함
accumulator.read(5); // 사용자 입력값 더함

console.log(accumulator.value);