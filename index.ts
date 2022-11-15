let 이름 :string = 'kim';
let age :number = 50;
let married :boolean = false;
let noValue :undefined = undefined;
let noValue2 :null = null;

let arrayNames :string[] = ['kim', 'jack'] // 문자만 담긴 array만 가능!
let objectNames :{ member1: string, member2: string } = { member1: 'kim', member2: 'jack' }
// Type Script는 타입 지정 거의 자동으로 해줌 (타입지정 문법 생략가능!)

// Q1. 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
const myName: string = 'YongKyu Lee';
const myAge: number = 29;
const myPlaceOfBirth: string = "seoul";

// Q2. 좋아하는 노래와 가수이름을 변수에 object 자료형으로 담아 봅시다.
const myLoveSong:{ song: string, singer: string } = { song: 'lovelove', singer: 'KidWine' }

// Q3. 아래 자료의 타입지정을 해봅시다.
let project:{
  member: string[],
  days: number,
  started: boolean,
} = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}