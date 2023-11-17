// 무비페이지 메인컨텐츠 

import { VidIntro } from "../modules/VidIntro";
import { Banner } from "../modules/banner";

export function Movies(){
    return(
        <>
            <Banner category='MOVIES' />
            <VidIntro cat='MOVIES' cls='on'/>
        </>
    );
} // Movies 컴포넌트 