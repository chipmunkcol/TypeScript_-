let 나는 : 'TS' | '마스터';
나는 = 'TS'

function 안녕함수(a : 'hello') : (1 | 0) {
    return 1 // or 0
}
안녕함수('hello') // 오 자동완성 댕쩌넹

function 가위바위보함수(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[] {
    return [a]
}
가위바위보함수('가위')

// Literal type의 문제점
let 자료 = {
    name : 'jack'
}

function 함수(a : 'jack'){

}
// 함수(자료.name) => 'jack' 이라는 type만 올수 있어서 자료.name이 'jack'이지만 오류남 


