import { Users, FileText, CreditCard, Scale, HandHeart } from "lucide-react";

export default function LawsuitParticipation() {
  return (
    <section id="lawsuit-participation" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <HandHeart className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              🤝 왜 집단소송인가요?
            </h2>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            개인이 거대 기업에 맞서기엔 어려움이 따릅니다.<br />
            집단소송은 효율적인 권리 구제와 유사 사태 재발 방지를 위한 가장 효과적인 방법입니다.
          </p>
        </div>

        {/* Participation Method */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="text-center mb-8">
            <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              📝 집단소송 참여 방법
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-800 mb-2">
                    🎯 모집 대상:
                  </div>
                  <div className="text-gray-700">
                    2025. 4. 19. 당시 SKT(알뜰폰 포함) 가입자 (법인 명의 제외)
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-800 mb-2">
                    📅 모집 기간(제3차):
                  </div>
                  <div className="text-gray-700">
                    2025년 8월 1일(금) ~ 2025년 9월 30일(화)
                  </div>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="space-y-4">
              <div className="font-bold text-gray-800 mb-4">📋 참여 방법:</div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start space-x-3 mb-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      &apos;참여 신청서 작성&apos; 클릭 후 온라인 신청서 작성
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">
                      착수금 1만원 입금하면 계약체결 완료
                    </div>
                    <div className="text-sm text-blue-600 mt-2 bg-white p-2 rounded border">
                      💳 계좌번호: 신한은행 110-602-348180<br />
                      정재권(법률사무소 화음) 앞
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Information */}
        <div className="bg-green-50 rounded-lg shadow-lg p-6 md:p-8 border-2 border-green-200">
          <div className="text-center mb-6">
            <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
              💰 비용 안내
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="font-bold text-green-700 text-lg mb-3">착수금</div>
              <div className="text-2xl font-bold text-gray-800 mb-2">1인당 1만원</div>
              <div className="text-sm text-gray-600">
                (부가세, 법원 인지대, 송달료 포함)
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="font-bold text-green-700 text-lg mb-3">성공보수</div>
              <div className="text-gray-800 space-y-1">
                <div>• 1심에서 확정시: 경제적 이익가액의 <span className="font-bold text-green-600">10%</span></div>
                <div>• 2심에서 확정시: 경제적 이익가액의 <span className="font-bold text-green-600">15%</span></div>
                <div>• 3심에서 확정시: 경제적 이익가액의 <span className="font-bold text-green-600">20%</span></div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-4 border-2 border-yellow-200">
            <div className="text-center text-yellow-800 font-medium">
              ⚡ 착수금 1만원, 경제적 이익가액의 10-20%의 적은 성공보수만 책정하였으니 부담 없이 참여하세요!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}