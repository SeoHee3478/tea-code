# 🎨 ColorPicker

<div align="center">
<img width="400" alt="colorPicker" src="https://github.com/wSeungMi/tea-code/assets/104605709/844952e9-3c6d-402d-aeec-4232fb0272af">
</div>

## 주제

input의 type 중 color 속성과 EyeDropper API를 사용하여 컬러피커 기능을 구현하고, RGB Hex값을 복사해봅시다!

## 목표

컬러피커 기능을 구현할 수 있는 속성과 API를 이해하고, 해당 기능을 구현할 수 있습니다.

## 내용

mdn 문서를 참고하여 이미지의 컬러를 추출해내는 작업을 수행합니다.

## 역할

- 네비게이터: 승미
- 드라이버: 민경

## 기능 구현 명세

### 조건

- mdn 문서에 나와있는 `<input type="color">`과 EyeDropper API를 참고하여 해당 기능에 대해 이해합니다.
- 두 가지 방법을 모두 활용하여 컬러피커 기능을 구현합니다.
- 기능을 모두 사용해보고, 어떤 점이 다른지 서로 생각을 나눠봅니다.

### 프로세스

```
1. 이미지를 등록할 수 있도록 file 기능을 구현합니다.
1-1. 미리보기가 가능하도록 가져온 이미지 정보를 상태값에 저장합니다.(URL.createObjectURL)
2. `<input type="color">`와 EyeDropper API를 활용하여 ColorPicker 기능을 구현합니다.
2-1. 구현된 ColorPicker 기능을 통해 RGB Hex값을 추출하여 상태값에 저장합니다.
3. Navigator: clipboard property를 활용하여 텍스트 복사 기능을 구현합니다.
3-1. 텍스트 복사가 성공하면 alert으로 복사된 코드를 보여줍니다.
4. 복사 된 데이터까지 확인하면 완료!
```

고생하셨습니다🙌
