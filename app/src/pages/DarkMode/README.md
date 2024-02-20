# DarkMode 기능

<div align="center">
<img width="400" alt="sort_example" src="https://github.com/wSeungMi/wSeungMi/assets/104605709/4d2e591f-87c4-4409-8550-f535ae1264a1">
</div>

## 주제

간단한 토글 버튼을 통해 테마가 변경되는 다크 모드를 구현합니다.

## 목표

1. 다크 모드의 원리를 알아봅니다.
2. 전역 상태 관리가 필요한 이유를 생각해봅니다.

## 내용

웹 페이지 구조의 화면에서 input과 label으로 만들어진 토글 버튼을 통해 페이지의 전체 색상을 변경합니다. (라이트 모드, 다크 모드)

## 역할

- 네비게이터: 승미
- 드라이버: 서희, 민경

## 기능 구현 명세

### 조건

1. 현 위치의 index.jsx(DarkMode component) 파일이 main.jsx 파일이라고 가정합니다.
2. 먼저 state와 prop로 페이지를 구현해봅니다.
3. 그 다음 불필요한 prop 전달을 방지하고자 Context를 사용하여 코드를 개선해봅니다.
4. !bonus! 사용자의 설정을 브라우저가 기억할 수 있도록 로컬 스토리지를 추가해봅시다!

**@ver1. state와 props만 사용하여 웹사이트 만들기**

- 최상위 컴포넌트인 DarkMode는 Page라는 자녀 컴포넌트를 가지고 있습니다.
- DarkMode 컴포넌트는 현재 우리 사이트의 컬러 모드에 대한 정보를 가지고 있는 상태값이 하나 존재합니다.
- 테마 변경을 자유롭게 할 수 있는 토글 버튼은 components-Content 컴포넌트에 존재합니다.
- 상태값을 최상위 부모 컴포넌트에서 관리하고 있기 때문에 prop이 필요한 자식 컴포넌트까지 state를 넘겨줘야합니다.

**@ver2. useContext와 contextAPI를 사용하여 전역 상태 관리하기**  
**@bonus. localStorage에 컬러 모드값 저장하여 기존 상태 유지하기**

### 프로세스

**ver1. state와 prop으로만 구현하기**

```
1. 컬러 모드 정보를 가질 state를 하나 선언해줍니다. (state 자료형: boolean)
2. 생성된 state를 전체 화면을 가지고 있는 Page 컴포넌트에 prop으로 넘겨줍니다.
3. 받아온 prop을 선언해주고, Header 컴포넌트와 Footer에는 theme만, Content에는 전달받은 state를 모두 prop으로 보내줍니다.
4. Page와 마찬가지로 받아온 prop를 선언해줍니다.
  4-1. (css) 컬러 모드가 변경될 때마다 헤더에서도 이를 인식할 수 있도록 css를 동적으로 변경해줍니다.
5. 받아온 prop을 선언해주고, header와 동일하게 css를 동적으로 설정해줍니다.
  5-1. input의 checkbox의 선택 유무에 따라 테마가 변경되도록 이벤트를 걸어줍니다.
6. 받아온 prop을 선언해주고, content와 동일하게 css를 동적으로 설정해줍니다.
```

**ver2. useContext와 contextAPI를 사용하여 전역 상태 관리하기**

```
1. context 폴더를 하나 만들고, 그 안에 ThemeModeContext.jsx 파일을 생성해줍니다.
2. ThemeModeContext 파일 안에 createContext를 만들어준 뒤 export 시켜줍니다.
3. 해당 파일로 돌아와서 만들어둔 ThemeModeContext 파일을 import 한 뒤, page를 provider로 감싸줍니다.
4. provider에 value prop으로 전역적으로 공유하고자 하는 값들을 넣어줍니다.
5. Page와 마찬가지로 기존에 받아온 prop을 지워줍니다.
6. context로 전달된 state를 사용하기 위해 useContext Hook을 import 해줍니다.
7. null값을 방지하고자 구조분해할당으로 ThemeContext를 불러옵니다.
8. Header와 마찬가지로 기존에 받아온 prop을 지워줍니다.
9. context로 전달된 state를 사용하기 위해 useContext Hook을 import 해줍니다.
10. null값을 방지하고자 구조분해할당으로 ThemeContext를 불러옵니다.
11. content에서 했던 순서를 그대로 진행해줍니다.
```

**bonus. localStorage에 컬러 모드값 저장하여 기존 상태 유지하기**

```
1. setTheme의 값을 변경해주는 Content.jsx 파일에서 localStorage의 값을 변경할 수 있는 로직을 추가해줍니다.
   1-1. localStorage 추가 로직을 완료했다면 다시 index.jsx 파일로 이동합니다.
2. 1번 완료가 되었다면, 이제 localStorage의 값을 미리 받아오는 초기화 함수를 생성합니다.
   2-1. 초기화 함수의 return값은 토글 버튼의 위치 또한 고정시켜줘야하기 때문에 조건식으로 처리해줘야합니다.
   (localStorage에서 받아온 값에 따라 버튼의 스위치 위치도 변경되도록 처리해주세요.)
3. 생성된 함수를 theme state에 초기값으로 지정해주고 마지막으로 css 변경하러 가봅시다~ (content.jsx로 이동)
4. (css) checkbox의 값이 localStorage에 저장되있던 값과 일치하게 처리해줘야 합니다.
   (input의 checkbox 속성을 조정해주세요.)
```

고생하셨습니다🙌
