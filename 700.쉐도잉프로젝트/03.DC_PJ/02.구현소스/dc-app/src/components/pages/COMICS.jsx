// 코믹스페이지 메인컨텐츠 

import { VidIntro } from "../modules/VidIntro";
import { Banner } from "../modules/banner";

export function Comics(){
    return(
        <>
            <VidIntro cat='COMICS' cls='off'/>
            <Banner category='COMICS' />
        </>
    );
} // Comics 컴포넌트 