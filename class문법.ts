// JS 객체지향 class 문법

// 신버전
class Hero {
    constructor (a, b) {
        this.q = a,
        this.w = b
    }
}
let nunu = new Hero('consume', 'strike');



// 구버전
function 기계(a, b){
    this.q = a;
    this.w = b;
}

let nunu = new 기계('consume', 'strike')
console.log(nunu) // 기계 { q:'consume', w:'strike' }

