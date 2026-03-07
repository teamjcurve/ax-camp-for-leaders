import { Asset, Module, Agent } from './types';

export const JOURNEY_MODULES: Module[] = [
  {
    id: 'M1',
    title: 'M1. Basic Skill',
    description: 'AI에게 일을 시키는 법 (Prompt Communicating)',
    details: [
      '제미나이 접속 및 구글 개인 계정 로그인',
      'Role prompting 및 사고모드 활용 기술',
      '제미나이 도구를 활용한 AI 음악 제작',
      '프롬프트 기반 AI 이미지 생성 실습',
      '고화질 AI 동영상 제작 및 시나리오 구성'
    ]
  },
  {
    id: 'M2',
    title: 'M2. AI Agent Building',
    description: '나만의 AI 코치 만들기',
    details: [
      '제미나이 대화를 통한 프롬프트 초안 작성',
      '프롬프트 엔지니어링 코치 Gems 활용',
      '에이전트 피드백 및 성능 고도화',
      '나만의 커스텀 Gems 구축 및 배포'
    ]
  },
  {
    id: 'M3',
    title: 'M3. Advanced Skill',
    description: 'AI로 리더의 분석·판단 역량 증강하기 + Vibe coding',
    details: [
      'NotebookLM 기반 지식 소스 통합 및 분석',
      '인사이트 추출 및 토론 팟캐스트 생성',
      '리서치 기능 활용 심화 콘텐츠 제작',
      '바이브 코딩 코치를 활용한 프롬프트 완성',
      '구글 AI Studio 기반 포트폴리오 웹 제작'
    ]
  }
];

export const ASSETS: Asset[] = [
  {
    id: 'v1',
    type: 'video',
    title: '2030 글로벌 시장 선점 전략',
    description: 'Veo 모델을 활용해 리더가 직접 기획하고 생성한 고화질 비즈니스 홍보 영상.',
    thumbnail: 'https://picsum.photos/seed/strategy1/800/450',
    author: '홍길동 상무',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'v2',
    type: 'video',
    title: '미래 모빌리티 서비스 비전',
    description: 'AI가 그린 미래 도시와 LG의 모빌리티 솔루션 시나리오.',
    thumbnail: 'https://picsum.photos/seed/mobility/800/450',
    author: '이영희 전무',
    url: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 'a1',
    type: 'audio',
    title: 'LG Way: Innovation Harmony',
    description: 'Lyria 모델 기반으로 LG Way의 핵심 가치를 담아 제작한 AI 생성 오디오 콘텐츠.',
    thumbnail: 'https://picsum.photos/seed/music1/400/400',
    author: '김철수 리더',
    url: 'https://www.w3schools.com/html/horse.mp3'
  },
  {
    id: 'a2',
    type: 'audio',
    title: 'Future Pulse Beats',
    description: '디지털 혁신의 리듬을 표현한 앰비언트 사운드트랙.',
    thumbnail: 'https://picsum.photos/seed/music2/400/400',
    author: '박지민 팀장',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 'i1',
    type: 'image',
    title: '2030 스마트 홈 라이프스타일',
    description: 'Gemini 모델을 통해 구체화한 2030년 성공 시나리오 및 디지털 비주얼 에셋.',
    thumbnail: 'https://picsum.photos/seed/vision1/800/800',
    author: '최유진 상무',
    url: 'https://picsum.photos/seed/vision1/1200/1200'
  },
  {
    id: 'i2',
    type: 'image',
    title: 'AI Native 오피스 환경',
    description: '기술과 인간이 공존하는 미래의 업무 공간 시각화.',
    thumbnail: 'https://picsum.photos/seed/office/800/800',
    author: '정성훈 전무',
    url: 'https://picsum.photos/seed/office/1200/1200'
  },
  {
    id: 'w1',
    type: 'web',
    title: 'AX 성과 공유 대시보드',
    description: '바이브 코딩으로 구현한 리더별 AX 성과 공유 웹페이지 결과물.',
    thumbnail: 'https://picsum.photos/seed/web1/800/600',
    author: '한미소 리더',
    url: 'https://www.lg.com'
  },
  {
    id: 'w2',
    type: 'web',
    title: 'AI 에이전트 통합 포털',
    description: '부서 내 AI 에이전트들을 한눈에 관리하는 인터랙티브 웹 포트폴리오.',
    thumbnail: 'https://picsum.photos/seed/web2/800/600',
    author: '오현우 팀장',
    url: 'https://www.google.com/search?q=AI+Agent&igu=1'
  }
];

export const AGENTS: Agent[] = [
  {
    name: '임원 메시지 비서',
    role: 'Communication Support',
    description: '임원의 톤앤매너를 학습하여 대내외 메시지 초안을 작성하고 일정을 관리합니다.'
  },
  {
    name: '전략 리스크 리더',
    role: 'Risk Management',
    description: '글로벌 시장 동향을 실시간 분석하여 잠재적 리스크를 식별하고 대응 시나리오를 제안합니다.'
  },
  {
    name: '기술 트렌드 분석가',
    role: 'R&D Insight',
    description: '최신 논문과 특허 데이터를 분석하여 차세대 핵심 기술 후보군을 도출합니다.'
  }
];

export const PADLET_LINKS = [
  { id: 1, label: '01', title: '1차수 캠프 Padlet', color: '#A50034', url: '#' },
  { id: 2, label: '02', title: '2차수 캠프 Padlet', color: '#A50034', url: '#' },
  { id: 3, label: '03', title: '3차수 캠프 Padlet', color: '#A50034', url: '#' },
  { id: 4, label: '04', title: '4차수 캠프 Padlet', color: '#A50034', url: '#' },
  { id: 5, label: '05', title: '5차수 캠프 Padlet', color: '#A50034', url: '#' },
  { id: 6, label: '06', title: '6차수 캠프 Padlet', color: '#A50034', url: '#' },
];
