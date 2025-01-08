# 프로젝트 소개

요즘 스터디를 진행하는 곳이 다양하게 있습니다. 에브리타임의 캠퍼스픽에서 스터디를 구하기도 하고, 대학교 학생회에서 공지로 올라오기도 하고, 팜플렛이나 포스터의 형태로 대자보에서도 보기도 합니다.

이런 스터디를 진행할 때, 미션을 수행하고 미션을 하지 않은 인원에게 벌금을 부과하는 식으로 많이 진행합니다.

이러한 과정에 도움이 되기 위해 스터디를 관리할 수 있는 서비스를 개발하기로 했습니다.

# 적용 기술과 배운점

`React`, `date-pickers`, `recoil`, `styled-components`, `eslint`, `prettier`, `OAuth2.0`
- Styled-Component를 통해 스타일을 입힌 컴포넌트를 재사용할 수 있도록 함
- OAuth2와 Call back url을 통한, github & google 로그인으로 jwt토큰 발급 로직 적용
- Recoil을 통해 네비게이션바 클릭 상태, 유저의 정보 등을 전역 상태로 관리
- MVVM Architecture(View - ViewModel - Repository - DataSource)로 각 역할이 독립적으로 작동하도록 함(SoC)
- eslint, prettier를 통해 코드 컨벤션을 따를 수 있도록 함
- Test 및 lint검사를 통과하고 s3에 푸시될 수 있도록 CI/CD 구축
- Lo-Fi → Hi-Fi 프로토타이핑으로 UI 설계

# 프로젝트 결과물

Lo-Fi Prototype

![image](https://github.com/user-attachments/assets/983929ba-0d68-4ce1-9af2-f2ed82263ea9)


Hi-Fi Prototype

![image](https://github.com/user-attachments/assets/e495dd62-e4fd-447d-a09f-04183a9e7d3a)

실제 서비스

![image](https://github.com/user-attachments/assets/a0daad80-5eae-4073-b83d-abec55c93bcf)
https://leporem.art/studit/
