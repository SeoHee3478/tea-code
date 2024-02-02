import "./index.scss";
import data from "./data/data";
import { useState } from "react";

const BUTTON_TITLE = {
  RANK: "인기순위순",
  TITLE: "제목순",
  RECENT: "최신순",
};

const Sort = () => {
  // 상태값 추가
  const [sortedData, setSortedData] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("");
  // useEffect를 사용하여 버튼 값에 따른 정렬 조건 추가

  const onClickBtn = (category) => {
    const sorted = [...sortedData];
    if (category === BUTTON_TITLE.RANK) sorted.sort((a, b) => a.rank - b.rank);
    else if (category === BUTTON_TITLE.TITLE)
      sorted.sort((a, b) => (a.title > b.title ? 0 : -1));
    else if (category === BUTTON_TITLE.RECENT)
      sorted.sort((a, b) => b.year - a.year);

    setCurrentCategory(category);
    setSortedData(sorted);
  };

  return (
    <>
      <article className="sort_wrap">
        <h1>💜 지브리 애니 목록 🩷</h1>
        {/* 정렬 버튼 */}
        <div className={`btn`}>
          <button
            className={currentCategory === BUTTON_TITLE.RANK ? "active" : ""}
            type="button"
            onClick={() => onClickBtn(BUTTON_TITLE.RANK)}
          >
            {BUTTON_TITLE.RANK}
          </button>
          <button
            className={currentCategory === BUTTON_TITLE.TITLE ? "active" : ""}
            type="button"
            onClick={() => onClickBtn(BUTTON_TITLE.TITLE)}
          >
            {BUTTON_TITLE.TITLE}
          </button>
          <button
            className={currentCategory === BUTTON_TITLE.RECENT ? "active" : ""}
            type="button"
            onClick={() => onClickBtn(BUTTON_TITLE.RECENT)}
          >
            {BUTTON_TITLE.RECENT}
          </button>
        </div>

        {/* 목록 리스트(테이블) */}
        <table>
          <thead>
            <tr>
              <th>인기순위</th>
              <th>제목</th>
              <th>개봉년도</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((el) => (
              <tr key={el.id}>
                <td>{el.rank}</td>
                <td>{el.title}</td>
                <td>{el.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};

export default Sort;
