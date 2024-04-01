import AccordionList from "./AccordionList.jsx";
import S from "./index.module.scss";

const Accordion = () => {
  return (
    <article className={S.accordionWrapper}>
      <AccordionList title={"FAQ - single ver."} />
      <AccordionList title={"FAQ - multiple ver."} multiple />
    </article>
  );
};

export default Accordion;
