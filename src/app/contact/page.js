'use client';

import { useState } from 'react';
import { siteContent } from '@/data/content';

export default function Contact() {
  const { footer, home } = siteContent;
  const contactInfo = footer.contact;

  const handleEmailContact = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            문의하기
          </h1>
          <p className="text-xl text-blue-100 mb-4">
            AI·ESG 컨설팅이 궁금하신가요?
          </p>
          <p className="text-lg text-blue-50">
            전문가가 맞춤형 상담과 견적을 제공해드립니다
          </p>
        </div>
      </section>

      {/* 문의 유형 선택 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">문의 유형</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">어떤 서비스에 관심이 있으신가요?</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {home.solutions.items.map((solution, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    ) : index === 1 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ) : index === 2 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{solution.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 정보 및 문의 양식 */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 연락처 정보 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">연락처 정보</h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">이메일</h3>
                    <p className="text-blue-600 dark:text-blue-400">{contactInfo.email}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">24시간 이내 답변</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">전화</h3>
                    <p>{contactInfo.phone}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">주소</h3>
                    <p>{contactInfo.address}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">직접 방문 가능 (사전 예약 필수)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">운영 시간</h3>
                    <p>평일 09:00 - 18:00</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">주말 및 공휴일 휴무</p>
                  </div>
                </div>
              </div>

              {/* 빠른 상담 안내 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">빠른 상담 안내</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    무료 컨설팅: 프로젝트 범위 및 예산 상담
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI·ESG 진단 및 로드맵 제안
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    견적 제공: 맞춤형 솔루션 견적 산출
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    ISO·ESG 인증 전 과정 지원
                  </li>
                </ul>
              </div>
            </div>

            {/* 문의 양식 */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">문의하기</h2>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleEmailContact(); }}>
                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">이름 *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">이메일 *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">회사명</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="회사명 (선택)"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">전화번호</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="010-1234-5678"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">문의 유형 *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">선택해주세요</option>
                    <option value="ai-bigdata">AI·빅데이터 분석</option>
                    <option value="esg">ESG 컨설팅</option>
                    <option value="iso">ISO 인증</option>
                    <option value="education">IT·AI 교육</option>
                    <option value="etc">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-900 dark:text-white">문의 내용 *</label>
                  <textarea
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="프로젝트 내용, 예산, 일정 등을 자유롭게 작성해주세요"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  문의 보내기
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                  제출하신 정보는 문의 답변 목적으로만 사용되며, 개인정보보호법에 따라 안전하게 관리됩니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">고객님들께서 가장 많이 문의하시는 내용입니다</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                어떤 ISO 인증을 지원하나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">A.</span> ISO 9001 (품질), 14001 (환경), 27001 (정보보안), 45001 (안전보건), 37001 (부패방지) 등 주요 ISO 인증을 모두 지원합니다.
                국제심사원 자격을 보유한 전문가가 직접 컨설팅합니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                ESG 보고서 작성도 가능한가요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">A.</span> 네, GRI, AA1000, ISSB 등 국제 기준에 맞는 ESG 보고서 작성을 지원합니다.
                지표 관리부터 검증까지 전 과정을 컨설팅합니다.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">Q.</span>
                AI·데이터 분석 프로젝트는 어떻게 진행되나요?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 ml-6 leading-relaxed">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">A.</span> Python, R 기반으로 데이터 수집-전처리-분석-모델링 과정을 수행합니다.
                주택가격 예측, 전력수요 예측 등 다양한 분야의 AI 모델 개발 경험이 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI·ESG 전문가와 상담하세요
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            5명의 검증된 전문가가 최적의 솔루션을 제안해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              이메일 문의
            </a>
            <a
              href={`tel:${contactInfo.phone.split(' / ')[0]}`}
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              전화 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
