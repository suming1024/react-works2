
// //객체의 형태 정의 - interface
// interface Person {
//     name: string;
//     age: number;
// }

// //person 객체 사용
// let person : Person = {
//     name: "홍길동",
//     age: 25
// }

// let person2 : Person = {
//     name:"장그래",
//     age: 30
// }

// //출력
// console.log(`이름: ${person.name}, 나이: ${person.age}`);
// console.log(`이름: ${person2.name}, 나이: ${person2.age}`);

// ? : 선택적 속성!
//readonly id: number; : 읽기 전용이라 수정불가
interface User{
    readonly id: number;
    name: string;
    age?: number;
}

let user1: User = {
    id:1,
    name:"김길수"
}

let user2: User = {
    id:2,
    name:"정수민",
    age: 30
}

//이름변경
user2.name = "정반달";

// console.log(`이름: ${user1.name});
console.log(`이름: ${user1.name}, 나이: ${user1.age}`);
console.log(`이름: ${user2.name}, 나이: ${user2.age}`);
