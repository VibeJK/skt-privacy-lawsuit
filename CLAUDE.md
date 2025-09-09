# SKT 개인정보 유출 집단소송 참가자 모집 웹사이트 - 개발 가이드

## 프로젝트 개요
SKT USIM 개인정보 유출 집단소송자 참가자를 모집하는 페이지입니다. Next.js 15와 TypeScript, Tailwind CSS로 구축된 현대적인 반응형 웹사이트입니다.

## 기술 스택
- **프레임워크**: Next.js 15.5.2 (App Router)
- **언어**: TypeScript 5
- **스타일링**: Tailwind CSS 4
- **UI 컴포넌트**: Radix UI + Shadcn/ui
- **아이콘**: Lucide React
- **빌드 도구**: Turbopack
- **패키지 매니저**: npm

## 프로젝트 구조



## 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완전 대응
- Tailwind CSS의 responsive breakpoints 활용
- 유연한 그리드 시스템과 플렉스박스 레이아웃

### 2. SEO 최적화
- **메타데이터**: 완전한 title, description, keywords 설정
- **Open Graph**: SNS 공유 최적화
- **Twitter Cards**: 트위터 공유 최적화  
- **구조화 데이터**: JSON-LD를 통한 Google 검색 최적화
- **사이트맵**: 자동 생성되는 XML 사이트맵
- **Robots.txt**: 검색엔진 크롤링 가이드



### 4. 이미지 최적화
- **Next.js Image 컴포넌트**: 자동 최적화 및 lazy loading
- **파비콘**: SVG 형식으로 선명한 표시
- **OG 이미지**: SNS 공유시 표시되는 대표 이미지

## 색상 시스템 (Tailwind CSS)

```css
.Axencis.-Website-Redesign-1-hex { color: #2E38F2; }
.Axencis.-Website-Redesign-2-hex { color: #3037BF; }
.Axencis.-Website-Redesign-3-hex { color: #32408C; }
.Axencis.-Website-Redesign-4-hex { color: #B4B9D9; }
.Axencis.-Website-Redesign-5-hex { color: #333640; }
```

## 개발 명령어



## 배포 정보


## 컴포넌트별 상세 설명




## 성능 최적화



### 최적화 기법
- **Static Generation**: 모든 페이지 정적 생성
- **Image Optimization**: Next.js Image 컴포넌트 활용
- **Bundle Splitting**: 자동 코드 분할
- **Tree Shaking**: 미사용 코드 제거

## 브라우저 지원
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Responsive**: 320px ~ 1920px 해상도 대응

## 유지보수 가이드

### 콘텐츠 업데이트
1. **텍스트 수정**: 각 컴포넌트 파일에서 직접 수정
2. **이미지 교체**: `public/` 폴더의 파일 교체 후 재배포
3. **메타데이터**: `src/app/layout.tsx`에서 SEO 정보 수정



### 성능 모니터링
- Vercel Analytics로 성능 추적
- Core Web Vitals 지표 확인
- 정기적인 Lighthouse 감사

## 문제 해결

### 일반적인 문제


### 디버깅


## 보안 고려사항


## 추가 개발 가이드라인
- **코드 스타일**: ESLint 규칙 준수
- **컴포넌트**: 재사용 가능한 단위로 분리
