import { useState } from "react";
import S from "./index.module.scss";
// 1. import
//    1.1. Intro.js-react에서 Steps와 Hints를 import합니다.
//    1.2. Intro.js의 CSS 파일을 import합니다.
const Intro = () => {
  // Step과 Hint의 활성화 여부를 관리하는 상태를 정의합니다. (stepsEnabled, hintsEnabled)

  // 3. 사용자 가이드 투어를 위한 Step들을 정의합니다.
  //  3.1. 연결할 요소를 선택합니다. (element)
  //  3.2. 해당 요소에 대한 설명을 작성합니다. (title, intro)

  // 4. 힌트를 정의합니다.
  //  4.1. 연결할 요소를 선택합니다. (element)
  //  4.2. 해당 요소에 대한 설명을 작성합니다. (hint)

  const stepsOption = {
    nextLabel: "다음",
    prevLabel: "이전",
    doneLabel: "닫기",
  };

  const hintsOption = {
    hintButtonLabel: "알겠어요!",
  };

  //  5. Step과 Hint 컴포넌트를 작성합니다.
  //    5.1. Step 컴포넌트에 속성 추가
  //    - enabled : 스텝들이 보이는지 여부를 정의, 기본값은 false
  //    - initialStep: 투어를 시작할 때의 스텝 인덱스
  //    - steps: 모든 스텝 정보
  //    - onExit: 스텝들이 비활성화될 때 호출되는 콜백
  //    5.2. Hint 컴포넌트에 속성 추가
  //    - enabled: 보이는지 여부, 기본값 false
  //    - hints: 모든 hint 정보

  // 6. localstorage에 방문 여부 확인하는 코드를 작성하고 state에 적용합니다.
  return (
    <div className="App">
      {/* <Step>, <Hint> 컴포넌트 구현 위치 */}

      <div className={S.containerFluid}>
        <div>
          <div className="step1">
            <h2>Blurred</h2>
            <p className={S.blurred}>
              The home of <span>these birds</span> was on the shore of{" "}
              <span>the lake Stymphalis</span>, in <span>Arcadia</span> (after
              which they were called), where they{" "}
              <span>caused great destruction</span> among men and cattle.
            </p>
          </div>
          <div className="step2">
            <h2>Invisible Ink</h2>
            <p className={S.invisibleInk}>
              The home of <span>these birds</span> was on the shore of{" "}
              <span>the lake Stymphalis</span>, in <span>Arcadia</span> (after
              which they were called), where they{" "}
              <span>caused great destruction</span> among men and cattle.
            </p>
          </div>
          <div className="step3">
            <h2>Redacted</h2>
            <p className={S.redacted}>
              The home of <span>these birds</span> was on the shore of{" "}
              <span>the lake Stymphalis</span>, in <span>Arcadia</span> (after
              which they were called), where they{" "}
              <span>caused great destruction</span> among men and cattle.
            </p>
          </div>
        </div>
      </div>
      <div className={S.containerButton}>
        <div className="hint1">
          <p>첫 번째 힌트의 요소</p>
        </div>
        <div className="hint2">
          <p>두 번째 힌트의 요소</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
