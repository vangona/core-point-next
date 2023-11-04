# 코어창업 웹사이트

## 디자인 
- [Figma](https://www.figma.com/file/jrU15eXwfCea7TSMY1uzz2/Core-Point-1%EC%B0%A8-%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=13%3A2173&mode=design&t=FPkR1UbAbt51x4iY-1)
- 

## 기술스택
### FE
#### Typescript, eslint, prettier
- 코드 퀄리티 향상을 위한 정적 테스트 도구들

#### Nextjs
- 이후 Admin 패널 등의 개발 시, 세션 유지와 보안성을 높이기 위함

#### MUI
- 복잡한 기능이 없기 때문에 성능보다 생선성에 포커스를 두었음.

#### React Query
- fetch 데이터 관리를 용이하게 하기 위해 사용함.

#### React Form
- form 데이터가 많기 때문에 조작이 쉽도록 사용함.

### BE
#### Supabase
- 1인, 풀스택 개발이며 
- PostgreSQL에 대한 마이그레이션도 지원해주기 때문에 좋은 선택이라고 판단하였음.

### 배포 
#### EC2
- Nextjs의 BFF를 위해서 EC2를 이용해 배포함.