import AccordionList from "./AccordionList.jsx";
import S from "./index.module.scss";

const Accordion = () => {
  return (
    <article className={S.accordionWrapper}>
      <AccordionList />
    </article>
  );
};

export default Accordion;
