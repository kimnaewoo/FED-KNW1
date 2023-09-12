//  네이게이션 유형 4 JS - nav04.js
// 세로네비 서브별 드롭다운 세로형

const domFn = {
  // 요소선택함수 ////////
  qs: (x) => document.querySelector(x),
  qsEl: (el, x) => el.querySelector(x),
  qsa: (x) => document.querySelectorAll(x),
  qsaEl: (el, x) => el.querySelectorAll(x),

  // 이벤트셋팅함수
  addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

// 1. 구현 요구사항:
// 상위메뉴 클릭시 하위메뉴 나타나기
// 영역을 벗어날때 하위메뉴 닫기

// 2. 대상선정
// 이벤트 대상: .gnb > ul > li
// 변경 대상: .smenu -> 클릭된 이벤트 대상 하위요소

const gnbList = domFn.qsa(".gnb>ul>li");
// console.log(gnbList);

// 3. 이벤트 설정하기
gnbList.forEach((ele) => {
  domFn.addEvt(ele, "click", showSub);
}); // forEach

// 4. 함수 showSub 생성
function showSub() {
  // this 는 클릭된 li요소 자신!
  console.log("나야나!", showSub, this);

  // 1. 서브메뉴 유무 판별하기
  // -> .smenu가 하위에 있는지 여부를 알아내기
  let isSub = domFn.qsEl(this, ".smenu");
  console.log("서브결과:", isSub);

  // [서브메뉴가 있는 li 클릭시]
  // 조건문 조건식에 null값은 false 처리 된다.
  if (isSub) {
    // .smenu가 있는 경우만 들어온다
    // 2. 서브메뉴 내부 ol 박스 높이값 읽기
    let hv = domFn.qsEl(isSub, "ol").clientHeight;
    console.log("처리해봐", hv);

    // 3. .smenu(isSub) 현재 li의 높이값 적용하기
    // 토글기능구현 : isSub의 높이가 0이면 hv, 아니면 0 
    // isSub.clientHeight==0? hv : 0
    isSub.style.height = (isSub.clientHeight==0? hv:0) + "px";

    // 4. 클릭된 li 이외의 li 서브는 닫기
    // 방법: 전체 li를 순회하며 현재 li만 빼고 처리
    // 사용할 DOM메서드 : 요소.isSamweNode(비교요소)
    // -> 같은요소면 true 다른요소면 false값 리턴
    gnbList.forEach((ele) => {
      // 판별결과
      let result = ele.isSameNode(this);
      console.log("같니?", result);
      // 결과처리: false 일때만 높이값 0처리
      // false일때 true처리하려면 논리부정(!) 사용한다.

      // 처리대상변수 : 순회하며 li하위 .smenu담기
      let target = domFn.qsEl(ele, ".smenu");

      // 현재 노드와 같은 li는 처리하지 않는다.
      if (!result) {
        // false일때 들어온다.
        // 하위에 .smenu가 없으면 처리안함!
        if (target) target.style.height = "0px";
      } // if
    }); // forEach
  } // if
  // 서브가 없는 li클릭시 서브있는것을 모두 닫기!

  // [서브가 있는 li클릭시 서브 없는것을 닫기]
  else {
    gnbList.forEach((ele) => {
      // 처리대상변수 : 순회하며 li하위 .smenu담기
      let target = domFn.qsEl(ele, ".smenu");
      // 하위에 .smenu가 없으면 처리안함!
      if (target) target.style.height = "0px";
    }); // forEach
  } // else
} // showSub 함수
