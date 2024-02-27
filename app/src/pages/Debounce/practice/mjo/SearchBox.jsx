import PropTypes from "prop-types";

// 1. 검색창 컴포넌트 구현
//   - input 요소 사용해 사용자가 검색어를 입력할 수 있도록
//   - type 은 search로 설정
//   - placeholder 적절하게 설정
//   - 부모 요소에서 상태 관리를 하기 위해 prop으로 value와 onChange를 받기

export function SearchBox({ query, handleQuery }) {
  return (
    <>
      <input
        type="search"
        placeholder="검색할 국가명을 입력해주세요."
        value={query}
        onChange={handleQuery}
      />
    </>
  );
}

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
};
