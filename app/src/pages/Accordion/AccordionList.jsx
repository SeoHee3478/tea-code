import PropTypes from "prop-types";
import S from "./index.module.scss";

// 2. index에서 넘겨받은 prop을 받아오기
const AccordionList = () => {
  /**
   * 3. 선택한 리스트 값을 담을 상태값 추가
   * s-2. 선택한 리스트의 id값을 담을 상태값 추가(추천명: activeId)
   * m-2. 선택한 리스트의 id값들을 담을 상태값 추가(추천명: activeArr)
   */

  // single 버전 상태값

  // multiple 버전 상태값

  // 4. 리스트 클릭시 상태값을 저장할 함수 생성(추천명: handleToggleItem)
  // s-3. single 버전 클릭 상태값 저장 로직 추가
  // m-2. multiple이라면 multiple 버전 클릭 상태값 저장 로직 추가

  return (
    <>
      {/* 5. 렌더링 요소 배치 - data.js 파일 불러오기 */}
      <ol className={S.accordionList}>
        <h1>{/* 제목 */}</h1>
        {/* 6. isActive 상태일 때의 boolean값 처리 */}
        {/* 7. AccordionItems 컴포넌트에 prop 전달 */}
        <AccordionItems />
      </ol>
    </>
  );
};

// AccordionItems 컴포넌트
// 8. AccordionList에서 넘겨받은 prop 받아오기
const AccordionItems = () => {
  // 9. 받아온 prop 요소에 배치
  return (
    <>
      <li
        key={
          {
            /* id값 */
          }
        }
        className={S.accordionItem}
      >
        <div
          className={S.accordionHeader}
          onClick={() => {
            /* 함수*/
          }}
        >
          <div>
            <span>{/* 숫자 */}. </span>
            <strong>{/* 제목 */}</strong>
          </div>
          <div className={S.accordionIcon}>
            {/* {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            )} */}
          </div>
        </div>
        <div
        // className={`${S.accordionContent} ${
        //   isActive ? S.active : S.inactive
        // }`}
        >
          <p>{/* 답변 */}</p>
        </div>
      </li>
    </>
  );
};

export default AccordionList;

AccordionList.propTypes = {
  title: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};

AccordionItems.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
