"use client";

import { Calendar, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";

export default function ParticipationGuide() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date("2025-09-30T23:59:59");
      const now = new Date();
      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="participation-guide" className="bg-red-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            SKT 유심 사고 피해자 집단소송 참여 안내
          </h2>
          <div className="text-red-600 font-bold text-lg md:text-xl deadline-highlight">
            3차 모집 마감일 : 2025. 9. 30.
          </div>
        </div>


        {/* Critical Information */}
        <div className="bg-gray-800 text-white rounded-lg p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <div className="text-lg md:text-xl font-bold mb-4">
              지난 2025. 4. 19. 경 전대미문의 유심 정보 유출 사건이 발생하였습니다.
            </div>
            <div className="text-sm md:text-lg mb-4 leading-relaxed">
              유출된 데이터량으로만 볼 때 SKT 전체 회원에 대한 정보가 유출되었을 수 있을 정도로
              실로 엄청난 규모입니다.
            </div>
          </div>

          <div className="bg-red-900 rounded-lg p-4 md:p-6 border-2 border-red-600">
            <div className="text-center mb-4">
              <div className="text-2xl mb-3">🚨</div>
              <div className="font-bold text-lg text-red-100 mb-4">
                중요: 유심 정보 유출은 단순한 개인정보 유출이 아닙니다!
              </div>
              <div className="text-red-100 text-sm md:text-base leading-relaxed">
                악의의 제3자는 유심정보를 이용하여 복제폰을 만들 수 있고, 이를 이용하여
                각종 인증을 시도하는 등 마치 자기의 폰처럼 사용할 수 있게 됩니다.
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center border-2 border-gray-200">
            <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-xl md:text-2xl font-bold text-gray-800 mb-2">2,696만건</div>
            <div className="text-sm md:text-base text-gray-600 leading-tight">가입자 식별번호(IMSI) 유출</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center border-2 border-gray-200">
            <Calendar className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-xl md:text-2xl font-bold text-gray-800 mb-2">25종</div>
            <div className="text-sm md:text-base text-gray-600 leading-tight">유심정보 유형 유출</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center border-2 border-gray-200">
            <Clock className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-xl md:text-2xl font-bold text-gray-800 mb-2">9.82GB</div>
            <div className="text-sm md:text-base text-gray-600 leading-tight">총 유출 데이터 규모</div>
          </div>
        </div>
      </div>
    </section>
  );
}