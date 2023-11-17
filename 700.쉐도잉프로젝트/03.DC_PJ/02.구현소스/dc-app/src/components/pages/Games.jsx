// 게임즈페이지 메인컨텐츠 

import { VidIntro } from "../modules/VidIntro";
import { Banner } from "../modules/banner";

export function Games(){
    return(
        <>
            <Banner category='GAMES' />
            <VidIntro cat='GAMES' cls='on'/>
        </>
    );
} // Games 컴포넌트 