// 2. 검색 결과 컴포넌트 구현
//   - countries prop을 통해서 국가 목록을 받고, 검색 중일 때는 로딩 표시를 하기 위해 searching prop받기
//   - article에 aria-busy 속성 추가해주기
//   - header에서 국가 숫자 설정해주기
//   - map을 사용하여 리스트로 countries를 리스트로 보여주기
//   - searching 가 true면 로딩중 안내 띄워주고 false면 리스트 보여주는 3항 연산자 구현하기

export function SearchResults() {
  return (
    <article >
      <header>총 {0}개의 국가가 검색되었습니다.</header>
      <ul>
      </ul>
    </article>
  );
}
