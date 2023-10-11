// 보그 PJ - 공통 모듈 JS : common.js 

// 상단, 하단 공통 데이터 불러오기
import tData from "./data/com_module.js";
import dFn from "./dom.js";
// 부드러운 스크롤 모듈
import { startSS, setPos } from "./smoothScroll23.js";


// [1] 부드러운 스크롤 적용 //////////
startSS();

// [2] 상단/하단 공통 모듈 넣기 

// 대상선정: .top-area, .footer-area
const comArea = dFn.qsa('.common-area');

console.log(tData,comArea);

// 상단영역 HTML 넣기
comArea[0].innerHTML = tData.topArea;
// 하단영역 HTML 넣기
comArea[1].innerHTML = tData.footerArea;



