//변수: 타입 = 값;
let num: number = 5;
let season: string = "summer";
let seasons: string[] = ["spring", "summer", "fall", "winter"];
console.log(seasons[0]);

//학생의 과목 학점 정의
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

//학생의 과목 객체 정의
interface Course {
    courseId: number;
    courseName: string;
    grade?: Grade;
}

//학생 object
interface Student {
    readonly id: number;
    name: string;
    subject: Course[];//참조
}

// student1.id = 2; //readonly 속성은 수정 불가

let student1: Student = {
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