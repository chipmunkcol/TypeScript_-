// () => { return } 여기서 {}랑 return 같이 생략가능하니 그거라고 생각하면됨
// 이 함수type은 함수 표현식에만 장착 가능
var 함수4 = function (a) {
    return 10;
};
함수4(1);
// object안에 함수 저장 가능 => type지정은 어떻게?
var 회원정보 = {
    name: 'jack',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안뇽');
    }
};
var 회원정보2 = {
    name: 'jack',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안뇽');
    }
};
회원정보2.plusOne(1); // 2
회원정보2.changeName(); //안뇽
var cutZero = function (a) {
    var 맨처음글자 = a.slice(0, 1);
    if (맨처음글자 === '0') {
        return a.slice(1, a.length);
    }
    else {
        return a;
    }
};
