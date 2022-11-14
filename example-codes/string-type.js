// 문자열 길이
console.log('aaa'.length);  // length는 함수가 아닌 프로퍼티

let str = 'hello';
console.log(str[0]);
console.log(str.charAt(0));
console.log(str[str.length-1]);
console.log(str[1000]); // undefined
console.log(str.charAt(1000));  // '' (빈 문자열)

for (let char of "hello"){
    console.log(char);
}

// 문자열은 불변
// 이를 해결하려면 새로 만들고 재할당 하는 것.
str = 'Hi';
str = 'h'+str[1];
console.log(str);

// 문자열을 포함하는지 여부를 파악하는 includes(substr, pos)
// pos를 주면 해당 위치부터 탐색, 없을 경우 처음부터 탐색
console.log("Widget with id".includes("Widget"));   // true
console.log("Hello".includes("Bye"));   // false

// startsWith, endsWith
console.log("Widget".startsWith("Wid"));    // true, Wid로 시작함
console.log("Widget".endsWith("get"));      // true, get으로 끝남

// slice
str = "stringfy";
console.log(str.slice(0,5));    // strin, 0이상 5미만 위치까지
console.log(str.slice(0,1));    // s, 0이상 1미만 위치까지
console.log(str.slice(2));      // 두 번째 인수가 생략된 경우 명시 위치부터 끝까지 반환

// substring(start, end) - start, end사이에 있는 문자열을 반환
console.log(str.substring(2,6));    // ring
console.log(str.substring(6,2));    // ring, 범위 사이 값을 반환하기 때문에 두 개가 동일한 결과를 반환
// slice는 시작 위치와 길이를 기준으로 하므로, (2,6) 과 (6,2)가 서로 다른 값을 반환

// substr(start, length) - start에서 시작해 length개의 글자를 반환
console.log(str.substr(2,4));   // ring
console.log(str.substr(-4,2));  // ng, 첫 인수가 음수면 끝에서부터 n번째 위치에서 length개를 셈

// codePointAt(pos) - pos에 위치한 글자의 '코드'를 반환
console.log("z".codePointAt(0));    // 122
console.log("Z".codePointAt(0));    // 90

// fromCodePoint(code) - 숫자 형식의 code에 대응하는 글자를 만듦
console.log(String.fromCodePoint(90));  // Z
console.log("\u005a");  // Z, \u뒤에 특정 글자에 대응하는 16진수 코드를 붙여서도 변환 가능

str = ''
for (let i = 65; i<= 220; i++){
    str += String.fromCodePoint(i);
}
console.log(str);