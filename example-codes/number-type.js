let billion = 1000000000;
let biilion2 = 1e9; // 10억, 1과 9개의0
let billion3 = 7.3e9 // 73억

let ms = 0.000001;
let ms2 = 1e-6; // 1에서 왼쪽으로 6번 소수점 이동.

// 2, 8, 16진수
console.log(0xff);  // 대소문자를 가리지 않기에 0xFF와 동일.
let a = 0b11111111; // 2진수 255
let b = 0o377;  // 8진수 255
console.log(a==b);

// toString(base)
// base에 입력된 값을 토대로 n진수로 표현한 뒤 문자열로 바꿈. (2~36)
let num = 255;
console.log(num.toString(2));   // base를 비우면 기본 10진수
console.log(12345..toString()); // 변수가 아닌 숫자에 바로 호출하려면 소수점이 더 없음을 밝히기 위해 '..' 점 두 개를 사용함.

// isNaN : 인수를 숫자로 변환한 다음 NaN인지 테스트
// isFinite : NaN, Infinity, -Infinity가 아닌 일반 숫자인 경우 true반환

// parseInt, parseFloat : 숫자형으로 변환