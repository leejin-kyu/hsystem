'use client'

import Link from "next/link";
import { siteContent } from "@/data/content";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const { footer } = siteContent;
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white pb-24 relative overflow-hidden">
        {/* 배경 글로우 효과 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>

        {/* Main Footer */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-black mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                    HAETAE SYSTEM
                  </span>
                </h3>
                <p className="text-gray-300 mb-4 text-lg">
                  해태시스템 (HAETAE SYSTEM)
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  AI·ESG·데이터 기반 산업혁신 컨설팅 기업
                  <br />
                  스마트 산업 컨설팅 전문기업으로 AI, 빅데이터, ESG, ISO 컨설팅을 통해
                  <br />
                  기업의 디지털 전환(DX)과 지속가능경영(ESG)을 실현합니다
                </p>

                {/* Platform Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 rounded-full mb-6 shadow-md">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-black">설립 2024년 · 광주 본사 · 컨소시엄 다수</span>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-xl font-black mb-4">문의 및 연락</h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${footer.contact.email}`}
                      className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all flex-shrink-0 shadow-md">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm">이메일 문의</span>
                        <span className="text-xs text-gray-400">{footer.contact.email}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:070-8027-4653"
                      className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all flex-shrink-0 shadow-md">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm">전화 상담</span>
                        <span className="text-xs text-gray-400">070-8027-4653</span>
                        <span className="text-xs text-gray-400">010-7657-3366</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-3 text-slate-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm">본사 위치</span>
                        <span className="text-xs text-gray-400">{footer.contact.address}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mb-8"></div>

            {/* Core Services */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h5 className="font-black text-lg mb-2">AI·빅데이터 분석</h5>
                <p className="text-slate-400 text-sm font-medium">Python·R 기반 예측모델 구축</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h5 className="font-black text-lg mb-2">ESG 컨설팅</h5>
                <p className="text-slate-400 text-sm font-medium">지속가능경영 자문·보고서 작성</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h5 className="font-black text-lg mb-2">ISO 인증 컨설팅</h5>
                <p className="text-slate-400 text-sm font-medium">9001·14001·45001·27001 인증</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300">
                <h5 className="font-black text-lg mb-2">IT·AI 교육</h5>
                <p className="text-slate-400 text-sm font-medium">실무 중심 AI·Python 교육</p>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                AI + ESG 융합 컨설팅으로 기업의 경쟁력을 강화합니다
              </p>

              {/* Service Notice */}
              <div className="max-w-2xl mx-auto mb-6 bg-white/10 border border-white/20 rounded-lg p-4">
                <p className="text-xs text-gray-300">
                  <span className="font-semibold text-white">※ 컨설팅 문의:</span> 공공·기업 프로젝트 및 맞춤형 컨설팅 상담을 원하시면 이메일 또는 전화로 문의주세요.
                </p>
              </div>

              <p className="text-gray-500 text-sm">
                © 2024 HAETAE SYSTEM (해태시스템). All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 dark:from-indigo-700 dark:via-violet-700 dark:to-fuchsia-700 py-4 shadow-2xl z-40 border-t-2 border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left text-white">
              <h4 className="text-lg font-black mb-0.5">컨설팅 문의</h4>
              <p className="text-xs opacity-90 font-medium">AI·ESG·ISO 컨설팅 및 프로젝트 문의를 남겨주세요</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:070-8027-4653"
                className="px-6 py-2.5 bg-white text-blue-600 rounded-full font-black hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                전화 상담
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2.5 bg-white/90 text-slate-700 rounded-full font-black hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                이메일 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
