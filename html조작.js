var 버튼 = document.getElementById('button');
if (버튼 instanceof Element) {
    버튼.addEventListener('click', function () { changeTitle(); });
}
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
var 링크 = document.querySelector('#link');
if (링크 instanceof HTMLAnchorElement) {
    // 링크.href = 'https://www.kakaocorp.com/page/'
}
// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
var 버튼2 = document.getElementById("button2");
버튼2 === null || 버튼2 === void 0 ? void 0 : 버튼2.addEventListener("click", function () { changeImg(); });
var changeImg = function () {
    var image = document.querySelector('#img');
    console.log(image);
    if (image instanceof HTMLImageElement) {
        image.src = "https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg";
    }
};
// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
var 버튼3 = document.getElementById('button3');
버튼3 === null || 버튼3 === void 0 ? void 0 : 버튼3.addEventListener('click', function () {
    // console.log(버튼3)
    changeHref();
});
var changeHref = function () {
    var link = document.querySelectorAll('.naver');
    console.log(link);
    link.forEach(function (v) {
        if (v instanceof HTMLAnchorElement) {
            v.href = "https://www.kakaocorp.com/page/";
        }
    });
    // 이제 for문 고만쓰자 신문물을 쓰자.
    // if(link instanceof HTMLAnchorElement) {
    //     for(let i=0; i<link.length; i++) {
    //         link[i].href = ""
    //         console.log(link[i].href)
    //     }
    // }
};
