"use client"
import React, { useState } from 'react';
import { FaLeaf, FaRecycle, FaWater, FaTemperatureHigh, FaClock } from 'react-icons/fa';
import Link from 'next/link';
import PledgeModal from '@/components/PledgeModal';

const EnvironmentCampaign = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2050-01-01').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ years, months, days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // 초기값 설정

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  const campaigns = [
    {
      title: "탄소 발자국 줄이기",
      path: "/carbon-footprint",
      description: "일상생활에서 탄소 배출을 줄이는 방법을 실천해보세요",
      icon: <FaLeaf className="w-12 h-12 text-green-500" />,
      actions: [
        "대중교통 이용하기",
        "전기 절약하기",
        "일회용품 사용 줄이기",
        "로컬 푸드 이용하기"
      ]
    },
    {
      title: "재활용 실천하기",
      path: "/recycle",
      description: "올바른 분리수거로 지구를 지켜요",
      icon: <FaRecycle className="w-12 h-12 text-blue-500" />,
      actions: [
        "플라스틱 분리배출",
        "종이류 분리수거",
        "캔/페트병 압축하기",
        "포장재 줄이기"
      ]
    },
    {
      title: "물 절약 캠페인",
      path: "/water-saving",
      description: "소중한 물을 아껴쓰는 방법",
      icon: <FaWater className="w-12 h-12 text-cyan-500" />,
      actions: [
        "양치컵 사용하기",
        "짧은 샤워하기",
        "빗물 재활용하기",
        "절수기 설치하기"
      ]
    },
    {
      title: "에너지 절약",
      path: "/energy-saving",
      description: "에너지 절약으로 지구 온도 낮추기",
      icon: <FaTemperatureHigh className="w-12 h-12 text-orange-500" />,
      actions: [
        "냉난방 온도 조절하기",
        "대기전력 차단하기",
        "LED 전구 사용하기",
        "자연광 활용하기"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      {/* 헤더 섹션 */}
      <header className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">지구를 살리는 작은 실천</h1>
          <p className="text-xl">우리 모두가 함께하는 환경 보호 캠페인</p>
        </div>
      </header>
      {/* 카운트다운 타이머 섹션 */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaClock className="w-8 h-8 text-red-500" />
              <h2 className="text-2xl font-bold text-white">기후 위기 시계</h2>
            </div>
            <p className="text-gray-300 text-center mb-8">
              지구 평균 기온 1.5°C 상승까지 남은 시간 (2050년 기준)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[
                { value: timeLeft.years, label: "년" },
                { value: timeLeft.months, label: "월" },
                { value: timeLeft.days, label: "일" },
                { value: timeLeft.hours, label: "시간" },
                { value: timeLeft.minutes, label: "분" },
                { value: timeLeft.seconds, label: "초" }
              ].map((item, index) => (
                <div key={index} className="bg-red-600 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-white">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-16">
        {/* 캠페인 소개 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campaigns.map((campaign, index) => (
            <Link 
              key={index} 
              href={campaign.path}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center mb-6">
                  {campaign.icon}
                  <h2 className="text-2xl font-bold mt-4 mb-2">{campaign.title}</h2>
                  <p className="text-gray-600">{campaign.description}</p>
                </div>
                <ul className="space-y-2">
                  {campaign.actions.map((action, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center bg-gray-50 p-3 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        {/* 참여 섹션 */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">함께 실천해요!</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              작은 실천이 모여 큰 변화를 만듭니다.
              지금 바로 환경 보호 캠페인에 동참해보세요!
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              실천 서약하기
            </button>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 환경 보호 캠페인. 모든 권리 보유.</p>
        </div>
      </footer>

      <PledgeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="campaign"
      />
    </div>
  );
};

export default EnvironmentCampaign;