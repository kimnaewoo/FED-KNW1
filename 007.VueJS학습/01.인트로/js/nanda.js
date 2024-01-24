/* 난다 사이트 구성 JS */

/* 0. 상품정보 생성을 위한 생성자함수 */
class GetList {
  constructor(idx, name, img, price) {
    // idx - 일련번호
    this.idx = idx;
    // name - 상품명
    this.name = name;
    // img - 상품이미지
    this.img = img;
    // price - 상품가격
    this.price = price;
  }
} // GetList 생성자함수

// 1. 뷰 JS 인스턴스 생성하기
const vm = new Vue({
  // 1. 대상선정
  el: "#vue-app",
  // 대상은 꼭 아이디요소일 필요는 없지만, 아이디는 보통 한번 사용되기에 많이 쓴다
  // 클래스나 일반요소를 쓰면 첫번째 만나는 요소에 적용된다

  // 2. 데이터 설정
  data: {
    // 2-1. 제목 데이터
    bigTit: "style NANDA",
    // 2-2. 로고 태그정보
    logo: `<img src="./images/logo_3ce.png" alt="nanda logo" />`,
    // 2-3. 배너 데이터
    content: `
        나는 날고 싶어~!
        <h2>오늘도 당신은 날고 싶다~!</h2>
        <img src="./images/sub_banner_e.jpg" alt="banner" />
    `,
    // 2-4. 상품정보 배열
    // 데이터를 클래스를 통해 생성하자
    itemData: [
      /*
      ((예시데이터 셋팅))    
        itemData:[
            {
                idx:1,
                name:"vans와우",
                img:"vans_1.jpg"
            },
            {
                idx:2,
                name:"vans올레이",
                img:"vans_2.jpg"
            },
            {
                idx:3,
                name:"vans코코넛",
                img:"vans_3.jpg"
            },
            {
                idx:4,
                name:"vans마크로",
                img:"vans_4.jpg"
            }
        }, 
        */
    ], // 배열 리터럴로 선언과 할당!
  }, // data

  // 3. 메소드 설정
  methods: {
    // 이미지 태그를 만들어서 리턴함
    makeImg(val) {
      // val - 이미지명만 들어옴
      // 오버시 이미지까지 2개의 이미지를 리턴한다
      return `
            <img src="./images/fashion1/${val}.jpg" alt="item" />
            <img src="./images/fashion2/${val}.png" alt="item" />
        `;
    },

    //정규식함수(숫자 세자리마다 콤마해주는 기능)
    addCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  }, // methods

  // [ 뷰 인스턴스 초기화 완료단계 : created ]
  // 이미 뷰인스턴스는 생성된 후 데이터를 셋업하기
  // 적격인 단계가 바로 created 단계이다!
  //   created: function(){코드}
  created: function () {
    // 상품데이터 클래스를 호출하여 객체를 생성하자!

    // 1. 상품명 배열
    const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

    // 2. 상품정보 객체 클래스 호출하기
    for (let i = 1; i < 19; i++) {
      // 2-1. 정해진 상품명 시작부분 랜덤하게 넣기
      // 위의 배열 4가지 중 한가지 랜덤
      let rdm1 = Math.floor(Math.random() * 4);

      // 2-2. 다양한 가격을 위해 4~20사이 난수곱
      let rdm2 = Math.ceil(Math.random() * 17) + 3;
      console.log("랜덤1", rdm1, "\n랜덤2", rdm2);

      // 2-3. 뷰 인스턴스의 itemData 배열값 넣기
      // this키워드로 접근한다! this.itemData
      this.itemData.push(
        new GetList(
          i, // 일련번호
          goods[rdm1] + i, // 상품이름
          `nanda_${i}`, // 이미지명
          20000 * rdm2 // 상품가격
        )
      );
    } // for
    console.log("itemData", this.itemData);
  }, // created

  // [ 뷰 랜더링 완료 단계 : mounted ]
  // -> JS, 제이쿼리 등 DOM에 그려진 후 코딩해야하는 것을 이 파트에 연결시킨다!
  mounted: function () {
    // 랜더링후 자동실행구역
    // 1. 제목 숨겼다 보이기
    $(".tit").hide().delay(1000).slideDown(300);
    // 2. 로고 왼쪽에서 날아오기
    $(".logo")
      .css({
        position: "relative",
        left: "-100%",
        opacity: 0,
      })
      .delay(2000)
      .animate(
        {
          opacity: 1,
          left: 0,
        },
        800,
        "easeInOutExpo",
        () => {
          // 등장후 콜백함수로 스크롤 이동
          // 3. 스크롤 이동하기
          $("html,body").animate(
            {
              scrollTop: $(".banner").offset().top + $(".banner").height() + 120 + "px",
            },
            600,
            "easeInOutExpo"
          );
        }
      ); // animate 콜백함수
  },
}); // Vue 인스턴스 설정
