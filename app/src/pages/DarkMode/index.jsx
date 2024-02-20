// import PropTypes from "prop-types";
import Page from "./components/Page";

/**
 * date: 2024-02-21
 * author: seungmi
 * @Notice😀
 * 1. 현 위치의 index.jsx(DarkMode component) 파일이 main.jsx 파일이라고 가정합니다.
 * 2. 먼저 state와 prop로 페이지를 구현해봅니다.
 * 3. 그 다음 불필요한 prop 전달을 방지하고자 Context를 사용하여 코드를 개선해봅니다.
 * 4. !bonus! 사용자의 설정을 브라우저가 기억할 수 있도록 로컬 스토리지를 추가해봅시다!
 ********************************
 * @ver1. state와 props만 사용하여 웹사이트 만들기
 * 조건
 * - 최상위 컴포넌트인 DarkMode는 Page라는 자녀 컴포넌트를 가지고 있습니다.
 * - DarkMode 컴포넌트는 현재 우리 사이트의 컬러 모드에 대한 정보를 가지고 있는 상태값이 하나 존재합니다.
 * - 테마 변경을 자유롭게 할 수 있는 토글 버튼은 components-Content 컴포넌트에 존재합니다.
 * - 상태값을 최상위 부모 컴포넌트에서 관리하고 있기 때문에 prop이 필요한 자식 컴포넌트까지 state를 넘겨줘야합니다.
 * @ver2. useContext와 contextAPI를 사용하여 전역 상태 관리하기
 * @bonus. localStorage에 컬러 모드값 저장하여 기존 상태 유지하기
 */

// @ver1.
// 1. 컬러 모드 정보를 가질 state를 하나 선언해줍니다. (state 자료형: boolean)
// 2. 생성된 state를 전체 화면을 가지고 있는 Page 컴포넌트에 prop으로 넘겨줍니다.

// @ver2.
// 1. context 폴더를 하나 만들고, 그 안에 ThemeModeContext.jsx 파일을 생성해줍니다.
// 2. ThemeModeContext 파일 안에 createContext를 만들어준 뒤 export 시켜줍니다.
// 3. 해당 파일로 돌아와서 만들어둔 ThemeModeContext 파일을 import 한 뒤, page를 provider로 감싸줍니다.
// 4. provider에 value prop으로 전역적으로 공유하고자 하는 값들을 넣어줍니다.

// @bonus
// 1. setTheme의 값을 변경해주는 Content.jsx 파일에서 localStorage의 값을 변경할 수 있는 로직을 추가해줍니다.
// 2. 1번 완료가 되었다면, 이제 localStorage의 값을 미리 받아오는 초기화 함수를 생성합니다.
// 2-1. 초기화 함수의 return값은 토글 버튼의 위치 또한 고정시켜줘야하기 때문에 조건식으로 처리해줘야합니다.
// (localStorage에서 받아온 값에 따라 버튼의 스위치 위치도 변경되도록 처리해주세요.)
// 3. 생성된 함수를 theme state에 초기값으로 지정해주고 마지막으로 css 변경하러 가봅시다~ (content.jsx로 이동)

const DarkMode = () => {
  return <Page />;
};

// ver2의 PropTypes
// DarkMode.propTypes = {
//   theme: PropTypes.bool.isRequired,
// };

// DarkMode.defaultProps = {
//   theme: false,
// };

export default DarkMode;
