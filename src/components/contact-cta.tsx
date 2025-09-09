"use client";

import { Phone, Mail, MapPin, FileText, Rocket } from "lucide-react";

export default function ContactCta() {
  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeTd9yGOdt59W0wH19-8V0ULpmLwP1tB3qd1km-drXz9aH-kQ/viewform?usp=header",
      "_blank"
    );
  };

  return (
    <>
      {/* Application Form Section */}
      <section className="py-16 md:py-20" style={{background: 'linear-gradient(135deg, #2E38F2, #3037BF)'}} id="application-form">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white bg-opacity-20 rounded-full p-4 mb-6">
              <Rocket className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🚀 참여 신청서 작성
            </h2>
            <div className="text-xl md:text-2xl text-white opacity-90 mb-8">
              지금 바로 신청하세요!
            </div>
          
            <button
              onClick={openGoogleForm}
              className="bg-white text-axencis-2 hover:bg-axencis-4 hover:text-axencis-5 font-bold py-6 md:py-8 px-12 md:px-16 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-xl md:text-2xl mb-8 border-2 border-white hover:border-axencis-4"
            >
              <div className="flex items-center justify-center space-x-3">
                <FileText className="w-7 h-7 md:w-8 md:h-8" />
                <span>참여 신청서 작성하기</span>
                <span className="text-2xl">✍️</span>
              </div>
            </button>
            
            <div className="text-lg text-white opacity-80">
              ⏰ 마감일: 2025년 9월 30일 | 착수금: 1만원
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-20 bg-white" id="contact-info">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-axencis-3 rounded-full p-4 mb-6">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-axencis-5 mb-4">
              📞 문의하기
            </h2>
            <p className="text-lg text-axencis-5 opacity-70">
              궁금한 사항이 있으시면 언제든지 연락주세요
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Law Firm Info */}
            <div className="bg-axencis-4 bg-opacity-10 rounded-2xl p-8 border border-axencis-4">
              <div className="text-center md:text-left mb-6">
                <h3 className="text-2xl font-bold text-axencis-5 mb-2">
                  🏢 법률사무소 화음
                </h3>
                <div className="text-axencis-3 font-bold text-lg">
                  SKT 유심사건 집단소송팀
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-axencis-2 rounded-lg p-2">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-axencis-5 mb-1">전화</div>
                    <div className="text-axencis-5 text-xl font-bold">1577-6421</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-axencis-2 rounded-lg p-2">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-axencis-5 mb-1">이메일</div>
                    <div className="text-axencis-5 font-bold">class@cello.bz</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Hours */}
            <div className="bg-axencis-4 bg-opacity-10 rounded-2xl p-8 border border-axencis-4">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-axencis-2 rounded-lg p-2">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-axencis-5 mb-2">주소</div>
                    <div className="text-axencis-5 leading-relaxed font-medium">
                      서울특별시 강남구 논현로71길 10<br />
                      써밋빌딩 4층, 06240<br />
                      <span className="text-axencis-3 font-semibold">(역삼역 2번 출구)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-axencis-4 bg-opacity-20 rounded-xl p-6 border border-axencis-4">
                  <div className="text-center">
                    <div className="font-bold mb-2 text-lg text-axencis-3">⚡ 빠른 상담 접수</div>
                    <div className="text-axencis-5 text-sm font-medium">
                      평일 09:00-18:00 | 토요일 09:00-13:00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice - Enhanced Visibility */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-10"></div>
            <div className="relative bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 border-2 border-red-200 shadow-lg">
              <div className="text-center">
                <div className="inline-block bg-red-500 text-white rounded-full p-3 mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="font-bold text-2xl mb-4 text-red-700">
                  ⚠️ 주의사항 ⚠️
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-inner border border-red-200">
                  <div className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
                    참여 신청 후 <span className="text-red-600 font-bold">착수금 입금이 완료되어야</span> 계약이 체결됩니다.
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="text-lg font-bold text-gray-800 mb-2">💳 입금 계좌</div>
                    <div className="text-xl font-bold text-blue-600">
                      신한은행 110-602-348180<br />
                      <span className="text-gray-700">정재권(법률사무소 화음) 앞</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-axencis-4 border-opacity-30">
          <div className="text-sm font-medium text-axencis-5 opacity-70">
            © 2025 법률사무소 화음. All rights reserved.<br />
            SKT 유심 정보 유출 집단소송 전문팀
          </div>
        </div>
      </section>
    </>
  );
}