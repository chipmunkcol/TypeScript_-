
document?.getElementById('button')?.addEventListener('click', ()=>{changeTitle()})

type 함수타입 = () => void
const changeTitle: 함수타입 = () => {
    let 제목 = document.querySelector('#title');
    if (제목 !== null){
        제목.innerHTML = '반가워용'
    }
}

// 또는 instanceof 연산자 사용 이거를 제일 많이씀
// if (제목 instanceof Element){
//     제목.innerHTML = '반가워용'
// }
// 또는 as Element로 사기치기
// let 제목2 = document.getElementById('title') as Element;
// if(제목2 instanceof Element){
//     제목2.innerHTML = '웨 안바껴!!'
// }


let 링크 = document.querySelector('.link')
if(링크 instanceof HTMLAnchorElement){
    링크.href = 'https://www.kakaocorp.com/page/'
}



