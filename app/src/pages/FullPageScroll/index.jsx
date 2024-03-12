import { useEffect } from "react";
import S from "./FullPage.module.scss";

const FullPageScroll = () => {
  // 1. ref 생성 -> 스크롤을 제어하고 있는 div에 걸어주기

  // 2. 브라우저 내부 높이를 알 수 있는 innerHeight 선언해주기(변수명: pageHeight)

  // 3. 페이지와 페이지에 빈공간 추가

  // 4. 스크롤을 내릴 때 사용할 함수 생성
  // 함수명 추천 : scrollToDown
  // 매개변수 : pageHeight, pageIndex
  // 함수 로직에 사용되는 API : ref명.current.scrollTo({ top: ~ , left: ~ , behavior: "" })

  // 5. 스크롤을 올릴 때 최상단 이동에 사용할 함수 생성
  // 함수명 추천 : scrollToTop

  // 10. 네비게이션 버튼을 클릭할 때 페이지 이동하는 함수 생성
  // 함수명 추천 : goToPage
  // 매개변수 : pageNumber
  // 스크롤 위치 계산 로직 : (pageNumber - 1) * (pageHeight + DIVIDER);

  useEffect(() => {
    // 6. 스크롤을 계산해줄 함수 생성
    /**
     * 조건식
     * 스크롤 내릴 때, 올릴 때 둘 다 동일
     * - 현재 1페이지면 : scrollTop >= 0 && scrollTop < pageHeight
     * - 현재 2페이지면 : scrollTop >= pageHeight && scrollTop < pageHeight * 2
     */
    // const wheelHandler = (e) => {
    //   e.preventDefault();
    //   // 8. deltaY와 scrollTop 받아오기
    //   // 9/ 스크롤 내릴 때, 올릴 때 조건식
    //   if (dletaY > 0) {
    //     if () {
    //     } else if () {
    //     } else {
    //     }
    //   } else {
    //     if () {
    //     } else if () {
    //     } else {
    //       // top : pageHeight + DIVIDER
    //     }
    //   }
    // };
    // 7. Event Listener 달아주기
    // 변수명 추천 : outerDivRefCurrent
  }, []);

  return (
    <>
      <div className={S.Box}>
        <nav className={S.nav}>
          <ul>
            {/* 11. 버튼에 페이지 이동 함수 이벤트 걸어주기 */}
            <li>ONE</li>
            <li>TWO</li>
            <li>THREE</li>
          </ul>
        </nav>
        {/* S.outer = 스크롤 제어 div */}
        <div className={S.outer}>
          <div id="one" className={`${S.inner} ${S.pageOne}`}>
            PAGE 1
          </div>
          <div className={S.divider}></div>
          <div id="two" className={`${S.inner} ${S.pageTwo}`}>
            PAGE 2
          </div>
          <div className={S.divider}></div>
          <div id="three" className={`${S.inner} ${S.pageThree}`}>
            PAGE 3
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPageScroll;
