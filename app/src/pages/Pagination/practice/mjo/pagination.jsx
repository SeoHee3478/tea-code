import styled from "styled-components";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const Pagination = ({ total, limit, page, handlePageNum }) => {
  const pageNums = Math.ceil(total.length / limit);
  return (
    <Nav>
      <Button onClick={() => handlePageNum(page - 1)}>&lt;</Button>
      {Array(pageNums)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => handlePageNum(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => handlePageNum(page + 1)}>&gt;</Button>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
