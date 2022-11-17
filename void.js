// [함수에 타입 지정하는 법 & void 타입]
var y; // type 지정 안해주면 any 타입이 지정됨
// 함수에도 type 지정해줘야됨 안해주면 위에 let y처럼 any 타입이 지정됨.
// 매개변수에 type 지정 해줄 뿐 아니라 return 값에도 type지정 가능
function 함수(x) {
    return x * 2;
}
함수(3);
function 함수2(x) {
    // return x + 1 // void타입을 활용하면 return 이 들어오면 오류를 뱉어준다
}
// 함수2() //오류를 뱉어줌
// 자바스크립트와 다른 점 - 타입지정된 함수는 파라미터가 필수임! 
function 함수3(x) {
    return x + 2;
}
함수3(); //오류 x
// 파라미터가 옵션일 경우엔 (파라미터변수?: 타입)
// ? 연산자는 들어올 수도 있다~ 라는 뜻인데, 자바스크립트에서 매개변수가 없는 경우 자동 undefined가 할당 됩니다!
// 따라서 (x?: number) 는 (x: number | undefined) 와 동일함.
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//     아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다"를 출력하는 함수를 만들어봅시다.
function hello(x) {
    if (x !== undefined) { // 그냥 if(x)로 하면 되는군용
        console.log('안녕하세요' + x);
    }
    else {
        console.log('이름이 없습니다');
    }
}
// Q2. 함수에 숫자 또는 문자를 넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function count(x) {
    var stringX = x.toString();
    return stringX.length;
}
// Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1) 함수의 파라미터로 월소득, 집 보유여부(true/false), 매력점수('상' or '중' or '하')를 입력할 수 있어야합니다.
// 2) 월 소득은 만원 당 1점, 집 보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3) 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return 하지 않습니다.
function marry(x, y, z) {
    var countY = y === true ? 500 : 0;
    var countZ = z === '상' ? 100 : 0;
    if (x + countY + countZ >= 600) {
        return "결혼가능";
    }
}
marry(800, true, '상'); // 이고싶다
