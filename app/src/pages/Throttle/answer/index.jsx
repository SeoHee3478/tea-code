import { useState } from "react";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { fetchCountries } from "./countries";
import PropTypes from "prop-types";

const ThrottleContainer = () => {
  // 1. 쓰로틀링된 검색을 지연시키기 위한 timer, setTimer 상태값 추가
  // 2. 쓰로틀링된 함수 정의하기(throttledQuery)
  // - fetchCountries로 throttledQuery 검색하기
  // - 콘솔에 throttledQuery 출력하기
  // 3. 검색어가 변경될 때 마다 호출되는 함수 정의하기
  // - query값 현재 입력한 값으로 변경하기
  // - 이전에 설정된 타이머가 있다면 clearTimeout으로 지워주기
  // - n초 후에 검색 함수 호출하도록 setTimeout으로 설정하고 timer 상태값 없데이트 하기
  // - searchBox의 onChange 속성값 handleSearch로 변경하기
  // 4. return 값 H1태그 내부 값 변경하기
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState(false);
  const [throttledCheck, setThrottledCheck] = useState(0);

  // 검색어가 변경될 때마다 호출되는 함수
  const handleSearch = (value) => {
    setQuery(value);
    if (!throttledCheck) {
      setThrottledCheck(true);
      setTimeout(() => {
        throttledSearch(value);
        setThrottledCheck(false);
      }, 500);
    }
  };

  // 쓰로틀링된 함수 정의
  const throttledSearch = (throttledQuery) => {
    setSearching(true);
    fetchCountries(throttledQuery).then((countries) => {
      setCountries(countries);
      setSearching(false);
      console.log(throttledQuery);
    });
  };

  return (
    <>
      <h1>throttled를 적용한 검색창</h1>
      <SearchBox value={query} onChange={(e) => handleSearch(e.target.value)} />
      <SearchResults countries={countries} searching={searching} />
    </>
  );
};

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  handleQuery: PropTypes.func.isRequired,
};

SearchResults.propTypes = {
  countries: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
};

export default ThrottleContainer;
