// 상품 전체 리스트 페이지

// 상품전체 리스트 css 불러오기
import "../css/glist.css";

// 상품 데이터 가져오기
import gdata from "../data/glist-items";

export function GList() {
  const makeList = () =>
    gdata.map((v, i) => (
      <div key={i}>
        <a href="#">
          [{i + 1}]
          <img src={"./images/goods/" + v.cat + "/" + v.ginfo[0] + ".png"} alt="dress" />
          <aside>
            <h2>{v.ginfo[1]}</h2>
            <h3>{addComma(v.ginfo[3])}원</h3>
          </aside>
        </a>
      </div>
    ));
  // makeList

  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <main id="cont">
      <section>
        <div id="optbx">
          <label htmlFor="men">남성</label> <input type="checkbox" id="men" /> <label htmlFor="women">여성</label>
          <input type="checkbox" id="women" /> <label htmlFor="style">스타일</label>
          <input type="checkbox" id="style" />
        </div>
        <div className="grid">{makeList()}</div>
      </section>
    </main>
  );
} //////////////// GList 컴포넌트 /////////////////
