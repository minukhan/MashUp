# 서울 예술단 공연 정보 제공 웹 애플리케이션

## 프로젝트 개요

이 웹 애플리케이션은 서울시 예술단의 공연 정보를 제공하여 사용자가 관심 있는 공연 분야를 선택하고, 해당 공연의 상세 정보를 확인할 수 있도록 돕는 플랫폼입니다. 사용자는 드롭다운 필터링을 통해 쉽게 원하는 공연을 찾을 수 있으며, 공연 정보는 서울시 열린 데이터 광장의 API를 통해 실시간으로 제공됩니다.


## 내가 맡은 일 : 웹 페이지 구현 및 JQuery를 이용해서 동적 데이터 로딩 및 DOM 을 조작해봤다. 


## 배운 점 및 느낀 점

### 🔗 **외부 API 연동**
- `$.getJSON`을 사용하여 외부 API로부터 데이터를 받아오는 과정에서 비동기 방식으로 데이터를 처리하고 UI에 반영하는 방법을 익혔습니다. 이를 통해 실시간으로 데이터를 업데이트하는 웹 애플리케이션의 흐름을 이해할 수 있었습니다.

### 🚧 **CORS 문제 해결**
- CORS(Cross-Origin Resource Sharing) 정책으로 인한 제한을 해결하기 위해 **Heroku Proxy Server**를 사용하여 서버 측에서 요청을 중계하는 방법을 배웠습니다. 이는 프론트엔드와 백엔드 간의 데이터 교환에서 발생할 수 있는 이슈를 해결하는 중요한 방법이었습니다.

### 🔄 **DOM 조작 및 이벤트 처리**
- jQuery를 활용해 동적으로 DOM을 조작하고, 이벤트 리스너를 사용해 사용자 인터랙션을 처리하는 방법을 배웠습니다. 이를 통해 동적인 사용자 경험을 제공할 수 있는 능력을 키울 수 있었습니다.

### 🎨 **UI 개선**
- **Bootstrap**을 활용하여 반응형 디자인을 구현하면서 다양한 화면 크기에서 일관된 사용자 경험을 제공하는 방법을 배웠습니다. 이를 통해 빠르고 효율적인 UI 설계에 대한 이해도가 높아졌습니다.


## 기술 스택

### 프론트엔드
- **HTML**: 웹 페이지 구조 설계
- **CSS**: 미디어형 반응형 디자인 구현 (Bootstrap 사용)
- **JavaScript (jQuery)**: 동적 데이터 로딩 및 DOM 조작

### 백엔드 및 데이터
- **외부 API**: 서울시 열린 데이터 광장 (공연 정보 제공)
- **CORS 문제 해결**: Heroku Proxy Server를 활용하여 CORS 요청 우회

## 주요 기능

### 🎭 **드롭다운 필터링**
- 드롭다운 메뉴에서 특정 공연 분야를 선택하면 해당 공연 정보만 화면에 동적으로 표시됩니다.

### 🌐 **외부 API 연동**
- 서울시 열린 데이터 광장에서 JSON 형식의 공연 데이터를 가져와, 이를 기반으로 웹 페이지를 동적으로 업데이트합니다.

### 📱 **사용자 친화적 UI**
- **Bootstrap**을 활용하여 반응형 디자인을 구현, 모든 화면 크기에서 일관된 사용자 경험을 제공합니다.
