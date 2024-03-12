import { useEffect, useRef } from "react";
import S from "./FullPage.module.scss";

const FullPageScroll = () => {
  const scrollRef = useRef();
  const DIVIDER = 5;

  const scrollToDown = (pageHeight, pageIndex) => {
    scrollRef.current.scrollTo({
      top: pageHeight * pageIndex + DIVIDER * pageIndex,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const goToPage = (pageNumber) => {
    const pageHeight = window.innerHeight;
    const scrollPosition = (pageNumber - 1) * (pageHeight + DIVIDER); // 스크롤 위치 계산
    scrollRef.current.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = scrollRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          scrollToDown(pageHeight, 1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          scrollToDown(pageHeight, 2);
        } else {
          scrollToDown(pageHeight, 3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          scrollToTop();
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          scrollToTop();
        } else {
          scrollRef.current.scrollTo({
            top: pageHeight + DIVIDER,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    // Event Listener
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
            <li onClick={() => goToPage(1)}>ONE</li>
            <li onClick={() => goToPage(2)}>TWO</li>
            <li onClick={() => goToPage(3)}>THREE</li>
          </ul>
        </nav>
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
