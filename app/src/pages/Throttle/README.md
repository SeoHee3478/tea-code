# 쓰로틀 사용해서 검색 UI 구현

## 주제

쓰로틀를 적용한 검색창을 구현합니다.

## 목표

1. 쓰로틀과 디바운스 차이를 알아보고 쓰로틀이 필요한 이유를 생각해봅시다.

## 내용

검색창에서 쓰로틀을 적용하여 마지막에 한 번만 검색 될 수 있도록 합니다.

## 역할

- 네비게이터: 서희
- 드라이버: 민경, 승미

## 기능 구현 명세

### 조건

1. input 태그를 사용해서 검색창 컴포넌트 SearchBox를 구현합니다.
2. countries를 map을 통해 리스트로 보여주고 검색 결과 컴포넌트를 구현합니다.
3. fetchCountries 함수를 통해 검색값에 해당하는 국가 리스트를 가져옵니다.
4. Throttle을 적용합니다.

### 프로세스

1. 검색창 컴포넌트 구현

- input 요소 사용해 사용자가 검색어를 입력할 수 있도록
- type 은 search로 설정
  - 부모 요소에서 상태 관리를 하기 위해 prop으로 value와 onChange를 받기

2. 검색 결과 컴포넌트 구현

   - 사용자가 입력한 검색어를 포함하고 있는 리스트의 형태로 보여주기
   - countries prop을 통해서 국가 목록을 받고, 검색 중일 때는 로딩 표시를 하기 위해 searching prop받기
   - map을 사용하여 리스트로 countries를 리스트로 보여주기
   - searching 가 true면 로딩중 안내 띄워주고 false면 리스트 보여주기

3. 국가 데이터 검색 기능(이 부분은 주석처리 되어있음)

- countries 배열을 fetchCountries 함수에서 검색하는 기능 구현하기
- 실제 동작하는 것처럼 2초 지연 효과가 있음
- filter 메서드를 사용하여 사용자의 검색 쿼리와 일치하는 국가를 찾기

4. 일반 검색 UI 구현

- 검색창과 검색 결과를 조합하여 검색 UI 구현하기
- useState로 3개의 hook 상태관리하기
  - query: 사용자가 입력하는 검색어
  - countries: 검색 결과로 나온 국가 목록
  - searching: 현재 검색 중인지 여부
- 검색어를 입력할 때마다 국가 데이터를 가져오기 위해 useEffect를 사용하여 fetchCountries()함수 호출하기 - countries 상태와 searching 상태 검색 진행 상황에 따라 갱신되도록 하기

5. throttle 적용하기

- 쓰로틀링된 검색을 지연시키기 위한 timer, setTimer 상태값 추가
- 쓰로틀링된 함수 정의하기(throttledQuery)
  - fetchCountries로 throttledQuery 검색하기
  - 콘솔에 throttledQuery 출력하기
- 검색어가 변경될 때 마다 호출되는 함수 정의하기
  - query값 현재 입력한 값으로 변경하기
  - 이전에 설정된 타이머가 있다면 clearTimeout으로 지워주기
  - n초 후에 검색 함수 호출하도록 setTimeout으로 설정하고 timer 상태값 없데이트 하기
  - searchBox의 onChange 속성값 handleSearch로 변경하기
- return 값 H1태그 내부 값 변경하기
