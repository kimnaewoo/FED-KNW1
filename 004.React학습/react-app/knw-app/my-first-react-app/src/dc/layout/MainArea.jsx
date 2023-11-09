// MainArea 컴포넌트

import { Comics } from "../contents/COMICS";
import { Character } from "../contents/Charactor";
import { Games } from "../contents/Games";
import { Main } from "../contents/Main";
import { Movies } from "../contents/Movies";
import { News } from "../contents/News";
import { Video } from "../contents/Video";
import { Banner } from "../contents/banner";

export function MainArea(props) {
  // cat 속성으로 메뉴분류 전달

  return (
    <main className="cont">
      {props.cat == "main" && <Main cat={props.cat} />}
      {props.cat == "CHARACTERS" && <Character cat={props.cat} />}
      {props.cat == "VIDEO" && <Video />}
      {props.cat == "COMICS" && <Comics cat={props.cat} />}
      {props.cat == "NEWS" && <News cat={props.cat} />}
      {props.cat == "MOVIES" && <Movies cat={props.cat} />}
      {props.cat == "GAMES" && <Games cat={props.cat} />}
    </main>
  );
} // MainArea 컴포넌트
