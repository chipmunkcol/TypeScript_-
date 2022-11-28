// type alias (type 으로 변수 만드는거) 
type Animal = string | number | undefined;
let 동물: Animal = 123;

type Animal2 = {name: string, age: number}
let 동물2: Animal2 = {name:'jack', age:20}

// type 변수는 작명 관습? 이 있음
//  1) 첫글자 대문자 2) 뒤에 type 붙이는거 (ex. AnimalType)

const 출생지역 = 'seoul';
// 출생지역 = 'busan'  => const 선언한 변수는 바뀌지 않음

const 출생지역2 = { region: 'seoul' };
출생지역2.region = 'busan' // but, 등호로 재할당만 막는거지 object나 배열 수정은 자유롭게 가능

type friend = {
    readonly name: string
}

const girl : friend = {
    name: '영희' 
}
// girl.name = '이슬' => readonly 로 읽기전용을 만들어주면 object나 배열도 수정 불가


// type alias -> union type으로 만들기 가능
type Name = string;
type Age = number;
type person = Name | Age
let peopleA : person = 'jack';
let peopleB : person = 20;

// type extend(확장)가능 
type positionX = {x : number}
type positionY = {y : number}
type newType = positionX & positionY
let positionXY : newType = { x: 20, y: 30 };


// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type objectNumber1 = { x: number }
type objectNumber2 = { y: string }
type newObject = objectNumber1 & objectNumber2

let objectX : newObject = { x: 123, y: 'jack' }
// object 타입은 extend(확장)되니까 첫번째 두번째 type이 정해지는거 아닌가?

// (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
type myType = { 
    color?: string,
    size: number,
    readonly position: number[]
 } 

let testType : myType = {
    // color: 'jack',
    size: 123,
    position: [1,2]
}

// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
type FilterType = {
    name: string,
    phone: number,
    email: string
}

let checkType : FilterType = {
    name: 'jack',
    phone: 333,
    email: 'jack@naver.com'
};

//(숙제4). 다음을 만족하는 type alias를 만들어보십시오.
type FilterType2 = { adult: boolean }
type ExtendType = FilterType & FilterType2

let checkType2 : ExtendType = {
    name: 'jack',
    phone: 333,
    email: 'jack@naver.com',
    adult: true
};

