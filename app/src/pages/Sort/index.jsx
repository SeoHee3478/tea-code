const Sort = () => {
  // 상태값 추가

  // useEffect를 사용하여 버튼 값에 따른 정렬 조건 추가

  return (
    <>
      <article>
        <h1>💜 지브리 애니 목록 🩷</h1>
        {/* 정렬 버튼 */}
        <div className="btn">
          <button type="button">버튼명</button>
          <button type="button">버튼명</button>
          <button type="button">버튼명</button>
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
            <tr key="1">
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};

export default Sort;
