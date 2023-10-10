// 05. 리액트 props 

/********************************************************** 
    [ 리액트 Props ]
    1. 리액트 구성요소에 전달되는 인수다!(전달변수)
    2. HTML 속성을 통해서 구성요소에 전달된다
    3. props는 속성이다.
    4. JS 함수에 셋팅되는 전달변수와 HTML속성과 동일함
    5. 컴포넌트로 보내기 위해서는 HTML속성과 동일한 구문사용
**********************************************************/

// 자기차를 소개하는 컴포넌트
function Son(props){
    // 일반함수에서는 전달변수를 여러개 썻으나 컴포넌트에서는 전달하는 props 하나로 여러개 사용가능!
    // 사용법 : props.속성명
    // 컴포넌트에서 미리 세부속성명을 정하여 호출하는 곳에서 같은 이름의 속성으로 값을 담아 보내준다!
    return(
        <React.Fragment>
            <h2>이 선수는 {props.brand}입니다.</h2>
        </React.Fragment>
    )

} // Son 컴포넌트

// 손흥민 상세정보 출력 컴포넌트
function Detail(props){
    return (
        <React.Fragment>
            <h2>
                시즌은 {props.brand.model}이고
                등번호는 {props.brand.number}입니다!
            </h2>
            {/* 이미지 출력
                인라인 스타일시트 넣기형식:
                <태그 style={{객체형식CSS}} 
                -> 값은 문자형으로 셋팅함 {속성:값}
            */}
            <img src="./images/son.jpg" alt="손흥민" style={props.brand.opt} />
        </React.Fragment>
    );
} // Detail 컴포넌트

// 전체 자동차 브랜드 소개 컴포넌트 
function Brand(props){
    return(
        <React.Fragment>
            <h1>이 선수는 누구죠?</h1>
            <Son brand="손흥민" />
            {/* 다른컴포넌트 호출 */}
        </React.Fragment>
    )
} // Brand 컴포넌트

// 추가질문으로 손흥민 정보를 자세히 기술하는 컴포넌트
function AskMore(props){ // props.num 배열데이터 순번값 

    // 옵션 배열변수 셋팅
    const sonInfo = [
        {model:"23-24시즌",number:"7번",opt:{filter:'hue-rotate(0deg)'}},
        {model:"타노스시즌",number:"7번",opt:{filter:'hue-rotate(290deg)'}},
        {model:"헐크시즌",number:"7번",opt:{filter:'hue-rotate(80deg)',transform:'rotateY(180deg)'}}
    ];

    return(
        <React.Fragment>
            <h1>더 자세히 말씀해주세요?!</h1>
            <Detail brand={sonInfo[props.num]} />
        </React.Fragment>
    );
} // AskMore 컴포넌트

// 랜더링 하기 
ReactDOM.render(
    <div>
        <Brand />
        <AskMore num="0" />
        <AskMore num="2" />
        <AskMore num="1" />
    </div>
    ,document.querySelector("#root1"));