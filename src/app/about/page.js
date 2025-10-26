import { siteContent } from "@/data/content";

export default function About() {
  const { about } = siteContent;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 dark:from-indigo-700 dark:via-violet-700 dark:to-fuchsia-700 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            {about.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-bold">
            {about.hero.subtitle}
          </p>
          <p className="text-lg text-blue-50 whitespace-pre-line font-medium max-w-3xl mx-auto">
            {about.hero.description}
          </p>
        </div>
      </section>

      {/* 회사 개요 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8 sm:mb-12 text-center">
            {about.overview.title}
          </h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-700">
            <div className="space-y-4 sm:space-y-6">
              {about.overview.items.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row border-b border-slate-200 dark:border-slate-700 pb-4 last:border-0 gap-1 sm:gap-0">
                  <div className="sm:w-32 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-black text-slate-600 dark:text-slate-400">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-base text-slate-900 dark:text-white font-medium">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 컨소시엄 전문팀 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4">
              {about.team.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-bold px-4">
              {about.team.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {about.team.members.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 transform"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-full flex items-center justify-center mb-5 sm:mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 text-center">
                  {member.name}
                </h3>

                <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mb-1 text-center font-black">
                  {member.company}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 text-center font-medium">
                  {member.role}
                </p>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 text-center font-medium">
                    {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실적 현황 통계 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
              {about.stats.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {about.stats.items.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 sm:hover:-translate-y-2 transform"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-600/5 to-sky-600/5 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-black text-slate-900 dark:text-white mb-0.5 sm:mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 프로젝트 실적 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4">
              {about.projects.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-bold px-4">
              {about.projects.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {about.projects.categories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 transform"
              >
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>

                <div className="relative">
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start bg-white/50 dark:bg-slate-800/50 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200/50 dark:border-slate-700/50"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 보유 자격 */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8 sm:mb-12 text-center">
            {about.qualifications.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {about.qualifications.items.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 flex items-start hover:-translate-y-1 transform"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-slate-900 dark:text-white font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 역량 */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-8 sm:mb-12 text-center">
            {about.strengths.title}
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {about.strengths.items.map((strength, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:-translate-y-1 transform"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2 sm:mb-3">
                  {strength.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-sky-600 dark:from-indigo-700 dark:via-violet-700 dark:to-fuchsia-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 px-4">
            AI·ESG 컨설팅이 필요하신가요?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 font-bold px-4">
            전문가와 상담하고 최적의 솔루션을 찾아보세요
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-black text-blue-600 bg-white hover:bg-blue-50 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            문의하기
            <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
