// 01.공유신발 JSX
import myData from './data.js';
import myData2 from './data2.js';
// JS 기능함수 : 순수 자바스크립트 함수 호출!
import { initFn,firstOneFn } from './act_effect.js';

// 두개의 데이터를 배열로 구성 
const twoData = [myData,myData2];

// console.log('통합데이터:',twoData);

// [ 메인 컴포넌트 ]
// 메인의 의미는 ? 다른 구성요소 컴포넌트들을 모아 최종적으로 렌더링하는 구성 컴포넌트를 말한다.
function MainComponent(){
    
    // 상태관리 메서드를 사용하여 후크변수를 설정하자!
    // const [변수명,set변수명] = React.useState(초기값)
    // dataNum은 데이터를 구분하는 번호저장 후크변수다!
    // 데이터 구분값으로 배열순번을 생각하여 처음에 로딩될 데이터가 0번째 즉, 첫번째 배열순번 데이터를 값으로 셋팅한다!

    // 1. [ 후크 상태관리 변수 셋팅 ]
    const [dataNum,setDataNum] = React.useState(0);

    // 2. 리스트/ 상세보기 상태관리변수 
    const [subView,setSubView] = React.useState(0);

    // 3. 선택 아이템 고유번호 상태관리 변수 
    const [selItem,setSelItem] = React.useState(0);

    // 4. JS 효과적용여부 상태관리변수 
    const [effectOK,setEffectOK] = React.useState(1);

    /////////////////////////////////////////////////////////////////////////////

    // 테스트 후크상태변수 
    const [test,setTest] = React.useState(0);

    // console.log('최초값:',dataNum);

    // 가상돔에서 실제돔에 반영후 DOM에 구현할 JS코드는 어디에 넣어야 하는가..!
    // -> useEffect() 
    // -> useLayoutEffect()

    console.log( // '컴포넌트그냥구역:',document.querySelector('.img-box')
    );
    
///////////////////////////////////////////////////////////////////////////////////////////////////
    // [ 리액트 컴포넌트 랜더링 후 실햄함수 호출하기!! ]

    // [ 1. 컴포넌트가 뿌려지기 전 애니메이션 적용하기 ]
    React.useLayoutEffect(()=>{if(effectOK)initFn()});

    //[ 2. 처음 한번만 타이틀 글자 커졌다가 작아지기 ]
    React.useEffect(()=>{if(effectOK)firstOneFn()},[]);
//////////////////////////////////////////////////////////////////////////////////////////////////

    // [ useEffect 테스트 코드 ]
    // 순수 useEffect 
    // -> 매번 업데이트 시에도 실행함! 
    React.useEffect(()=>{
        console.log('useEffect 순수');
        // console.log('컴포넌트순수JS:',document.querySelector('.img-box'));
        // console.log('컴포넌트제이쿼리:',$('.img-box'));
    });
    
    // 빈 배열옵션 useEffect 
    // -> 페이지 로딩후 단 한번만 실행함! 
    React.useEffect(()=>{
        console.log('useEffect 빈 배열옵션');
    },[]);
    
    // 의존성 배열옵션 useEffect 
    // -> 페이지 로딩후 단 한번만 실행함! 
    React.useEffect(()=>{
        console.log('useEffect 의존성 배열옵션 test');
    },[test]);
    React.useEffect(()=>{
        console.log('useEffect 의존성 배열옵션 dataNum');
    },[dataNum]);
    // 의존성이 다수일 경우 [] 배열형태의 옵션에 콤마로 연결하여 등록해준다!
    
    // 랜더링 후 화면출력전 상태 
    React.useLayoutEffect(()=>{
        // 버튼을 display:none 
        // $('.btn-gong').hide();
    })

    // 의존성 테스트 함수
    const testFn = ()=>{
        setTest(test?0:1)
        console.log('test 후크변수 변경!',test);

    }; // testFn 함수 

    /*************************************************************************************************************** 
        함수명 : chgData
        상태변수 : dataNum / setDataNum
        기능 : 상태관리 변수 중 데이터 선택번호 업데이트를 하여 화면의 상품리스트를 업데이트 한다!
    **************************************************************************************************************/

    // 데이터 변경호출 함수 
    const chgData = () => {
        // 데이터 키 후크변수를 업데이트함 
        setDataNum(dataNum?0:1);
        console.log('업데이트값:',dataNum);
    }; // chgData 함수 

     /*************************************************************************************************************** 
        함수명 : chgSubView
        상태변수 : 
           (1) 뷰전환 : subView / setSubView
           (2) 선택아이템 : selItem / setSelItem
           (3) 효과상태 : effectOK / setEffectOK 
        기능 :  상태관리 변수 중 리스트/상세보기 선택변수를 업데이트를 하여 실제뷰를 전환 한다!
    **************************************************************************************************************/
    const chgSubView = (num,idx) => {
        // a요소 기본이동 막기
        event.preventDefault();

        console.log('뷰바꿔',num,'/고유번호:',idx);

        // 1. 리스트/상세보기 뷰 상태관리변수 변경하기 
        setSubView(num);
        // 2. 선택아이템고유번호 변경 
        setSelItem(idx);
        // 3. JS 효과상태 변경 
        setEffectOK(0);

    }; // chgSubView 함수

// 최종 리턴 코드 
// 함수, 변수, 구현소스는 모두 return 위쪽에 코딩한다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return(
        <React.Fragment>
           {/* 1. 타이틀  */}
           <h1 className="tit">{dataNum?'효진이 입고':'공유가 신고'} 다닌다는!</h1>
           {/* 2. 내용박스 */}
            <section> 
                <h2>{dataNum?'김효진말고 공효진~':'공유발은 지네발~'} </h2>
                {/* 이미지 */}
                <div className="img-box">
                    <img src={dataNum?'https://www.sisanews.kr/news/photo/201601/16647_13007_488.jpg':'./images/vans/gongyoo.jpg'} alt={dataNum?"효진":"공유"}/>
                </div>
            </section>
            {/* 3. 데이터 변경 버튼 */}
            <button onClick={()=>{chgData();setEffectOK(1);}} className="btn-gong">
                {dataNum?'공유초이스 바로가기':'효진초이스 바로가기'}
            </button>
            <button onClick={testFn}>의존성테스트</button>
            {/******************************************** 
                4. 상품리스트박스 
                상태관리변수를 생성하여 리스트/상세보기를 전환한다. 
            ********************************************/}
            <div className="gwrap">

                { // 상품리스트 컴포넌트 출력 
                subView==0 &&
                    <GoodsCode idx={dataNum} chgFn={chgSubView} />}
                { // 상품 상세보기 컴포넌트 출력 
                // 부모의 함수 chgSubView를 props로 전달함 
                // 변수명에 할당하는 방식으로 전달!
                // 자식컴포넌트는 props.속성명() 방식으로 호출!
                subView==1 &&
                    <SubViewCode idx={dataNum} chgFn={chgSubView} itemNum={selItem} />}
                    
            </div>
        </React.Fragment>
    );
} // MainComponent 컴포넌트 

// console.log(myData);

// 서브 컴포넌트 (자식컴포넌트 -> 부모컴포넌트로 부터 데이터를 props 속성을 통하여 전달받는다.)
/*************************************************************************************** 
   * 서브컴포넌트 1 : GoodsCode
   * 상품리스트 HTML 코드 구성 컴포넌트
***************************************************************************************/
function GoodsCode(props){ // idx - 데이터 배열순번 
    // 선택데이터 
    const selData = twoData[props.idx];

    // 코드 리턴 
    return(selData.map((v)=> (
        /* props.chgFn(뷰상태1,) */
        <a href="#" onClick={()=>props.chgFn(1,v.idx)}>
            <ol className="glist">
                <li>
                    <img src={
                        props.idx?
                        "./images/gallery/"+v.idx+".jpg": 
                        "./images/vans/vans_"+v.idx+".jpg" } 
                        alt={props.idx?"드레스":"신발"}/>
                </li>
                <li>{v.gname}</li>
                <li>가격 : {v.gprice}원</li>
            </ol>
        </a>
    )));
} // GoodsCode 컴포넌트 

/*************************************************************************************** 
   * 서브컴포넌트 2 : SubViewCode
   * 상품 상세보기 HTML 코드 구성 컴포넌트
***************************************************************************************/
function SubViewCode(props){
    // props.idx - 선택데이터 순번(신발,드레스)
    // props.chgFn() 함수로 사용가능! -> 부모 chgSubView()함수로 호출하는것과 동일 -> 프롭스다운, 프롭스 펑션 업/다운
    // props.itemNum - 선택아이템번호 

    // 선택 전체 데이터 
    const selData = twoData[props.idx]
    // 선택 데이터 
    const selItem = selData.find(v=>{
        if(v.idx == props.itemNum) return true;
    })
    // -> 고유데이터인 idx값으로 데이터를 찾아서 데이터를 화면에 바인딩해야한다.

    // 코드 리턴 
    return(
        <ol style={{display:'flex',listStyle:'none'}}>
            <li>
                <img src={
                    props.idx?
                    "./images/gallery/"+selItem.idx+".jpg": 
                    "./images/vans/vans_"+selItem.idx+".jpg" 
                } alt={props.idx?"드레스":"신발"}/>
            </li>
            <li style={{lineHeight:'8',padding:'10px'}}>
                상품명 : {selItem.gname} <br />
                가격 : {selItem.gprice}원 <br />
                <button onClick={()=>props.chgFn(0,0)}>리스트로 가기</button>
            </li>
        </ol>
    );
} // SubViewCode 컴포넌트 


// 메인컴포넌트 출력하기 
ReactDOM.render(<MainComponent/>,document.querySelector('#root'));