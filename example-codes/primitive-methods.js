let str = "Hello";
str.test = 5;
console.log(str.test);
//  문자열에 프로퍼티를 추가하려하면 엄격모드는 wrapper객체 수정 할 때 에러.
//  비엄격모드는 수정이 가능하지만 래퍼객체는 바로 삭제되므로 마지막 줄 실행시 test를 찾지 못함.