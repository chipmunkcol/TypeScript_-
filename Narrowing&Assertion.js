// 타입 확정하기 Narrowing & Assertion
function narrowing(x) {
    if (typeof x === "string") {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
narrowing(2);
// 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작가능!
function narrowingArray(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
        null; // else 문이 없으면 간혹 예상치 못한 type 에러 등이 일어날 수 있으니 else 작성을 습관하하자!
    }
}
// 아니면 assertion 문법 (타입 덮어쓰기)
function assertion(x) {
    var array = [];
    array[0] = x;
}
// assertion 용도 
// 1.Narrowing 
var name2 = 'jack';
// name2 as number; Narrowing 일 뿐 타입을 a에서 b로 변경하는게 x
// 2. 무슨 타입이 들어올지 100% 확실할 때 써야됨
assertion('123'); // 29번 줄 보면 x as number인데 이런 버그 캐치를 못함 
// => 2번 때문에 assertion 거의 안씀 
// 사실 3가지 경우에 유용할 때도 있음 
// 1) 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
// 2) 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
// 3) 타입을 강제로 부여하고 싶을 때
// Q1.숫자 여러개를 array 자료에 저장해놨는데 가끔 문자타입 숫자가 발견됨.
// 이걸 클리닝해주는 함수가 필요함. 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function cleaning(x) {
    var cleanArray = [];
    x.map(function (v) {
        if (typeof v === 'string') {
            cleanArray.push(Number(v));
        }
        else {
            cleanArray.push(v);
        }
    });
    return cleanArray;
}
console.log(cleaning(['12345', '0', 3]));
// Q2.다음과 같은 함수를 만들어 보십시도
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
// 철수쌤같은 선생님 object 자료를 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 
function lastSubject(x) {
    Object.values();
}
