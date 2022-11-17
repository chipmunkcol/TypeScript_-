// 타입을 미리 정하기 애매할 때 (union type, any, unknown)

// 1. Union Type (타입 2개 이상 합친 새로운 타입 만들기)
let union: (number | string) = 'jack';
let unions: (number | string) [] = [1, 2, 'jack'];

let objectUnion: {a: string | number} = { a: 'jack' }

// 2. 모든 자료형이 가능한 type -> 'any'
let typeAny: any;
typeAny = 123;
typeAny = [];
// let 변수1: string = typeAny;

// 3. any쓸거면 타입스크립트 쓰는 이유가없지! 비슷하지만 다른 unknown을 쓰자!
let typeUnknown: unknown;
typeUnknown = 123;
typeUnknown = {};
// =>
// let 변수1 :string = typeUnknown;  지금 typeUnknown 이 object 형식인데 string에 넣으려니까 오류를 뱉어주는 모습 (any는 가능)
// let 변수2: boolean = typeUnknown;
// let 변수3: number = typeUnknown;

// 4. TS는 엄근진이라 간단한 수학연산도 타입 맞아야됨

    // 1) 이건 unknown이라는 타입이지 숫자가 아니어서 안됨
    // let typeUnknown: unknown;
    // typeUnknown - 1  << 이거 안됨

    // 2) Union 타입은 string or number가 아니라 string | number 라는 새로운 타입이어서 안됨
    // let typeUnion: string | number;
    // typeUnion - 1; 

    // => 이를 해결하려면 Narrowing / Assertion 을 배워서 엄격하게 코드짜면됨~


// Q0. array, object 자료 만들 때 union type 어떻게 쓸까용
let array: (number | string)[] = [1, '문자도있지롱', 3]
let object: { data: (string | number) } = { data: 'string' }

// => 변수에 정의된 Union 타입은 할당과 동시에 or 역할이 사라짐.
//    array, object에 정의된 Union 타입은 or 연산자가 유지됨.

// Q1. 다음 변수 4개에 타입을 지정해봅시다.
let user: string = 'kim';
let age2: undefined | number = undefined;
let married2: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married]

// Q2. 학교라는 변수에 타입을 지정해보십시오.
let 학교 : {
    score: (number | boolean)[], 
    teacher: string, 
    friend: string | string[] 
} = {
    score: [100, 96, 87],
    teacher: 'jack',
    friend: 'june'
}
학교.score[4] = false;
학교.friend = ['lee', 학교.teacher]