import { useEffect, useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResult } from "./SearchResult";
import { fetchCountries } from "./countries";

const Debounce = () => {
  // 0. 사용자가 입력하는 검색어, 검색 결과로 나온 국가 목록, 현재 검색 중인지 여부 상태값 추가하기
  // 1. 검색창 컴포넌트 구현
  // 2. 검색 결과 컴포넌트 구현
  // 3. 검색창 컴포넌트, 검색 결과 컴포넌트 불러와서 렌더링하기
  // 4. 국가별 정보 검색하는 fetchCountries 함수 불러오기
  // 4. 일반 검색 UI 구현
  //  - 검색어를 입력할 때마다 국가 데이터를 가져오기 위해 useEffect를 사용하여 fetchCountries()함수 호출하기
  //  - 검색 진행 상황에 따라 countries 상태와 searching 상태 갱신되도록 하기
  // 5. Debounce 적용하기
  //   - debouncedQuery 상태 추가하기
  //   - debouncedQuery 상태를 변경하는 코드 useEffect사용해서 구현하기
  //       - 검색어 입력할 때 setTimeout 함수 사용하여 1초 지연 두고 지연된 검색어에 반영되도록 예약 걸기
  //       - clearTimeout()함수를 사용하여 1초가 경과되기 전에 다시 사용자가 검색어를 입력하면 이전에 호출된 예약을 취소하기
  //   - 데이터 검색 할 때 debouncedQuery(우리가 지연 시킨 검색어)에 의존 되도록 변경

  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);
    return () => clearTimeout(time);
  }, [query]);

  useEffect(() => {
    setIsSearching(true);
    fetchCountries(debouncedQuery)
      .then(setCountries)
      .then(() => setIsSearching(false));
  }, [debouncedQuery]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <h1>Debounce를 적용한 검색창</h1>
      <SearchBox query={query} handleQuery={handleQuery} />
      <SearchResult countries={countries} isSearching={isSearching} />
    </>
  );
};

export default Debounce;
