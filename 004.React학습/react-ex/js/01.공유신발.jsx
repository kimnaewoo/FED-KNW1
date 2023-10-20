// 01.공유신발 JSX
import myData from './data.js';
import myData2 from './data2.js';

// 두개의 데이터를 배열로 구성 
const twoData = [myData,myData2];

// console.log('통합데이터:',twoData);

// 메인 컴포넌트
// 메인의 의미는 ? 다른 구성요소 컴포넌트들을 모아 최종적으로 렌더링하는 구성 컴포넌트를 말한다.
function MainComponent(){
    
    // 상태관리 메서드를 사용하여 후크변수를 설정하자!
    // const [변수명,set변수명] = React.useState(초기값)
    // dataNum은 데이터를 구분하는 번호저장 후크변수다!
    // 데이터 구분값으로 배열순번을 생각하여 처음에 로딩될 데이터가 0번째 즉, 첫번째 배열순번 데이터를 값으로 셋팅한다!
    const [dataNum,setDataNum] = React.useState(0);

    // console.log('최초값:',dataNum);

    // 가상돔에서 실제돔에 반영후 DOM에 구현할 JS코드는 어디에 넣어야 하는가..!
    // -> useEffect() 
    // -> useLayoutEffect()

    console.log( // '컴포넌트그냥구역:',document.querySelector('.img-box')
    );
    
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
    
    // 랜더링 후 화면출력전 상태 
    React.useLayoutEffect(()=>{
        // 버튼을 display:none 
        // $('.btn-gong').hide();
    })
    
    // 데이터 변경호출 함수 
    const chgData = () => {
        // 데이터 키 후크변수를 업데이트함 
        setDataNum(dataNum?0:1);
        console.log('업데이트값:',dataNum);
    }; // chgData 함수 


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
            <button onClick={chgData} className="btn-gong">
                {dataNum?'공유초이스 바로가기':'효진초이스 바로가기'}
            </button>
            {/* 4. 상품리스트박스 */}
            <div className="gwrap">
                <GoodsCode idx={dataNum}/>
            </div>
        </React.Fragment>
    );
} // MainComponent

// console.log(myData);

// 서브 컴포넌트 (자식컴포넌트 -> 부모컴포넌트로 부터 데이터를 props 속성을 통하여 전달받는다.)
// 상품 HTML 코드 구성 컴포넌트 
function GoodsCode(props){ // idx - 데이터 배열순번 
    // 선택데이터 
    const selData = twoData[props.idx];
    return(selData.map(v=>
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
    ));
} // GoodsCode

// 메인컴포넌트 출력하기 
ReactDOM.render(<MainComponent/>,document.querySelector('#root'));