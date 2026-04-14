
//문자열
let message : string = "hello, world!"
console.log(message);

//숫자열
let age : number = 30;
console.log(`나이:${age}세`);

//불리언
let isStudent : boolean = true;
console.log(`학생인가요? ${isStudent}`);

//배열 (1) : string[]
let cart: string[] = ['사과','바나나','우유']
console.log(`장바구니: ${cart.join(', ')}`);

//배열 (2) : Array<string>
//<T> : 제네릭(generic) 표기
let carts: Array<string> = ['사과','바나나','우유']
console.log(`장바구니: ${carts.join(', ')}`);

//any : 모든 타입 허용 (사용 자제 부탁)
let value: any = 10;

value = "문자열도 가능"
value = true
value = [1,2,3] 

console.log(value);