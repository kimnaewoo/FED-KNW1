// 달력구현 JS - calendar.js


// DOM 메서드 
const dFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
    fm : x => `
        ${x.getFullYear()}-${
            x.getMonth()+1 < 10 ?
            '0' + (x.getMonth() + 1) :
            x.getMonth() + 1
        }-${
            x.getDate() < 10 ?
            '0' + (x.getDate()) :
            x.getDate()
        }(${week[x.getDay()]})`
}; // dFn 객체 

// 요일변경 배열
const week = ['일','월','화','수','목','금','토'];


function makeDallyeok(){
    dFn.cg('달력만들어!');

    // 1. 변수셋팅
    // (1) 변경할 현재날짜 객체
    const currDate = new Date();
    // (2) 오늘날짜 객체 
    const today = new Date();
    // (3) 년도요소 : .yearTit
    const yearTit = dFn.qs('.yearTit');
    // (4) 월요소 : .monthTit
    const monthTit = dFn.qs('.monthTit');
    // (5) 일요소 : .dates
    const dates = dFn.qs('.dates');
    
    // dFn.cg(yearTit);
    // dFn.cg(monthTit);
    // dFn.cg(dates);

    // 2. 함수 만들기
    // (1) 달력 초기화구성 함수 
    const initDallyeok = () => {

        // [선택달 끝날짜, 첫날짜 알아오기]
        // new Date(년도,월,옵션)
        // 전달값
        // (1) 년도
        // (2) 월 
        // (3) 옵션 : 0 - 선택달끝날짜 / 1 - 다음달첫날짜

        // 1. 전달 마지막 날짜 (옵션:0) 
        // -> 달력처음 저번달 끝쪽날짜 표시

    }; // initDallyeok 함수

} // makeDallyeok 함수

// 달력함수 호출
makeDallyeok();