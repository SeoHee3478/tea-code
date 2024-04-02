import AccordionList from "./AccordionList";
import S from "./index.module.scss";

/**
 * 1. AccordionList 컴포넌트 추가
 * s-1. single과 multiple 버전의 공통 prop는 title={}
 * m-1. multiple 버전은 prop으로 multiple 추가
 */

const Accordion = () => {
  return (
    <article className={S.accordionWrapper}>
      {/* AccordionList 컴포넌트 추가 위치 */}
      <AccordionList title={"single"} />
      <AccordionList title={"multi"} multiple />
    </article>
  );
};

export default Accordion;
