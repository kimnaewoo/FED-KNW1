import { Component } from "react";
// css 불러오기
import "../../css/weather.css";
// 엑시오스 불러오기
import axios from "axios";

// 여기서는 컴포넌트를 class로 만들어보자
// 컴포넌트 class는 기본적으로 Component 클래스를 상속받는다!
class Weather extends Component {
  // 생성자함수호출!
  // -> constructor()
  constructor(props) {
    // 부모에게 전달변수를 전달한다
    // 부모클래스는 super 키워드로!
    super(props);
    // 생성자함수 구역에 멤버변수 즉, 클래스속성을 만들면 이것이 상태변수가 된다!!
    // 클래스 내부속성은 this키워드를 사용한다!
    // 받아온 날씨 정보를 셋업할 객체이다!
    // state 이름의 상태변수에 할당후 setState()로 셋팅한다
    this.state = { temp: "", desc: "", icon: "", loading: true, city: "" };
  } // 생성자함수

  // 컴포넌트 생성후 날씨정보 조회하여 화면에 보이기
  // 함수형 컴포넌트에서는 랜더링후는 useEffect()이지만
  // 클래스형은 componentDidMount() 메서드를 사용한다
  componentDidMount() {
    // 1. 지정도시명
    const cityName = "Seoul";
    // 2. 날씨정보조회 키코드 (로그인사용자 키복사)
    const apiKey = "073666e29805e17e386fcc678f84c940";
    // 3. 날씨정보조회 URL : 날씨정보 JSON 이 날라온다!
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    // 소스샘플
    // https://openweathermap.org/api/one-call-3

    // axios 라이브러리를 이용한 데이터 조회하기!
    // 먼저설치 : npm i axios
    // 엑시오스는 데이터를 Promise로 처리하여 원하는 결과를 보장하는 간편한 데이터 처리 라이브러리!
    // 엑시오스 사용법 : 상단에 import 로 불러들인다.
    // 파일 가져오기 메서드 : get()
    // 다음 실행 메서드는 : then
    axios
      .get(url) // 파일 로딩
      .then((res) => {
        // 파일형식에 맞는 파싱 자동
        console.log(res);
        // 주의 : 로그에서 확인한바와 같이
        // data속성에 실제 데이터가 담긴다!
        // 들어오는 변수인 res.data 해야한다
        const wdata = res.data;

        // 상태변수값에 셋팅하기
        this.setState({
          city: cityName,
          temp: wdata.main.temp,
          desc: wdata.weather[0].description,
          icon: wdata.weather[0].icon,
          loading: false, // 로딩여부 끝 (false)
        });
      }) // then
      // 에러처리 메서드: catch()
      .catch((err) => console.log(err));

    /********************************************************************************************************************************************************************
     // fetch() 함수를 이용한 데이터 조회하기!
    // fetch(url) // 파일 받기
    //   .then((res) => res.json()) // json() 제이슨 파일 형식 파싱
    //   .then((wdata) => {
    //     // 파일 받은후 내용읽기
    //     console.log(wdata, wdata.main.temp);
    //     // 상태변수인 wInfo에 값을 셋팅한다!
    //     // 셋팅용 상태변수 메서드형은 setState()
    //     // this키워드 사용
    // this.setState({
    //       city: cityName,
    //       temp: wdata.main.temp,
    //       desc: wdata.weather[0].description,
    //       icon: wdata.weather[0].icon,
    //       loading: false, // 로딩여부 끝 (false)
    //     });
    //   }) // 마지막 then
    //   // 에러시 처리
    //   .catch((err) => console.log(err)); 
    ********************************************************************************************************************************************************************/
  } // componentDidMount 메서드

  // 컴포넌트 결과 랜더링 메서드
  // render()
  render() {
    // 아이콘 정보
    const isrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
    // 로딩중 loading값이 true이면
    if (this.state.loading) {
      return <h4>loading</h4>;
    } // if
    // 로딩성공 시 (loading값이 false인경우)
    else {
      {
        /* 절대온도이므로 섭씨온도로 바꾼다! 절대온도 - 273.15를 뺴준다. 소수점도 한자리만 표시 */
      }
      let ctemp = (parseInt(this.state.temp) - 273.15).toFixed(1);
      return (
        <div className="weather-bx">
          <h4>Now Weather</h4>
          <h5>{this.state.city}</h5>
          <img src={isrc} alt="weather icon" />

          <p>{ctemp} ℃</p>
          <p>{this.state.desc}</p>
        </div>
      );
    } // else
  } // render 메서드
} // Weather 클래스

export default Weather;
