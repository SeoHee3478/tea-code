import { useEffect, useState } from "react";
import "./index.scss";
import data from "./data/data.js";

const Sort = () => {
  const [sortedList, setSortedList] = useState(data); // 데이터
  const [currentSorted, setCurrentSorted] = useState("인기순위순"); // 버튼 선택값

  useEffect(() => {
    // 불변성 유지를 위해 데이터 복사
    let sorted = [...sortedList];

    if (currentSorted === "인기순위순") {
      sorted.sort((a, b) => {
        return a.rank - b.rank;
      });
    } else if (currentSorted === "제목순") {
      sorted.sort((a, b) => {
        return a.title < b.title ? -1 : 0;
      });
    } else {
      sorted.sort((a, b) => {
        return b.year - a.year;
      });
    }
    setSortedList(sorted);
  }, [currentSorted]);

  return (
    <>
      <article className="sort_wrap">
        <h1>💜 지브리 애니 목록 🩷</h1>
        {/* 정렬 버튼 */}
        <div className="btn">
          <button
            type="button"
            onClick={() => setCurrentSorted("인기순위순")}
            className={currentSorted === "인기순위순" ? "active" : ""}
          >
            인기순위순
          </button>
          <button
            type="button"
            onClick={() => setCurrentSorted("제목순")}
            className={currentSorted === "제목순" ? "active" : ""}
          >
            제목순
          </button>
          <button
            type="button"
            onClick={() => setCurrentSorted("최근개봉순")}
            className={currentSorted === "최근개봉순" ? "active" : ""}
          >
            최근개봉순
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
            {sortedList.map((list) => (
              <tr key={list.id}>
                <td>{list.rank}위</td>
                <td>{list.title}</td>
                <td>{list.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
};

export default Sort;
