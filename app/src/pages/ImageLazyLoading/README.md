# Scroll-to-bottom 기능

## 주제

Image Lazy Loading은 페이지 안에 있는 실제 이미지들이 실제로 화면에 보여질 필요가 있을 때 로딩을 할 수 있도록 하는 테크닉입니다. 이는 화면에 보이는 순서대로 이미지를 그리기 때문에 사용자 경험을 높이고, 페이지 렌더링 성능을 향상시키는 장점이 있습니다. 이번에는 이 기능을 구현합니다.

## 목표

라이브러리를 사용하지 않고 Image Lazy Loading이 어떻게 동작하는지 구현할 수 있습니다.

## 내용

- **Intersection Observer API**를 사용하여 화면에 보여지는 콘텐츠인지 확인하고 브라우저에 보이는 이미지를 먼저 로딩하기
- 이미지 색상을 기준으로 **image placeholder** 컬러 설정해주기
  - HTML5 Canvas API
- [구글 라이트하우스](https://developer.chrome.com/docs/lighthouse/overview?hl=ko)를 사용해서 비교해보기

## 역할

- 네비게이터: 민경
- 드라이버: 승미, 서희

## 기능 구현 명세

### 조건

- 뷰포인트에 있는 이미지가 순차적으로 보여집니다.

### 프로세스
