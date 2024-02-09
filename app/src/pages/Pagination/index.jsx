import styled from "styled-components";

const Posts = () => {
  // "https://jsonplaceholder.typicode.com/posts"
  // 1. 게시물 데이터 fetch
  // 2. map 데이터 보여주기
  // 3. 페이지네이션 알고리즘의 이해
  // 4. select box로 페이지 당 보여줄 게시물의 수 설정
  // 5. slice로 해당 페이지에 보여줄 게시물 설정
  // 6. pagination 컴포넌트에서 페이지 개수 계산
  // 7. 페이지 개수대로 페이지 버튼 생성하기
  // 8. 스크린 리더 사용하는 유저들에게 도움이 aria-current 속성 사용하기
  // 9. <.> 버튼 생성하기
  // 10. index에서 pagination 컴포넌트 호출하기

  return (
    <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>
      {/* <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
        </select>
      </label> */}
      <main>
        <article>
          <h3>
          </h3>
          <p></p>
        </article>
      </main>
    </Layout >
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;