"use client";

import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Q1. 현재 통신사를 변경한 상태여도 소송에 참여할 수 있나요?",
      answer: "A1. 2025. 4. 19.에 SKT에 가입되어 있으셨다면 이후 다른 통신사로 이동하셨더라도 소송에 참여하실 수 있습니다.",
    },
    {
      question: "Q2. 알뜰폰(MVNO) 가입자도 소송에 참여할 수 있나요?",
      answer: "A2. 알뜰폰 업체를 이용하셨더라도 SKT망 사용자라면 소송에 참여하실 수 있습니다.",
    },
    {
      question: "Q3. 미성년자도 소송에 참여할 수 있나요?",
      answer: "A3. 법정대리인(부모님 등)의 동의가 있다면 소송에 참여하실 수 있습니다.",
    },
    {
      question: "Q4. 소송 기간은 얼마나 걸릴까요?",
      answer: "A4. 1심에서 종료될 경우 통상적으로 1-2년 가량이 소요됩니다. 이번 사건의 경우 3심까지 진행될 가능성도 있어 상당한 시간이 필요할 수 있습니다.",
    },
    {
      question: "Q5. 배상금은 얼마나 받을 수 있을까요?",
      answer: "A5. 위자료로서 최소 20만원에서 최대 100만원 정도로 예상합니다. 소송 제기시에는 30만원~50만원으로 시작하여 진행 과정에서 확장할 예정입니다.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            ❓ FAQ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 md:px-6 py-4 md:py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-start"
              >
                <div className="font-semibold text-sm md:text-base text-gray-800 pr-4 leading-relaxed">
                  {faq.question}
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-4 md:px-6 pb-4 md:pb-5 border-t border-gray-100">
                  <div className="pt-4 text-sm md:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 md:p-8 border-2 border-blue-200">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-800 mb-4">
              💡 추가 질문이 있으시면 언제든지 문의해 주세요!
            </div>
            <div className="text-blue-600 font-medium">
              전화: 1577-6421 | 이메일: class@cello.bz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}