import { useState } from "react";
import PropTypes from "prop-types";
import data from "./data";
import S from "./index.module.scss";

const AccordionItems = ({
  id,
  index,
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
            <span>{index}. </span>
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

const AccordionList = ({ title, multiple }) => {
  const [activeId, setActiveId] = useState();
  const [activeArr, setActiveArr] = useState([]);

  const handleToggleItem = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));

    if (multiple) {
      setActiveArr((prevIds) => {
        if (prevIds.includes(id)) {
          return prevIds.filter((itemId) => itemId !== id); // 이미 활성화된 경우 비활성화
        } else {
          return [...prevIds, id]; // 활성화되지 않은 경우 활성화
        }
      });
    }
  };

  return (
    <>
      <ol className={S.accordionList}>
        <h1>{title}</h1>
        {data.map((item) => {
          let isActive = activeId === item.id;
          if (multiple) isActive = activeArr.includes(item.id);
          return (
            <AccordionItems
              {...item}
              key={item.id}
              handleToggleItem={handleToggleItem}
              isActive={isActive}
            />
          );
        })}
      </ol>
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
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleToggleItem: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
