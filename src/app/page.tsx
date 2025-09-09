import { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import ParticipationGuide from "@/components/participation-guide";
import IncidentTimeline from "@/components/incident-timeline";
import LawsuitParticipation from "@/components/lawsuit-participation";
import FaqSection from "@/components/faq-section";
import LawyerIntroduction from "@/components/lawyer-introduction";
import ContactCta from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "SKT 유심 정보 유출 집단소송 3차 모집",
  description: "2025년 4월 SKT 유심 정보 유출 사건 피해자 집단소송 3차 모집. 착수금 1만원으로 손해배상 청구 가능. 과기정통부 고문 변호사 직접 수행.",
  openGraph: {
    title: "SKT 유심 정보 유출 집단소송 3차 모집 | 법률사무소 화음",
    description: "2025년 4월 SKT 유심 정보 유출 사건 피해자라면 누구나 참여 가능. 착수금 1만원, 성공보수 10-20%.",
    url: "https://skt-lawsuit.vercel.app",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ParticipationGuide />
      <IncidentTimeline />
      <LawsuitParticipation />
      <FaqSection />
      <LawyerIntroduction />
      <ContactCta />
    </main>
  );
}
