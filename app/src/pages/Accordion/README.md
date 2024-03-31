# Accordion UI

<div align="center">
<img width="300" alt="accordion" src="https://github.com/minkyeongJ/tea-code/assets/104605709/7d2dc8b7-eff5-4719-bd8f-3f8f00ebfea3">
</div>

## 주제

Accordion UI - single & multiple configuration

## 목표

Accordion UI에 대한 원리를 익히고, 구현하면서 발생하는 문제들을 함께 해결할 수 있습니다.

## 내용

Accordion UI가 가장 많이 사용되는 FAQ 화면을 활용하여 답변이 한 개만 펼쳐지는 single 방식과 여러 답변을 펼칠 수 있는 multiple 방식을 구현합니다.

## 역할

- 네비게이터: 승미
- 드라이버: 민경

## 기능 구현 명세

### 조건

- 컴포넌트는 AccordionList를 재사용합니다.
- props로 구동 방식을 분리합니다.

### 프로세스

> single 버전 프로세스 번호는 s-{n}, multiple 버전 프로세스 번호는 m-{n}을 따라주세요!

```
1. index.jsx 파일에 AccordionList 컴포넌트를 추가합니다.
   s-1. single과 multiple 버전의 공통 prop는 title={}
   m-1. multiple 버전은 prop으로 multiple 추가

2. index에서 넘겨받은 prop을 받아오기

3. 선택한 리스트 값을 담을 상태값 추가
   s-2. 선택한 리스트의 id값을 담을 상태값 추가
   m-2. 선택한 리스트의 id값들을 담을 상태값 추가

4. 리스트 클릭시 상태값을 저장할 함수 생성
   s-3. single 버전 클릭 상태값 저장 로직 추가
   m-2. multiple이라면 multiple 버전 클릭 상태값 저장 로직 추가
5. 렌더링 요소 배치 - data.js 파일 불러오기

6. isActive 상태일 때의 boolean값 처리

7. AccordionItems 컴포넌트에 prop 전달

8. AccordionList에서 넘겨받은 prop 받아오기

9. 받아온 prop 요소에 배치
```

고생하셨습니다🙌
