import { useState } from "react";
import PropTypes from "prop-types";
import data from "./data";
import S from "./index.module.scss";

const AccordionItems = ({
  id,
  number,
  question,
  answer,
  handleToggleItem,
  isActive,
}) => {
  return (
    <>
      <li key={id} className={S.accordionItem}>
        <div className={S.accordionHeader} onClick={() => handleToggleItem(id)}>
          <div>
            <span>{number}. </span>
            <strong>{question}</strong>
          </div>
          <div className={S.accordionIcon}>
            {isActive ? (
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
            )}
          </div>
        </div>
        <div
          className={`${S.accordionContent} ${
            isActive ? S.active : S.inactive
          }`}
        >
          <p>{answer}</p>
        </div>
      </li>
    </>
  );
};

const AccordionList = () => {
  const [activeId, setActiveId] = useState();

  const handleToggleItem = (id) => {
    setActiveId(id === activeId ? null : id);
  };

  console.log("activeId");

  return (
    <>
      <ol className={S.accordionList}>
        <h1>FAQ</h1>
        {data.map((item) => (
          <AccordionItems
            {...item}
            key={item.id}
            handleToggleItem={handleToggleItem}
            isActive={activeId === item.id}
          />
        ))}
      </ol>
    </>
  );
};

export default AccordionList;

AccordionItems.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
