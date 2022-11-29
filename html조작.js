var _a;
(_a = document === null || document === void 0 ? void 0 : document.getElementById('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { changeTitle(); });
var changeTitle = function () {
    var 제목 = document.querySelector('#title');
    if (제목 !== null) {
        제목.innerHTML = '반가워용';
    }
};
// 또는 instanceof 연산자 사용 이거를 제일 많이씀
// if (제목 instanceof Element){
//     제목.innerHTML = '반가워용'
// }
// 또는 as Element로 사기치기
// let 제목2 = document.getElementById('title') as Element;
// if(제목2 instanceof Element){
//     제목2.innerHTML = '웨 안바껴!!'
// }
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://www.kakaocorp.com/page/';
}
