// 04.리액트 컴포넌트 JSX 

/************************************************* 
    [ 리액트 컴포넌트 ]
    - 컴포넌트는 HTML요소를 반환하는 함수다!

    [ 특징 ]
    1. 컴포넌트는 독립적이고 재사용이 가능한 코드집합
    2. JS함수와 비슷하지만
        HTML코드 반환이 필수라는 점이 다름!
    3. 컴포넌트는 다음 2가지로 생성가능함
        1) 클래스형 컴포넌트
        2) 함수형 컴포넌트
        (-> 우리는 함수형 컴포넌트에 집중할 예정!)

    -> 클래스형 컴포넌트는 리액트 초중기에 주로
    사용되었으나... React 16.8버전에서 Hooks와
    함께는 더 이상 사용되지 않는다!
    Hooks는 함수형 컴포넌트에서만 사용가능하다!

    ____________________________________________

    [ 첫번째 컴포넌트 만들기! ]
    - 리액트 컴포넌트 이름은 반드시 첫글자가 대문자로 만든다!
    (안지키면 적용안됨!!!)

    [ 클래스 컴포넌트 ]
    클래스 컴포넌트에서는 
    extends React.Component 상속문이 포함돼야함!

    -> 컴포넌트에서도 메서드가 필요함
    render() 메서드는 HTML을 반환함
    (함수형 컴포넌트의 return 키워드를 
        사용할 수 있는 역할을 함!)

*************************************************/

// [ 클래스형 컴포넌트 만들기 ]
class Gogh extends React.Component {
    // render() 메서드 사용하여 리턴한다.
    render(){
        // HTML 태그 리턴
        return(
            <React.Fragment>
                <h2>안녕ㅋ? 나는 고흐 그림이삼!</h2>
                <MakeImg iname="01.png" alt="고흐1" />
                <MakeImg iname="02.png" alt="고흐2" />
                <MakeImg iname="03.png" alt="고흐3" />
                <MakeImg iname="04.png" alt="고흐4" />
                {/* 홀로태그는 반드시 스스로 닫아준다! */}
            </React.Fragment>
        );
    }

} // Gogh 클래스 컴포넌트 

// 첫번째 #root1에 출력하기
// ReactDOM.render(컴포넌트리턴코드,찍을요소)
// 컴포넌트 리턴코드는 어떻게 쓰나?
// <컴포넌트명 />
ReactDOM.render(<Gogh />,document.querySelector('#root1'));

// [ 함수형 컴포넌트 만들기 ] 
// 첫글자는 대문자!
function IronMan(){
    return(
        <div>
            <h2>안녕ㅋ? 나는 아이언맨임요!</h2>
            <MakeImg iname="ab1.jpg" alt="아이언맨"/>
        </div>
    );
} // IronMan 컴포넌트

// 이미지 생성 컴포넌트
function MakeImg(props){
    return(
        <img src={"./images/"+props.iname} alt={props.alt} />
    );
};

// 두번째 #root2에 출력하기 
ReactDOM.render(<IronMan />,document.querySelector('#root2'));

/************************************************* 
    [ Props 사용하기 ]
    props는 properties 에서 나온말
    속성들... 즉, 변수에 값을 할당하여 전달하는 방법
    함수의 전달값과 같고 속성으로 컴포넌트에 보낸다!
    -> props는 05번 다음번에 자세히 다룬다!
*************************************************/

// 내가 좋아하는 색 표시하기 컴포넌트 

function Favorite(헐){
    return(
        <h2>
            내가 좋아하는 색은 {헐.color}이여 <br/>
            그리고 좋아하는 음식은 {헐.food}구 <br/>
            취미는 {헐.hobby}여ㅋ 알것어??<br/>
            참고로, 손흥민은 {헐.son}이여ㅋ 수고햐~
        </h2>
    );
} // Favorite 컴포넌트

// 좋아하는 색과 음식, 취미를 각각 속성명으로 생성하여 컴포넌트를 호출하면 개별적으로 속성을 구분할 수 있다.
// 출력: #root3
ReactDOM.render(<Favorite color="블랙" food="피자" hobby="축구" son="짱" />,document.querySelector('#root3'));

// 함수 컴포넌트에서는 표현식 안에서 {props.호출시사용한 속성명} 이 형식으로 전달된 값을 읽음! 

// 컴포넌트 재사용하기!!
// #root4에 다른사람의 좋아하는 색, 음식, 취미를 출력한다!
ReactDOM.render(<Favorite color="파랑" food="파스타" hobby="피파" son="귀속" />,document.querySelector('#root4'));

/******************************************************************************************************************* 
    컴포넌트 내부에서 다른 컴포넌트를 호출 할 수 있다!
*******************************************************************************************************************/

function Who(){
    return(
        <div>
            <h1>김똑팔이가 누구야?</h1>
            {/* 다른 컴포넌트 넣기 */}
            <Ans />
        </div>
    );
} // Who 컴포넌트

// 컴포넌트 내부에서 호출할 컴포넌트
function Ans(){
    return(
        <h2>나다 이 띰땡꺄</h2>
    );
} // Ans 컴포넌트 

// #root5에 출력하기 
ReactDOM.render(<Who />,document.querySelector('#root5'));