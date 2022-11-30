// JS 객체지향 class 문법
// 신버전
var Hero = /** @class */ (function () {
    function Hero(a, b) {
        this.q = a,
            this.w = b;
    }
    return Hero;
}());
var nunu = new Hero('consume', 'strike');
// 구버전
function 기계(a, b) {
    this.q = a;
    this.w = b;
}
var nunu = new 기계('consume', 'strike');
console.log(nunu); // 기계 { q:'consume', w:'strike' }
