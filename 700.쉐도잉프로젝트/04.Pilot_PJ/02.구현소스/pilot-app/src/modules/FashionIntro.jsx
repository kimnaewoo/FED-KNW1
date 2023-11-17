// Pilot PJ - 패션인트로 컴포넌트

import "../css/fashion_intro.css";

export function FashionIntro(props) {
  // props.cat - 카테고리 분류명
  return (
    <>
      <div id={props.cat} className="fs-page">
          <ul className="pgc">
            <li className="imgc">
              <img src="./images/men02.png" 
              alt="공유다!" />
            </li>
            <li className="txtc">
              <h2>
                <a href="sub.html?cat=남성">
                  {" "}
                  MEN'S
                  <br />
                  ESSENTIALS{" "}
                </a>
              </h2>
            </li>
          </ul>
      </div>
    </>
  );
} // FashionIntro 컴포넌트
