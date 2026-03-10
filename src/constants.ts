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
    title: 'LG 화학, LETZero로 가는 길',
    description: '리더가 직접 기획하고 생성한 LG화학 비즈니스 홍보 영상',
    thumbnail: 'https://picsum.photos/seed/strategy1/800/450',
    author: '주재구 글로벌생산센터 제조혁신그룹장',
    url: 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/5277741318/7c5598e0e9a059cf5149bd06fdb84b6c/_________________.mp4?token=vKwXB9nW8snK2S3U-5spyHxgIJ9TFyq2C7Nsl9ZD3JZ9Z98mm0b4YZwYpUYmrpaaJY0LrWsAdvJLMd1I7YZ0LiyrJ6ZroCv9eYnfZUriaoxmywLp0UnIr6sutQyKWTanbqvj3r4w9vAI36GA5-UM53rlC5Tu4AQvihnX1yN6J1QRE4zLkyqOkWpU8WroEh0TJBvsl3L671z3QCBnKyHQBoSUCLM5Fxqgtk-Sm53guxA9zGGHAEY3mnwqUYAsBQqq'
  },
  {
    id: 'v2',
    type: 'video',
    title: 'LG 전자, 고객가치경험 x AI',
    description: 'LG 전자의 비전&고객 가치 혁신의 순간을 재치있게 표현한 영상',
    thumbnail: 'https://picsum.photos/seed/mobility/800/450',
    author: '강제남 고객가치혁신부문 상무',
    url: 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/5270298974/1069e96b87147f8b4c6a2fe02340c1fd/LG_Electronics__________.mp4?token=vKwXB9nW8snK2S3U-5spyHxgIJ9TFyq2C7Nsl9ZD3JZ9Z98mm0b4YZwYpUYmrpaaJY0LrWsAdvJLMd1I7YZ0LiyrJ6ZroCv9eYnfZUriaoxXkJpJCni0jjReUGYXEsQAPV3OdraW_PhCZcqYSUczGmq_FnyKZ9VK92YeY_nkucbGd40j0d9aufoMUvhUq5cdFH96Prng2MNYHbl2-0wu3FJ-9CdOD9oikC6K13ogmOOD-cQiKKbVd__5KImiA6XCIXUg6pSjbwco73NWM6x9pg=='
  },
  {
    id: 'a1',
    type: 'audio',
    title: 'The Breath of Bright Green',
    description: '대외협력의 패러다임을 바꾸는 전략을 담은 음악',
    thumbnail: 'https://picsum.photos/seed/music1/400/400',
    author: '김남호 LG에너지솔루션 대외협력담당',
    url: 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/5272167197/62f9fd7bf5a371490535401b7b3f6ad6/The_Breath_of_Bright_Green.mp3?token=vKwXB9nW8snK2S3U-5spyHxgIJ9TFyq2C7Nsl9ZD3JZ9Z98mm0b4YZwYpUYmrpaaJY0LrWsAdvJLMd1I7YZ0LiyrJ6ZroCv9eYnfZUriaozbxHhzNAbbkMtqikktnmWe825PTdXMxMA9fsIAlNMAh3o-xAcQN0bpb3GVK5UZjESIhZOcqtpzlhcM0FhRzt7gaSgOxSgNLgUFb3KsKF-vrPWpxsEcBjJnyXRojSHeVDlro0Ru3OwGKed0FGwd6Cyn9qGQ1bY3dx3QBY0vqBF0dw=='
  },
  {
    id: 'a2',
    type: 'audio',
    title: 'Inspiration Flow',
    description: '고객의 삶을 LG전자 가전으로 바꾸기 위한 비전을 담은 음악',
    thumbnail: 'https://picsum.photos/seed/music2/400/400',
    author: '김민상 LG전자 한국B2C그룹 혼매영업담당',
    url: 'https://u1.padletusercontent.com/uploads/padlet-uploads-usc1/5270119207/101e4cdbc03e2af17695cfd4d11855c8/_______Inspiration_Flow.mp3?token=vKwXB9nW8snK2S3U-5spyHxgIJ9TFyq2C7Nsl9ZD3JZ9Z98mm0b4YZwYpUYmrpaaJY0LrWsAdvJLMd1I7YZ0LiyrJ6ZroCv9eYnfZUriaow9a9iEsIENS1KyUPDseb5Bcx-9uK0GLSDiS25tI0V0xEjj_cqD-15lketKJwWmHz3fzzQfdVey0T6laKWJdbx1taF2iqguKX2aAhNuNNQNm-tqB-TjZ_tuNplAitD0waIW1vuErT-OJPJ6Q30FXdBGt1jfCGC1p15a4MxVn_xZAA=='
  },
  {
    id: 'i1',
    type: 'image',
    title: 'LG생활건강 브랜드 웹툰 포스터',
    description: '한강 야경 배경 LG생활건강 대표 제품을 들고 서 있는 브랜드 홍보형 일러스트',
    thumbnail: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_618&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5274732234%2F08f8155dfe152e98d67f36b0c1e65aae%2Funnamed.jpg%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKioz4WctulfoGFX2EfWH_P1BMTUd6cQ9HqHqXHylf28G0f9HkFVlXQ6aSiWt_GVTCnWk_UN-YpURB0eFvNoA6BfvBCbYrMTFDJM1FEdxFugqdxnLRhuWIvv7XYLdrLWCbSbg%3D%3D',
    author: '박일상 영업총괄 / LG H&H HDB Division',
    url: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_618&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5274732234%2F08f8155dfe152e98d67f36b0c1e65aae%2Funnamed.jpg%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKioz4WctulfoGFX2EfWH_P1BMTUd6cQ9HqHqXHylf28G0f9HkFVlXQ6aSiWt_GVTCnWk_UN-YpURB0eFvNoA6BfvBCbYrMTFDJM1FEdxFugqdxnLRhuWIvv7XYLdrLWCbSbg%3D%3D'
  },
  {
    id: 'i2',
    type: 'image',
    title: '화성 인재 채용',
    description: '미래 인재 확보와 조직 문화에 대한 유머러스하면서도 대담한 비전을 담은 이미지',
    thumbnail: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_617&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5272155020%2F47e03b779e8b0d467be20d28f1d3896a%2FGemini_Generated_Image_kerwaxkerwaxkerw.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio_m6zZYpXMeGSCKmUbP6LGziHEY_j267LLR3PMjIn9LmncNQUEeGOECOANkpenCB0wdJnwxz_3xB_LMvuBf1yF4uJmIM4P4ZO5taAq_iY-ew3R0okmD3eBwgGtvA1Rodlb1PUST5ewPcUdayoLL1q7w1WxqC3U6Xz6PwR7Fl8pNE',
    author: '노도엽 전무 / LG생활건강 CHO',
    url: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_617&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5272155020%2F47e03b779e8b0d467be20d28f1d3896a%2FGemini_Generated_Image_kerwaxkerwaxkerw.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio_m6zZYpXMeGSCKmUbP6LGziHEY_j267LLR3PMjIn9LmncNQUEeGOECOANkpenCB0wdJnwxz_3xB_LMvuBf1yF4uJmIM4P4ZO5taAq_iY-ew3R0okmD3eBwgGtvA1Rodlb1PUST5ewPcUdayoLL1q7w1WxqC3U6Xz6PwR7Fl8pNE'
  },
  {
    id: 'i3',
    type: 'image',
    title: '젠슨 황과의 알프스 미팅',
    description: '글로벌 AI·디스플레이 생태계에서의 협력 비전을 표현한 이미지',
    thumbnail: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_1098&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5274922831%2F0eebe00282efb877cf76098f948e6450%2FGemini_Generated_Image_soov0tsoov0tsoov.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio_bGOwVeVuhrQjSX9vRJGfXIBxO3VjgIUUXPZEdx35uVYnYPW47EvJoOwJ_5z3jgWUG5bZKYmoVtBAqEaQ7LURXIuOln4ykBBBCUQmjiAG_ErawX_nq0qBDlmReVOjFLykJLTaHKkJ2WwUADI-PKJFncMBCmF8XRyg5PFghstU6E',
    author: '배종욱 담당 / LG디스플레이 TFT소자연구',
    url: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_1098&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5274922831%2F0eebe00282efb877cf76098f948e6450%2FGemini_Generated_Image_soov0tsoov0tsoov.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio_bGOwVeVuhrQjSX9vRJGfXIBxO3VjgIUUXPZEdx35uVYnYPW47EvJoOwJ_5z3jgWUG5bZKYmoVtBAqEaQ7LURXIuOln4ykBBBCUQmjiAG_ErawX_nq0qBDlmReVOjFLykJLTaHKkJ2WwUADI-PKJFncMBCmF8XRyg5PFghstU6E'
  },
  {
    id: 'i4',
    type: 'image',
    title: '아인슈타인과의 대화',
    description: '연구에 대한 열망과 자기 정체성을 표현한 이미지',
    thumbnail: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_617&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5277543481%2F95feff40c09f2cb377d52a3d182287be%2FGemini_Generated_Image_ig4unkig4unkig4u.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKiowfBaaM0IOKNbwqZcyXppG19-G5vhRL_WNYsCp0Cd0DBAKg9b9zYASHPw4QNq_hpzOf-LT9A1OYrl5tugHtzJzq88oMZW0H8vh-5YtplrrGbWo-7zPslxmB7NijaVWtxXPgg0scCa9d4JvLCCD0JuRi2cq5kOabkufB1dcu5jCf-',
    author: '최광욱 수석연구위원 / LG화학 차세대소재연구소',
    url: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_617&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5277543481%2F95feff40c09f2cb377d52a3d182287be%2FGemini_Generated_Image_ig4unkig4unkig4u.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKiowfBaaM0IOKNbwqZcyXppG19-G5vhRL_WNYsCp0Cd0DBAKg9b9zYASHPw4QNq_hpzOf-LT9A1OYrl5tugHtzJzq88oMZW0H8vh-5YtplrrGbWo-7zPslxmB7NijaVWtxXPgg0scCa9d4JvLCCD0JuRi2cq5kOabkufB1dcu5jCf-'
  },
  {
    id: 'i5',
    type: 'image',
    title: '화석 연료가 사라진 미래',
    description: '친환경 도시를 배경으로 LG에너지솔루션 브랜드 비전을 담은 광고형 이미지',
    thumbnail: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_610%2Cw_1120&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5275191506%2Faaaf195bddcee59a4fb3c29299d86abf%2FGemini_Generated_Image_eoarapeoarapeoar.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio1SBTMgJ2n3TfUzBq81HUr8F3WB_YqL5I3c9t7vAV69LwBhXMdc-m4GoVmUFhxGFIhVyTXg5o-YVzl5B-aTyVxCZzDjbpvByiRl5Gm6pDV0R5AEftIgAwANclKsgbwBdvbCjJ9vWzi-yVeI5TxewpkLBNqJcnlyEQwfZSZNeRARI',
    author: '현오영 센터장 / LG에너지솔루션 품질경영센터',
    url: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_610%2Cw_1120&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5275191506%2Faaaf195bddcee59a4fb3c29299d86abf%2FGemini_Generated_Image_eoarapeoarapeoar.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio1SBTMgJ2n3TfUzBq81HUr8F3WB_YqL5I3c9t7vAV69LwBhXMdc-m4GoVmUFhxGFIhVyTXg5o-YVzl5B-aTyVxCZzDjbpvByiRl5Gm6pDV0R5AEftIgAwANclKsgbwBdvbCjJ9vWzi-yVeI5TxewpkLBNqJcnlyEQwfZSZNeRARI'
  },
  {
    id: 'i6',
    type: 'image',
    title: 'LG화학 청주공장 프로젝트 성공',
    description: 'LG화학 청주공장 입구 앞에서 임직원들이 외치는 "프로젝트 성공!"',
    thumbnail: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_1098&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5277536685%2F2bcf15315328b9b59d0c9bc1dd51c2af%2FGemini_Generated_Image_df7y0df7y0df7y0d.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio_hDxHzPKVNYclHS3F39QY6RP6hZ9GCgSD0-vPWmBrthPZCod8AkekFO8quCMbx6NzgFQh0Oo2j5Jjsz4NweLXkoC-4r0cF_0nYaPTGU7E8EMlNHrBINZZhbjWnC2dqgss6f-f2r97N4ZEMGVL2NiTbz-ULj8Xw7AhCHG15QPQy0',
    author: '최종완 상무 / LG화학 청주 오창공장',
    url: 'https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_824%2Cw_1098&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F5277536685%2F2bcf15315328b9b59d0c9bc1dd51c2af%2FGemini_Generated_Image_df7y0df7y0df7y0d.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio_hDxHzPKVNYclHS3F39QY6RP6hZ9GCgSD0-vPWmBrthPZCod8AkekFO8quCMbx6NzgFQh0Oo2j5Jjsz4NweLXkoC-4r0cF_0nYaPTGU7E8EMlNHrBINZZhbjWnC2dqgss6f-f2r97N4ZEMGVL2NiTbz-ULj8Xw7AhCHG15QPQy0'
  },
  {
    id: 'w1',
    type: 'web',
    title: '전사 고정비 목표 17조 달성 포부',
    description: '전사 고정비 목표 17조 달성을 위한 포부를 담은 웹 포트폴리오',
    thumbnail: 'https://drive.google.com/thumbnail?id=1_RjjE7TTTbcnhBejGXoiowvz33cZYjyq&sz=w800',
    author: 'LG전자 본사 CFO 김창태 부사장',
    url: 'https://aistudio.google.com/apps/13f978b0-3c4c-467f-a3af-4278d5400eb8?showPreview=true&showAssistant=true&fullscreenApplet=true'
  },
  {
    id: 'w2',
    type: 'web',
    title: '수익 강화 및 미래 보장 포부',
    description: '회사의 수익을 강화하고 밝은 미래를 보장하고자 하는 포부를 담은 웹 포트폴리오',
    thumbnail: 'https://drive.google.com/thumbnail?id=15Q64n6Nppok9vqaPZ7leEKf6K2Pmccgz&sz=w800',
    author: 'Global Legal Affairs / 한예일 상무',
    url: 'https://aistudio.google.com/apps/9f4dad2e-8714-4fce-a681-93e7b947b0ad?fullscreenApplet=true&showPreview=true&showAssistant=true'
  }
];

export const AGENTS: Agent[] = [
  {
    name: 'LFP 전략 컨설턴트',
    role: 'Battery Strategy',
    description: 'LFP 배터리 시장의 경쟁 구도와 기술 트렌드를 분석하여 최적의 사업 전략을 제안합니다.',
    url: 'https://gemini.google.com/gem/3c496baabbc8?usp=sharing',
    avatar: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: 'Memory 구매 담당자 AI Agent',
    role: 'Procurement AI',
    description: '메모리 반도체 수급 현황과 가격 추이를 예측하여 구매 의사결정을 지원하는 전문 에이전트입니다.',
    url: 'https://gemini.google.com/gem/9f464d0f7a62?usp=sharing',
    avatar: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    name: '세계 최고의 디스플레이 컨설턴트',
    role: 'Display Expert',
    description: '차세대 디스플레이 기술 로드맵과 시장 수요를 분석하여 제품 경쟁력 강화 방안을 도출합니다.',
    url: 'https://gemini.google.com/gem/f926b38a400e?usp=sharing',
    avatar: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const PADLET_LINKS = [
  { id: 1, label: '01', title: '1차수 캠프 Padlet', color: '#A50034', url: 'https://url.kr/w5xt5w' },
  { id: 2, label: '02', title: '2차수 캠프 Padlet', color: '#A50034', url: 'https://url.kr/g88kdj' },
  { id: 3, label: '03', title: '3차수 캠프 Padlet', color: '#A50034', url: 'https://url.kr/chabja' },
  { id: 4, label: '04', title: '4차수 캠프 Padlet', color: '#A50034', url: 'https://url.kr/m4to8b' },
  { id: 5, label: '05', title: '5차수 캠프 Padlet', color: '#A50034', url: 'https://url.kr/x33m1i' },
  { id: 6, label: '06', title: '6차수 캠프 Padlet', color: '#A50034', url: 'https://url.kr/ghbgac' },
];
