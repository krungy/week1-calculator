<h1>원티드 프리온보딩 코스 1주차 기업과제<br />
와이어바알리/레드브릭 📈</h1>

## 🚀 배포
🔗 **과제물**(aws s3): http://calculator-park-is-best.s3-website.ap-northeast-2.amazonaws.com/

<br>

## 🧑‍🤝‍🧑 팀 소개
### 저희는 Team **박이최고** 입니다.
팀원들의 성을 차례로 읽어보세요!
|                                                            	| 팀원                                                	| 역할                	|
|------------------------------------------------------------	|-----------------------------------------------------	|---------------------	|
| ![](https://avatars.githubusercontent.com/u/77766769?s=25) 	| 박정훈 [@Junghoon-P](https://github.com/Junghoon-P) 	| 팀장, 계산기 2 구현 	|
| ![](https://avatars.githubusercontent.com/u/71081893?s=25) 	| 이소진 [@krungy](https://github.com/krungy)         	| 계산기 1 구현       	|
| ![](https://avatars.githubusercontent.com/u/57004991?s=25) 	| 최효정 [@hyo-choi](https://github.com/hyo-choi)     	| 계산기 2 구현       	|
| ![](https://avatars.githubusercontent.com/u/68905615?s=25) 	| 고동현 [@brad-go](https://github.com/brad-go)       	| 계산기 1 구현       	|

<br>

## 🪄 프로젝트 실행 방법
1. git clone하여 프로젝트를 내려받습니다.
    ```bash
    git clone https://github.com/OnBoarding-Park-is-best/week1-calculator.git
    ```
2. https://currencylayer.com/ 에 회원가입 후 API key를 발급받습니다.

3. 프로젝트 root 디렉토리에 `.env` 파일을 생성하고 아래와 같이 API key를 기입합니다.
    ```bash
    REACT_APP_API_KEY=<발급받은 API key>
    ```
4. 아래 커맨드로 패키지를 설치합니다.
    ```bash
    yarn install
    ```
5. 아래 커맨드로 프로젝트를 실행합니다.
    ```bash
    yarn start
    ```
6. (optional) 아래 커맨드로 unit test를 실행할 수 있습니다.
    ```bash
    yarn test
    ```

<br>

## 🧰 기술 스택 및 구현 사항
![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
<br />
![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 

### 전체 구현사항
- react-router를 이용해 계산기를 각 페이지에 표시합니다.

### 첫 번째 계산기
- [x] 수취국가는 한국, 일본, 필리핀 세 군데 중 하나를 select box로 선택합니다. 각각 통화는 KRW, JPY, PHP 입니다.
- [x] 수취국가를 선택하면 아래 환율이 바뀌어나타나야 합니다.
- [x] 송금액을 USD로 입력하고 Submit을 누르면 아래 다음과 같이 수취금액이 KRW, JPY, PHP 중 하나로 계산되어서 나와야 합니다.
- [x] 환율과 수취금액은 소숫점 2째자리까지, 3자리 이상 되면 콤마를 가운데 찍어 보여줍니다. 
- [x] 환율을 미리 저장해서 불러옵니다.
- [x] 수취금액을 입력하지 않거나, 0보다 작은 금액이거나 10,000 USD보다 큰 금액, 혹은 바른 숫자가 아니라면 “송금액이 바르지 않습니다"라는 에러 메시지를 보여줍니다.

### 두 번째 계산기
- [x] 숫자만 입력할 수 있고, 단위마다 ',' 표시를 붙여주는 input
- [x] USD, CAD, KRW,  HKD, JPY, CNY를 포함하는 dropdown
- [x] 드롭다운 메뉴에서 선택된 통화가 아래 tab란에 표시되지 않도록 하는 기능
- [x] 드롭다운 메뉴를 이용한 통화 변경시 변경될 환율과 기준일 정보 동기화
- [x] 기준일 날짜 formatting
- [x] jest를 이용해 utils 함수의 unit test를 구현했습니다. unit test 결과는 `yarn test` command로 확인하실 수 있습니다.

<br>

## 📂 디렉토리 구조

```bash
.
├── public
└── src
    ├── api
    ├── components
    │   ├── Nav
    │   ├── CurrentCurrency
    │   └── SelectCurrency
    ├── pages
    │   ├── FirstCalcPage
    │   └── SecondCalcPage
    ├── styles
    ├── test
    │   └── utils
    └── utils
```
