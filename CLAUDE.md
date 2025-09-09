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
```
src/
├── app/
│   ├── layout.tsx          # 메인 레이아웃, SEO 설정
│   ├── page.tsx            # 홈페이지
│   ├── globals.css         # 전역 스타일
│   ├── robots.ts           # 검색엔진 크롤링 가이드
│   └── sitemap.ts          # XML 사이트맵
├── components/
│   ├── header.tsx          # 네비게이션 헤더
│   ├── hero-section.tsx    # 메인 히어로 섹션
│   ├── participation-guide.tsx # 참여 안내
│   ├── incident-timeline.tsx   # 사건 개요
│   ├── lawsuit-participation.tsx # 소송 참여 정보
│   ├── faq-section.tsx     # 자주 묻는 질문
│   ├── lawyer-introduction.tsx # 변호사 인사말
│   └── contact-cta.tsx     # 문의/신청 섹션
└── lib/
    └── utils.ts            # 유틸리티 함수
```

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

### 3. 네비게이션 시스템
- **고정 헤더**: 스크롤 시에도 항상 접근 가능
- **부드러운 스크롤**: 섹션 간 smooth scrolling
- **모바일 햄버거 메뉴**: 모바일에서 접을 수 있는 네비게이션
- **법률사무소 로고**: 클릭 시 공식 홈페이지로 연결

### 4. 이미지 최적화
- **Next.js Image 컴포넌트**: 자동 최적화 및 lazy loading
- **파비콘**: SVG 형식으로 선명한 표시
- **OG 이미지**: SNS 공유시 표시되는 대표 이미지

## 색상 시스템 (Tailwind CSS)

```css
.axencis-1 { color: #2E38F2; } /* Primary blue */
.axencis-2 { color: #3037BF; } /* Medium blue */
.axencis-3 { color: #32408C; } /* Dark blue */
.axencis-4 { color: #B4B9D9; } /* Light blue-gray */
.axencis-5 { color: #333640; } /* Dark gray */
```

## 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 빌드된 앱 시작
npm run start

# 린팅 검사
npm run lint

# 타입 체크
npm run type-check
```

## 배포 정보
- **플랫폼**: Vercel
- **도메인**: https://skt-lawsuit.vercel.app
- **자동 배포**: main 브랜치 푸시 시 자동 배포
- **환경**: Node.js 18+

## 컴포넌트별 상세 설명

### Header (header.tsx)
- 고정 위치 네비게이션
- 법률사무소 로고 및 메뉴 항목
- 모바일 반응형 햄버거 메뉴
- Google Forms 연결 신청 버튼

### Hero Section (hero-section.tsx)
- SKT 건물 배경 이미지
- 주요 혜택 강조 표시
- 메인 CTA 버튼
- 전체 화면 높이로 임팩트 있는 디자인

### Lawyer Introduction (lawyer-introduction.tsx)
- 대표변호사 인사말 및 경력
- 전문 분야, 정부 경력, 법무 경험 카드
- 법률사무소 정보 및 전문 영역
- 파란색 그라데이션 배경으로 신뢰감 조성

### Contact CTA (contact-cta.tsx)
- 참여 신청서 작성 섹션
- 법률사무소 연락처 정보
- 주의사항 및 입금 계좌 정보
- 시각적 구분을 위한 색상 코딩

## 성능 최적화

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

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

### 개발 환경 설정
```bash
# 의존성 설치
npm install

# 개발 서버 실행 (기본 포트 3000)
npm run dev

# 다른 포트에서 실행
npx next dev -p 3015
```

### 성능 모니터링
- Vercel Analytics로 성능 추적
- Core Web Vitals 지표 확인
- 정기적인 Lighthouse 감사

## 문제 해결

### 일반적인 문제
1. **웹팩 모듈 에러**: `.next` 폴더 삭제 후 재시작
2. **포트 충돌**: 다른 포트 번호 사용 (`npx next dev -p XXXX`)
3. **캐시 문제**: Hard refresh (Ctrl+F5) 또는 개발자 도구에서 캐시 비우기

### 디버깅
```bash
# 캐시 정리
rm -rf .next

# 의존성 재설치
rm -rf node_modules
npm install

# 타입스크립트 검사
npm run type-check
```

## 보안 고려사항
- 개인정보는 Google Forms를 통해서만 수집
- HTTPS 연결 강제
- CSP (Content Security Policy) 헤더 설정
- XSS 방지를 위한 입력 검증

## 추가 개발 가이드라인
- **코드 스타일**: ESLint 규칙 준수
- **컴포넌트**: 재사용 가능한 단위로 분리
- **타입 안정성**: TypeScript strict mode 사용
- **성능**: React.memo 및 useMemo 적절히 활용

## 연락처 정보
- **GitHub**: https://github.com/VibeJK/skt-privacy-lawsuit
- **법률사무소 화음**: https://hwaumlaw.com
- **문의 전화**: 1577-6421

---
*이 프로젝트는 Claude Code를 통해 개발되었습니다.*