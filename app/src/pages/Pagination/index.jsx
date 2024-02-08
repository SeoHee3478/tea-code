import styled from "styled-components";

const Posts = () => {
  // "https://jsonplaceholder.typicode.com/posts"
  return (
    <Layout>
      <header>
        <h1>게시물 목록</h1>
      </header>
      <main>
        <article >
          <h3>
          </h3>
          <p></p>
        </article>
      </main>
    </Layout>
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