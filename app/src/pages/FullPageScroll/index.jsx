import { useEffect, useRef } from "react";
import S from "./FullPage.module.scss";

const FullPageScroll = () => {
  // 1. ref 생성 -> 스크롤을 제어하고 있는 div에 걸어주기
  const scrollRef = useRef();

  // 2. 브라우저 내부 높이를 알 수 있는 innerHeight 선언해주기(변수명: pageHeight)
  const pageHeight = window.innerHeight;

  // 3. 페이지와 페이지에 빈공간 추가
  const DIVIDER = 5;

  // 4. 스크롤을 내릴 때 사용할 함수 생성
  // 함수명 추천 : scrollToDown
  // 매개변수 : pageHeight, pageIndex
  // 함수 로직에 사용되는 API : ref명.current.scrollTo({ top: ~ , left: ~ , behavior: "" })
  const scrollToDown = (pageHeight, pageIndex) => {
    scrollRef.current.scrollTo({
      top: pageHeight * pageIndex + DIVIDER * pageIndex,
      left: 0,
      behavior: "smooth",
    });
  };

  // 5. 스크롤을 올릴 때 최상단 이동에 사용할 함수 생성
  // 함수명 추천 : scrollToTop
  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // 10. 네비게이션 버튼을 클릭할 때 페이지 이동하는 함수 생성
  // 함수명 추천 : goToPage
  // 매개변수 : pageNumber
  // 스크롤 위치 계산 로직 : (pageNumber - 1) * (pageHeight + DIVIDER);
  const goToPage = (pageNumber) => {
    const scrollPosition = (pageNumber - 1) * (pageHeight + DIVIDER);
    scrollRef.current.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // 6. 스크롤을 계산해줄 함수 생성
    /**
     * 조건식
     * 스크롤 내릴 때, 올릴 때 둘 다 동일
     * - 현재 1페이지면 : scrollTop >= 0 && scrollTop < pageHeight
     * - 현재 2페이지면 : scrollTop >= pageHeight && scrollTop < pageHeight * 2
     */
    const wheelHandler = (e) => {
      e.preventDefault();
      // 8. deltaY와 scrollTop 받아오기
      const { deltaY } = e;
      const { scrollTop } = scrollRef.current;

      // 9. 스크롤 내릴 때, 올릴 때 조건식
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          scrollToDown(pageHeight, 1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          scrollToDown(pageHeight, 2);
        } else {
          scrollToDown(pageHeight, 3);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          scrollToTop();
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          scrollToTop();
        } else {
          // top : pageHeight + DIVIDER
          scrollRef.current.scrollTo({
            top: pageHeight + DIVIDER,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };
    // 7. Event Listener 달아주기
    // 변수명 추천 : outerDivRefCurrent
    const outerDivRefCurrent = scrollRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <>
      <div className={S.box}>
        <nav className={S.nav}>
          <ul>
            {/* 11. 버튼에 페이지 이동 함수 이벤트 걸어주기 */}
            <li onClick={() => goToPage(1)}>ONE</li>
            <li onClick={() => goToPage(2)}>TWO</li>
            <li onClick={() => goToPage(3)}>THREE</li>
          </ul>
        </nav>
        {/* S.outer = 스크롤 제어 div */}
        <div className={S.outer} ref={scrollRef}>
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
