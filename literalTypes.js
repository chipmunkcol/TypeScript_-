var 나는;
나는 = 'TS';
function 안녕함수(a) {
    return 1; // or 0
}
안녕함수('hello'); // 오 자동완성 댕쩌넹
function 가위바위보함수(a) {
    return [a];
}
가위바위보함수('가위');
// Literal type의 문제점
var 자료 = {
    name: 'jack'
};
function 함수1(a) {
}
// 함수(자료.name) => 'jack' 이라는 type만 올수 있어서 자료.name이 'jack'이지만 오류남 
