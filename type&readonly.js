var 동물 = 123;
var 동물2 = { name: 'jack', age: 20 };
// type 변수는 작명 관습? 이 있음
//  1) 첫글자 대문자 2) 뒤에 type 붙이는거 (ex. AnimalType)
var 출생지역 = 'seoul';
// 출생지역 = 'busan'  => const 선언한 변수는 바뀌지 않음
var 출생지역2 = { region: 'seoul' };
출생지역2.region = 'busan'; // but, 등호로 재할당만 막는거지 object나 배열 수정은 자유롭게 가능
var girl = {
    name: '영희'
};
var peopleA = 'jack';
var peopleB = 20;
var positionXY = { x: 20, y: 30 };
var objectX = { x: 123, y: 'jack' };
var testType = {
    // color: 'jack',
    size: 123,
    position: [1, 2]
};
var checkType = {
    name: 'jack',
    phone: 333,
    email: 'jack@naver.com'
};
var checkType2 = {
    name: 'jack',
    phone: 333,
    email: 'jack@naver.com',
    adult: true
};
