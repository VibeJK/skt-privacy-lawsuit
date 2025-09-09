import { Award, Briefcase, Quote, Shield } from "lucide-react";

export default function LawyerIntroduction() {
  return (
    <section id="lawyer-introduction" className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Professional Background */}
        <div className="bg-gradient-to-r from-axencis-3 to-axencis-2 text-white rounded-lg p-6 md:p-8 mb-8 shadow-lg">
          <div className="text-center mb-8">
            <Briefcase className="w-12 h-12 text-axencis-4 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              💼 인사말
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Quote Section */}
            <div className="bg-axencis-2 bg-opacity-80 rounded-lg p-6 md:p-8 mb-6 border-l-4 border-axencis-1">
              <Quote className="w-8 h-8 text-axencis-4 mb-4" />
              <blockquote className="text-lg md:text-xl leading-relaxed text-white italic mb-4">
                &ldquo;법률사무소 화음은 과학기술정보통신분야에서의 고도의 경험과 전문성을
                바탕으로 여러분이 입은 손해를 정당하게 배상받을 수 있도록
                성심성의껏 최선의 노력을 다하겠습니다.&rdquo;
              </blockquote>
              
              <div className="text-white opacity-90 font-medium">
                여러분의 소중한 권익이 온전히 지켜지는 그날까지 저희가 함께하겠습니다.
              </div>
            </div>

            <div className="text-center">
              <div className="text-xl font-bold text-white opacity-90 mb-2">
                - 법률사무소 화음 대표변호사 정재권 -
              </div>
              <div className="text-white opacity-80 font-medium">
                (과학기술정보통신부 고문 변호사)
              </div>
            </div>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-axencis-4 bg-opacity-20 rounded-lg p-6 text-center shadow-md border-2 border-axencis-4">
            <Award className="w-12 h-12 text-axencis-2 mx-auto mb-4" />
            <div className="font-bold text-axencis-5 text-lg mb-2">전문 분야</div>
            <div className="text-axencis-5 opacity-80">
              과학기술정보통신<br />
              개인정보보호<br />
              집단분쟁조정
            </div>
          </div>

          <div className="bg-axencis-4 bg-opacity-20 rounded-lg p-6 text-center shadow-md border-2 border-axencis-4">
            <Shield className="w-12 h-12 text-axencis-3 mx-auto mb-4" />
            <div className="font-bold text-axencis-5 text-lg mb-2">정부 경력</div>
            <div className="text-axencis-5 opacity-80">
              과학기술정보통신부<br />
              고문 변호사<br />
              법무 자문
            </div>
          </div>

          <div className="bg-axencis-4 bg-opacity-20 rounded-lg p-6 text-center shadow-md border-2 border-axencis-4">
            <Briefcase className="w-12 h-12 text-axencis-1 mx-auto mb-4" />
            <div className="font-bold text-axencis-5 text-lg mb-2">소송 경험</div>
            <div className="text-axencis-5 opacity-80">
              개인정보 유출<br />
              집단소송 다수<br />
              승소 경험 풍부
            </div>
          </div>
        </div>

        {/* Law Firm Information */}
        <div className="bg-axencis-4 bg-opacity-10 rounded-lg p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-axencis-5 mb-4">
              🏢 법률사무소 화음
            </h3>
            <div className="text-axencis-5 opacity-80 font-medium">
              국가연구개발사업 제재처분 분쟁 및 개인정보보호 전문
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md border border-axencis-4">
              <h4 className="font-bold text-axencis-5 text-lg mb-4">🎯 전문 영역</h4>
              <ul className="text-axencis-5 opacity-80 space-y-2">
                <li>• 개인정보보호법 위반 손해배상</li>
                <li>• 통신사 정보유출 집단소송</li>
                <li>• 국가연구개발사업 제재처분</li>
                <li>• 과학기술 관련 법무 자문</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-axencis-4">
              <h4 className="font-bold text-axencis-5 text-lg mb-4">🏆 주요 성과</h4>
              <ul className="text-axencis-5 opacity-80 space-y-2">
                <li>• 과기정통부 고문 변호사 역임</li>
                <li>• 개인정보 유출 집단소송 승소</li>
                <li>• 통신분야 법률 전문성 인정</li>
                <li>• 대규모 집단소송 경험 풍부</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="bg-axencis-2 text-white rounded-lg p-4 inline-block">
              <div className="font-bold">여러분의 권리를 지키겠습니다!</div>
              <div className="text-sm mt-1 text-white opacity-90">전문성과 경험으로 최선의 결과를 위해 노력하겠습니다</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}