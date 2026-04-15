"use strict";
//변수: 타입 = 값;
let num = 5;
let season = "summer";
let seasons = ["spring", "summer", "fall", "winter"];
console.log(seasons[0]);
student1.id = 2; //readonly 속성은 수정 불가
let student1 = {
    id: 1,
    name: "김종국",
    subject: [
        {
            courseId: 101,
            courseName: "수학",
            grade: "A"
        },
        {
            courseId: 102,
            courseName: "영어",
            grade: "B"
        }
    ]
};
console.log(`학생01 id: ${student1.id}, name: ${student1.name}`);
// 객체 반복문 - forEach()
student1.subject.forEach((subject) => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
});
