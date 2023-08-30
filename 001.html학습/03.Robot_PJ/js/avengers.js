// 어벤저스 JS - avengers.js

// 초기 데이터 셋팅하기
// 데이터 : 어벤저스 데이터 - data.js > charactor

// console.log('charactor');

// 공통 DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// 어벤저스 캐릭터 박스 셋팅하기
// 대상선정 : .avengers-box
const avengers = qs(".avengers-box");

console.log("대상:", avengers);

// 2. 데이터 자동 순회하여 태그 만들기
// html코드 변수
let hcode = "";

let num = 1;

// 3. html 코드를 만들어준다.
for (let x in charactor) {
    // 변수 x는 객체의 속성이다!
    // 객체값은 객체변수[x]
    // console.log(x,'/',charactor[x]);
    

    // num 이 3이상일때는 .txt에 .right를 추가한다. 
    hcode += `
    <!-- ${num}. ${x} -->
    <div class="hero">
        <!-- 이미지 -->
        <img src="./ab_img/${charactor[x]['이미지명']}.png" alt="${x}">
        <!-- 소개글박스 -->
        <article class="txt${num>=3?" right":""}">
            <div>
                <h3>${x}</h3>
                <p>${charactor[x]['설명']}</p>
            </div>
        </article>
    </div>
    `;
    
    // 주석번호 증가
    num++;

} // for in문 ////


// 생성된 html 확인
console.log(hcode);

// 3. 대상에 html 넣어 출력하기
avengers.innerHTML = hcode;


/************************************************* 
    [ 객체를 위한 for in 문 ]

    - 구문: 
    for(변수 in 객체){코드}

    - 작동원리:
    객체의 개수만큼 순서대로 속성명과 속성값을 가져옴

    - 변수는 객체의 속성명이다!

    - 객체의 값을 사용하려면 for in 문 안에
        객체[변수] 로 쓰면됨!

*************************************************/
