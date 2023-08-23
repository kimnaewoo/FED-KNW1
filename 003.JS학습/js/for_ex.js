// for문 연습1 : 외부 javascript 파일 - for_ex.js

// js외부파일은 html문서에 직접 들어가 작동되므로 CSS처럼 "utf-8" 인코딩설정이 필요없다

// 1. 대상선정 ////////////////

// 1-1. 이벤트대상 : 미니언즈 
var mini = document.querySelectorAll('.mini');
// 1-2. 출력대상 : 파란박스
var blue_box = document.querySelector('.Bcase');

console.log('미니언즈:',mini,blue_box);

// 2. 이벤트 연결하기 


// 3. 함수 만들기 /////////////////////////////////////////////////

// 3-1. 미니언즈 넣기함수

/*************************************************
    함수명 : insertMini
    기능 : 미니언즈 이미지 개수만큼 넣기 
*************************************************/
function insertMini(){
    // 1. 호출확인
    console.log('미니넣어');
} // insertMini 함수//////////////////////////////////////////////