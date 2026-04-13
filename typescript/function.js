"use strict";
// 함수 매개변수 타입
// 함수의 형태 : return 이 있냐 없냐
// return이 있는 함수
function add(x, y) {
    return x + y;
}
// 위나 아래나 같은 함수 위아래 위위아래
const add2 = (x, y) => {
    return x + y;
};
//함수 호출
const sum = add(10, 20);
console.log(`합계: ${sum}`);
const sum2 = add2(10, 20);
console.log(`합계2: ${sum2}`);
// return이 없는 함수 = 반환값이 없음(Void)
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("김길수");
// return이 있는 함수 + 객체 반환
const createUser = (id, name, age) => {
    return {
        id: id,
        name: name,
        age: age
    };
};
const user01 = createUser(1, "김길수", 25);
console.log(`사용자 정보: ID: ${user01.id}, 이름: ${user01.name}, 나이: ${user01.age}`);
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const result = multiply(5, 3);
const divisionResult = divide(10, 2);
console.log(`곱셈 결과: ${result}`);
console.log(`나눗셈 결과: ${divisionResult}`);
