import { useState } from "react";
import S from "./index.module.scss";
import { Steps, Hints } from "intro.js-react";
import "intro.js/introjs.css";

const Intro = () => {
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const hintsEnabled = localStorage.getItem("isVisited") ? false : true;

  const steps = [
    {
      element: ".step1",
      title: "Blur 타입 1",
      intro: "Blurred 효과로 번지는 느낌의 블러 효과입니다.",
    },
    {
      element: ".step2",
      title: "Blur 타입 2",
      intro: "Invisible Ink 효과로 글자가 완전히 보이지 않습니다.",
    },
    {
      element: ".step3",
      title: "Blur 타입 3",
      intro: "Redacted는 Invisible Ink와 비슷하지만 검은색 입니다.",
    },
  ];

  const hints = [
    {
      element: ".hint1",
      hint: "첫 번째 요소에 대한 힌트입니다!",
    },
    {
      element: ".hint2",
      hint: "두 번째 요소에 대한 힌트입니다!",
    },
  ];

  const stepsOption = {
    nextLabel: "다음",
    prevLabel: "이전",
    doneLabel: "닫기",
  };

  const hintsOption = {
    hintButtonLabel: "알겠어요!",
  };

  return (
    <div className="App">
      <Steps
        enabled={
          localStorage.getItem("isVisited") ? false : stepsEnabled || true
        }
        steps={steps}
        initialStep={0}
        onExit={() => {
          setStepsEnabled(false);
        }}
        onComplete={() => localStorage.setItem("isVisited", "true")}
        options={stepsOption}
      />
      <Hints enabled={hintsEnabled} hints={hints} options={hintsOption} />

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
