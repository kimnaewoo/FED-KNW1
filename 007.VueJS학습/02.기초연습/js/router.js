// 뷰라우터 인스턴스 설정파일 - router.js

// 라우터 템플릿 만들기
let Trip = {
  template: `<div class="trip router">World Trip</div>`,
};
let Foods = {
  template: `
    <div v-bind:class="
        'foods router '+this.$route.params.cls
    ">
        World Foods {{ this.$route.params.item }}
    </div>`,
};
/* [파라미터로 전달된 라우터 값을 읽는 코드법] 
    this.$route.params.cls
    1. this 는 현재 라우터를 사용하는 뷰인스턴스
    2. $route 는 현재연결된 라우트 정보객체
    3. params 는 라우트 하위 파라미터 전달속성 
    4. cls / item 은 전달된 파라미터 이름 
*/

// const router = new VueRouter({
// -> 변수에 담으면 아래쪽에서 별도로 export 해야한다

// 이름없이 라우터를 내보내면 받는곳에서 라우터로 보통 받는다!
export default new VueRouter({
  routes: [
    // 첫번째 루트
    {
      path: "/trip",
      component: Trip,
    },
    {
      path: "/foods",
      component: Foods,
    },
    // 두번째루트에 파라미터 버전 루트추가!
    {
      // 파라미터를 받는 같은 path의 루트는 호출과 구분을 위해 반드시 name속성을 써야한다!
      name: "umsik",
      path: "/foods:item",
      // 경로 뒤에 콜론(:)을 쓰고 뒤에 파라미터 변수를 쓴다!
      component: Foods,
    },
  ],
});

// 변수에 담은 경우 하나 내보내기
// export default router;
