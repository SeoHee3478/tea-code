# Debounce 사용해서 검색 UI 구현

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
  - 실제 동작하는 것처럼  2초 지연 효과가 있음
  - filter 메서드를 사용하여 사용자의 검색 쿼리와 일치하는 국가를 찾기

4. 일반 검색 UI 구현
  - 검색창과 검색 결과를 조합하여 검색 UI 구현하기
  -  useState로 3개의 hook 상태관리하기
		- query: 사용자가 입력하는 검색어
		- countries: 검색 결과로 나온 국가 목록
		- searching: 현재 검색 중인지 여부
  - 검색어를 입력할 때마다 국가 데이터를 가져오기 위해 useEffect를 사용하여 fetchCountries()함수 호출하기
		- countries 상태와 searching 상태 검색 진행 상황에 따라 갱신되도록 하기

5. Debounce 적용하기
	- debounced 상태 추가하기
	- debounced 상태를 변경하는 코드 useEffect사용해서 구현하기
		- 검색어 입력할 때 setTimeout 함수 사용하여 1초 지연 두고 지연된 검색어에 반영되도록 예약 걸기
		- clearTimeout()함수를 사용하여 1초가 경과되기 전에 다시 사용자가 검색어를 입력하면 이전에 호출된 예약을 취소하기
	- 데이터 검색 할 때 debounced(우리가 지연 시킨 검색어)에 의존 되도록 변경