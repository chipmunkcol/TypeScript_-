
type FunctionType = (a: number) => number;
// () => { return } 여기서 {}랑 return 같이 생략가능하니 그거라고 생각하면됨

// 이 함수type은 함수 표현식에만 장착 가능
let 함수4 : FunctionType = (a) => {
    return 10
}
함수4(1)

// object안에 함수 저장 가능 => type지정은 어떻게?
let 회원정보 = {
    name: 'jack',
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log('안뇽')
    }
}


// (숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 
type 회원Type = {
    name: string,
    plusOne: (a : number) => number,
    changeName: () => void
}

let 회원정보2 : 회원Type = {
    name: 'jack',
    plusOne(a) {
        return a + 1;
    },
    changeName: () => {
        console.log('안뇽')
    }
}
회원정보2.plusOne(1) // 2
회원정보2.changeName() //안뇽


// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

type 함수type = (a: string) => string;
const cutZero : 함수type = (a) => {
    const 맨처음글자 = a.slice(0, 1);

    if (맨처음글자 === '0'){
        return a.slice(1, a.length)
    } else {
        return a
    }
}
cutZero('0123')

