let 버튼 = document.getElementById('button')
if(버튼 instanceof Element){
    버튼.addEventListener('click', ()=>{changeTitle()})
}

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


let 링크 = document.querySelector('#link')
if(링크 instanceof HTMLAnchorElement){
    // 링크.href = 'https://www.kakaocorp.com/page/'
}


// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
let 버튼2 = document.getElementById("button2")
버튼2?.addEventListener("click", ()=>{changeImg()})

type ImgType = () => void  
const changeImg : ImgType = () => {
    let image = document.querySelector('#img')
    console.log(image)
    if (image instanceof HTMLImageElement) {
        image.src = "https://cdn.crowdpic.net/list-thumb/thumb_l_572442AD59D1F0170C27B68AC7F4377A.jpg"
    }   
}

// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
let 버튼3 = document.getElementById('button3')
버튼3?.addEventListener('click', ()=>{
    // console.log(버튼3)
    changeHref();
})

type HrefType = () => void;
const changeHref : HrefType = () => {
    let link = document.querySelectorAll('.naver');
    console.log(link)

    link.forEach((v)=>{
        if(v instanceof HTMLAnchorElement) {
            v.href = "https://www.kakaocorp.com/page/"
        }
    })

    // 이제 for문 고만쓰자 신문물을 쓰자.
    // if(link instanceof HTMLAnchorElement) {
    //     for(let i=0; i<link.length; i++) {
    //         link[i].href = ""
    //         console.log(link[i].href)
    //     }
    // }
}

