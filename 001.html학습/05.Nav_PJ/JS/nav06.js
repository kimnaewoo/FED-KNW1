//  네이게이션 유형 4 JS - nav04.js
// 가로네비 서브별 드롭다운 전체창

const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

// 1. 구현 요구사항
// GNB 메뉴의 데이터를 모두 html DOM으로 구조화하여 화면에 출력한다.

// 2. 대상선정 : .gnb
const gnbBox = domFn.qs(".gnb");
console.log("대상:", gnbBox);
let hcode='';
// 3. 객체 데이터로 html 코드 만들기

for (let x in mdata) {
  console.log("속성명:", x);
  hcode+=
  `
  <ul>
    <li>
        <a href="">${x}</a>
        <div class="smenu">
            <aside class="smbx">
                <h2>
                    <div class="stit">2차</div>
                    <a href="">전체보기</a>
                    <div class="swrap">
                        <dl>
                            <dt></dt>
                            <dd><a href="">요기</a></dd>
                        </dl>
                    </div>
                </h2>
            </aside>
        </div>
    </li>
</ul>
  `;
} // for in 

// 확인
console.log('코드:',hcode);

