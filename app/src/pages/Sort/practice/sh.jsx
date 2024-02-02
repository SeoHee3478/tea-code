import "./index.scss";
import data from "./data/data.js";
import { useState, useEffect } from "react";


const Sort = () => {
  // 상태값 추가
  const [sortList, setSortList] = useState(data);
  const [currentSorted, setCurrentSorted] = useState("인기순위순");

  // useEffect를 사용하여 버튼 값에 따른 정렬 조건 추가
  useEffect(() => {
    let sorted = [...sortList];
    if (currentSorted === "인기순위순") {
      sorted.sort((a, b) => a.rank - b.rank)
    }
    else if (currentSorted === "제목순") {
      sorted.sort((a, b) => a.title > b.title ? 0 : -1)
    }
    else {
      sorted.sort((a, b) => b.year - a.year)
    }
    setSortList(sorted);
  }, [sortList, currentSorted])

  return (
    <>
      <article className="sort_wrap">
        <h1>💜 지브리 애니 목록 🩷</h1>
        {/* 정렬 버튼 */}
        <div className="btn">
          <button type="button" onClick={() => setCurrentSorted("인기순위순")} className={currentSorted === "인기순위순" ? "active" : ""}>인기순위순</button>
          <button type="button" onClick={() => setCurrentSorted("제목순")} className={currentSorted === "제목순" ? "active" : ""}>제목순</button>
          <button type="button" onClick={() => setCurrentSorted("개봉년도순")} className={currentSorted === "개봉년도순" ? "active" : ""}>개봉년도순</button>
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
            {sortList.map((list) =>
              <tr key={list.id}>
                <td>{list.rank}</td>
                <td>{list.title}</td>
                <td>{list.year}</td>
              </tr>
            )}
          </tbody>
        </table>
      </article>
    </>
  );
};

export default Sort;
