// 해태시스템 (HAETAE SYSTEM) 웹사이트 설정 파일
// 이 파일만 수정하면 전체 사이트의 텍스트를 변경할 수 있습니다

export const siteContent = {
  // 공통 정보
  common: {
    companyName: "해태시스템 (HAETAE SYSTEM)",
    tagline: "AI·ESG·데이터 기반 산업혁신 컨설팅 기업",
    description: "데이터로 진단하고, AI로 혁신하다",
  },

  // 헤더 메뉴
  header: {
    logo: "HAETAE SYSTEM",
    menu: {
      home: "홈",
      about: "회사소개",
      business: "사업분야",
      contact: "문의하기"
    },
    social: {
      youtube: "https://www.youtube.com/",
      blog: "https://blog.naver.com/"
    }
  },

  // 푸터
  footer: {
    company: {
      title: "해태시스템 (HAETAE SYSTEM)",
      description: "AI·ESG·데이터 기반 산업혁신 컨설팅 기업\n데이터로 진단하고, AI로 혁신하다"
    },
    quickLinks: {
      title: "메뉴",
      links: [
        { text: "회사소개", href: "/about" },
        { text: "사업분야", href: "/business" },
        { text: "문의하기", href: "/contact" }
      ]
    },
    solutions: {
      title: "핵심 서비스",
      items: [
        "AI·빅데이터 분석",
        "ESG 컨설팅 및 교육",
        "ISO 인증 지원",
        "IT·AI 교육 프로그램"
      ]
    },
    contact: {
      title: "문의",
      email: "jakobcc@naver.com",
      phone: "070-8027-4653 / 010-7657-3366",
      address: "강원특별자치도 춘천시 수풍골길 13번길 27, 2동 403호"
    },
    social: {
      title: "Follow Us",
      youtube: "https://www.youtube.com/",
      blog: "https://blog.naver.com/"
    },
    copyright: "© 2025 해태시스템 (HAETAE SYSTEM). All rights reserved.",
    footerLinks: [
      { text: "YouTube", href: "https://www.youtube.com/" },
      { text: "Blog", href: "https://blog.naver.com/" }
    ]
  },

  // 메인 페이지 (홈)
  home: {
    // 히어로 섹션
    hero: {
      badge: "AI·ESG·데이터 기반 산업혁신 컨설팅 기업",
      title: "데이터로 진단하고,\nAI로 혁신하다",
      subtitle: "스마트 산업 컨설팅 전문기업",
      description: "해태시스템은 AI, 빅데이터, ESG, ISO 컨설팅을 통해\n기업의 디지털 전환(DX)과 지속가능경영(ESG)을 실현합니다.",
      techStack: "설립 2024년 · 춘천 본사 · 컨소시엄 5명",
      buttons: {
        bigdata: {
          text: "사업분야 보기",
          href: "/business"
        },
        consulting: {
          text: "문의하기",
          href: "/contact"
        }
      },
      stats: [
        { number: "2024", label: "설립연도" },
        { number: "5+", label: "전문 컨설턴트" },
        { number: "AI+ESG", label: "융합 솔루션" },
        { number: "ISO", label: "국제심사원" }
      ]
    },

    // 핵심 솔루션 섹션
    solutions: {
      title: "핵심 사업분야",
      subtitle: "AI + ESG 융합 컨설팅으로 기업의 경쟁력을 강화합니다",
      items: [
        {
          name: "AI·빅데이터 분석",
          description: "Python·R 기반 데이터 수집, 분석 및 예측모델 구축 전문",
          features: [
            "주택가격·전력수요 예측모델 개발",
            "AI 학습데이터 구축 및 품질 진단",
            "공공·기업 데이터 분석 컨설팅"
          ],
          link: "/business",
          linkText: "자세히 보기"
        },
        {
          name: "ESG 컨설팅",
          description: "지속가능경영 자문 및 ESG 보고서 작성 전문",
          features: [
            "ESG 지표관리 및 보고서 작성",
            "GRI·AA1000·ISSB 기준 대응",
            "공급망 대응 교육 및 자문"
          ],
          link: "/business",
          linkText: "자세히 보기"
        },
        {
          name: "ISO 인증 컨설팅",
          description: "국제 표준 인증 획득부터 완료까지 전 과정 지원",
          features: [
            "ISO 9001·14001·45001·27001 인증",
            "진단 → 문서심사 → 인증 일괄지원",
            "직방·삼양화학 등 다수 기업 실적"
          ],
          link: "/business",
          linkText: "자세히 보기"
        },
        {
          name: "IT·AI 교육",
          description: "공공기관·대학 연계 실무 중심 AI·ESG 교육 운영",
          features: [
            "AI·Python·ChatGPT 실무 과정",
            "육군사관학교·대학 출강 실적",
            "기업 맞춤형 온·오프라인 교육"
          ],
          link: "/business",
          linkText: "자세히 보기"
        }
      ]
    },

    // 전문 역량 섹션
    techStack: {
      title: "전문 역량",
      subtitle: "검증된 전문가와 국제 자격으로 신뢰할 수 있는 서비스를 제공합니다",
      technologies: [
        { name: "빅데이터분석기사", description: "정보처리기사" },
        { name: "ISO 국제심사원", description: "9001·14001·45001" },
        { name: "GHG·GRI", description: "검증심사원" },
        { name: "ESG 컨설턴트", description: "1급 자격" }
      ]
    },

    // 컨소시엄 팀 섹션
    clients: {
      title: "컨소시엄 전문팀",
      subtitle: "5명의 검증된 전문가가 프로젝트를 수행합니다",
      categories: [
        {
          title: "정혜진 대표",
          description: "해태시스템 · 총괄기획\n데이터분석·ISO·ESG 컨설팅"
        },
        {
          title: "기술책임자",
          description: "알크리에이티브 · 기술책임\nAI·DX·스마트팩토리·ISO 심사"
        },
        {
          title: "전문 컨설턴트",
          description: "ESG·ISO·데이터분석 전문가\n5명의 컨소시엄 팀"
        }
      ]
    },

    // 핵심 경쟁력 섹션
    content: {
      title: "핵심 경쟁력",
      subtitle: "AI + ESG 융합형 기술력으로 차별화된 솔루션을 제공합니다",
      items: [
        {
          type: "YouTube",
          title: "AI + ESG 융합",
          subtitle: "기술 기반 ESG 평가",
          description: "AI 데이터 분석과 ESG 컨설팅을 결합한 통합 솔루션으로 기업의 지속가능경영을 지원합니다.",
          buttonText: "자세히 보기",
          link: "/about"
        },
        {
          type: "Blog",
          title: "공공·기업 실적",
          subtitle: "데이터바우처·스마트팩토리",
          description: "공공데이터 품질관리, ISO 통합심사, 육군사관학교 AI 교육 등 다수 프로젝트 수행 경험 보유",
          buttonText: "자세히 보기",
          link: "/about"
        }
      ]
    },

    // CTA 섹션
    cta: {
      title: "AI·ESG 컨설팅으로\n기업의 경쟁력을 강화하세요",
      subtitle: "데이터 기반 경영과 지속가능한 성장을 함께합니다",
      buttons: [
        {
          text: "문의하기",
          href: "/contact",
          primary: true
        },
        {
          text: "사업분야 보기",
          href: "/business",
          primary: false
        }
      ]
    }
  },

  // 회사소개 페이지
  about: {
    hero: {
      title: "해태시스템 소개",
      subtitle: "AI·ESG·데이터 기반 산업혁신 컨설팅 기업",
      description: "데이터로 진단하고, AI로 혁신하는\n스마트 산업 컨설팅 전문기업입니다."
    },
    overview: {
      title: "회사 개요",
      items: [
        { label: "회사명", value: "해태시스템 (HAETAE SYSTEM)" },
        { label: "대표", value: "정혜진" },
        { label: "설립연도", value: "2024년" },
        { label: "본사", value: "강원특별자치도 춘천시 수풍골길 13번길 27, 2동 403호" },
        { label: "주요 사업", value: "AI·데이터 분석, ESG 컨설팅, ISO 인증, 교육 서비스" },
        { label: "전문인력", value: "5명의 컨소시엄 전문가" }
      ]
    },
    team: {
      title: "컨소시엄 전문팀",
      subtitle: "5명의 검증된 전문가",
      members: [
        {
          name: "정혜진 대표",
          company: "해태시스템",
          role: "총괄 / 기획",
          expertise: "데이터분석, ISO, ESG 컨설팅"
        },
        {
          name: "기술책임자",
          company: "알크리에이티브",
          role: "기술책임 / AI·DX",
          expertise: "AI 예측모델, 스마트팩토리 DX, ISO 심사"
        },
        {
          name: "ESG 전문가 A",
          company: "링크ESG21",
          role: "ESG 컨설턴트",
          expertise: "ESG·ISO 심사, GHG, 검증심사"
        },
        {
          name: "ESG 전문가 B",
          company: "링크ESG21",
          role: "ESG 강사 / 보고서",
          expertise: "지속가능경영보고서, 검증, ESG 교육"
        },
        {
          name: "데이터 분석가",
          company: "아르미솔루션",
          role: "데이터 분석",
          expertise: "영상처리, 품질검사 AI, 데이터전처리"
        }
      ]
    },
    qualifications: {
      title: "보유 자격",
      items: [
        "빅데이터분석기사 / 정보처리기사",
        "ISO 국제심사원 (9001, 14001, 27001, 45001, 37001)",
        "GHG Professional / GRI Certified / ACSAP 검증심사원",
        "ESG 경영컨설턴트 1급"
      ]
    },
    strengths: {
      title: "핵심 역량",
      items: [
        {
          title: "AI + ESG 융합 컨설팅",
          description: "기술 기반 ESG 평가 및 개선 로드맵 제시"
        },
        {
          title: "ISO 인증 심사 전문성",
          description: "다수 기업(직방, 삼양화학, 다비오 등) ISO 통합심사 수행"
        },
        {
          title: "공공기관 과제 수행 역량",
          description: "데이터바우처, 스마트팩토리, ESG 교육과정 운영"
        },
        {
          title: "정부 평가 대응 컨설팅",
          description: "공공데이터 품질·메타관리·인증 컨설팅 수행 가능 (행안부 평가 대응)"
        }
      ]
    }
  }
};
