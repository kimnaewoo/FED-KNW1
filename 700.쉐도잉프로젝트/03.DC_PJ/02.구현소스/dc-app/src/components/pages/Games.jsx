// 게임즈페이지 메인컨텐츠 

import { VidIntro } from "../modules/VidIntro";
import { Banner } from "../modules/banner";

export function Games(){
    return(
        <>
            <VidIntro cat='GAMES' cls='on'/>
            <Banner category='GAMES' />
        </>
    );
} // Games 컴포넌트 