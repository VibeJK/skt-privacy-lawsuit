import { AlertTriangle, Eye, FileText, Megaphone, Store, Target } from "lucide-react";

export default function IncidentTimeline() {
  const timelineEvents = [
    {
      date: "2025. 4. 18. 18:09",
      event: "SKT 이상 신호 최초 감지",
      icon: Target,
      color: "bg-orange-100 text-orange-600",
    },
    {
      date: "2025. 4. 18. 23:20",
      event: "SKT 실제 악성코드 발견",
      icon: Eye,
      color: "bg-red-100 text-red-600",
    },
    {
      date: "2025. 4. 19. 23:40",
      event: "'유심정보 유출' SKT 내부 확정",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
    },
    {
      date: "2025. 4. 22.",
      event: "SKT 고객 유심 정보 유출 '공식 발표'",
      icon: Megaphone,
      color: "bg-blue-100 text-blue-600",
    },
    {
      date: "2025. 4. 28.",
      event: "유심 무상 교체 첫날, 전국 매장 재고 부족으로 혼잡 발생",
      icon: Store,
      color: "bg-gray-100 text-gray-600",
    },
    {
      date: "2025. 7. 4.",
      event: "민관합동조사단 최종 조사결과 발표",
      icon: FileText,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section id="incident-timeline" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            사건 개요
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                      <div className={`p-3 md:p-4 rounded-lg ${event.color}`}>
                        <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm md:text-base text-blue-700 mb-2 font-bold">
                          {event.date}
                        </div>
                        <div className="text-base md:text-lg text-gray-800 font-semibold leading-relaxed">
                          {event.event}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Statistics Box */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-6 md:p-8 mt-12 border-2 border-blue-200">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              📊 최종 유출 규모
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                25종
              </div>
              <div className="text-gray-700 font-medium">
                유심정보 유출 (9.82기가바이트)
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                2,696만건
              </div>
              <div className="text-gray-700 font-medium">
                가입자식별번호(IMSI) 기준
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                61대
              </div>
              <div className="text-gray-700 font-medium">
                감염서버 총 28대, 악성코드 총 33종
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}