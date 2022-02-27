<h1 align="center"> Pre Onboarding 1st 과제 - Calculator </h1>

<h3 align="center"> 서비스 링크 : http://console.lo9.s3-website.ap-northeast-2.amazonaws.com/</h3>

<p align="center"><img width="500px" src="https://user-images.githubusercontent.com/43867711/151024262-9b25a17e-b619-49f1-91e4-53157dcf49ec.gif"></p>

> ## 📍 팀원

[박중섭](https://github.com/crucial-sub) [우종원](https://github.com/Ubermensch0608) [이태림](https://github.com/ttaerrim) [임수영](https://github.com/penguin311)

> ## 📍 스택
`React Hooks` `Redux` `Redux tooklit` `AWS`

> ## 📍 로컬 환경 구동

프로젝트 클론

```
git clone https://github.com/ttaerrim/wanted_pre_onboarding_01
```

패키지 설치

```
npm install
```

프로젝트 시작

```
npm start
```

> ## 📍 요구사항

#### 첫 번째 계산기 -> 이태림, 임수영

- 환율 API fetch

- 숫자 포매팅

  - 소숫점 둘째 자리까지, 세 자리 이상 되면 콤마를 가운데 찍어 보여 줌 (1,234.56)

- 송금액 조건 처리
  - 0보다 작은 금액이거나 10,000 USD보다 큰 금액만 제대로 동작하도록 구현

#### 두 번째 계산기 -> 박중섭, 우종원

- 사용자 input

  - 사용자 input창에는 **숫자**만 입력 가능하다
  - 값이 1000 이상일 경우에는 1000으로 반환한다
  - 1000일 때 자릿수 콤마 표현한다
  - 사용자가 입력한 값을 저장 후 환율 API와 연산하여 환율 계산하는 것으로 예상

- 변경하는 통화 dropdown

  - USD, CAD, KRW, HKD, JPY, CNY 등으로 구성 -> 드롭다운을 어떤 방식으로 표현할까?
  - 사용자가 통화를 선택할 때 그 값이 state 저장되는 것 필요

- 변경될 통화 tab
  - 선택한 통화를 제외한 통화만 tab에 나열
  - tab을 클릭할 시 클릭한 tab의 통화가 정보창에 렌더링
  - 렌더링 시 기준일은 새로운 날짜값을 받아 옴 -> 2022-Jan-01 형식으로
  - 사용자가 통화를 선택했을 때 새로 생성된 tab의 배열을 기준으로 첫 번째 tab이 선택되도록 구현
  - 선택된 tab은 다른 버튼과 달리 border-bottom이 없어 정보창과 이어진 것처럼 표현

> ## 📍버전 관리

- 기본적으로 main branch가 최종적으로 병합되는 default branch 이다.
- 첫 번째 계산기 기능을 하는 환율계산기를 firstCalc로 지정하고 새로운 브랜치를 생성했다.
- 두 번째 계산기 기능을 하는 환율계산기를 secondCalc라고 지정하고 새로운 브랜치를 생성했다.
- 새로운 기능 구현은 Add:, 기능 및 스타일링 수정은 Modify:, 부족했던 기능 업데이트는 Refactor:, main branch 와 병합할 때는 Merge:, 파일이나 폴더를 삭제할 때는 Delete: 로 커밋 메시지를 작성하였다.<br/>
