// 캐릭터페이지 메인컨텐츠

import { CatList } from "../modules/CatList";
import { Banner } from "../modules/banner";

export function Character() {
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner category="CHARACTERS" />
      {/* 2. */}
      {/* 3. 캐릭터 리스트 컴포넌트 */}
      <CatList />
    </>
  );
} // Main 컴포넌트
