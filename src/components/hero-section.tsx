"use client";

import { Phone, Shield, User } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = '/skt-hero-bg.jpg';
  }, []);

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeTd9yGOdt59W0wH19-8V0ULpmLwP1tB3qd1km-drXz9aH-kQ/viewform?usp=header",
      "_blank"
    );
  };

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000 flex items-center"
      style={{
        backgroundImage: imageLoaded 
          ? 'linear-gradient(rgba(50, 64, 140, 0.8), rgba(50, 64, 140, 0.8)), url("/skt-hero-bg.jpg")'
          : 'linear-gradient(rgba(50, 64, 140, 0.9), rgba(180, 185, 217, 0.9))',
        minHeight: '100vh'
      }}
    >
      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Main Title */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-axencis-1 drop-shadow-lg">SKT</span> 유심 사고 피해자 집단소송 모집 (제3차)
          </h1>
        </div>

        {/* Key Benefits */}
        <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-10 mb-12 border-2 border-axencis-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <User className="w-6 h-6 text-axencis-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-axencis-5">✓ SKT 본인 명의 가입자라면 누구나</div>
                <div className="text-sm text-axencis-5 opacity-70">(2025. 04. 19. 기준)</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-axencis-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-axencis-5">✓ 착수금 1만 원으로 소송 참여 가능</div>
                <div className="text-sm text-axencis-5 opacity-70">(성공보수 10~20%)</div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-axencis-3 mt-1 flex-shrink-0" />
              <div>
                <div className="font-semibold text-axencis-5">✓ 과기정통부 고문 변호사가 직접 수행</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="text-center">
          <button
            onClick={openGoogleForm}
            className="bg-gradient-to-r from-axencis-2 to-axencis-1 hover:from-axencis-3 hover:to-axencis-2 text-white font-bold py-6 md:py-8 px-12 md:px-16 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 text-xl md:text-3xl border-2 border-axencis-4 hover:border-white"
          >
            <div className="flex items-center justify-center space-x-3">
              <span>참여 신청서 작성</span>
              <span className="text-3xl">📝</span>
            </div>
            <div className="text-base md:text-lg mt-3 text-axencis-4 font-medium">👆 클릭하여 신청하기</div>
          </button>
        </div>
      </div>
    </section>
  );
}