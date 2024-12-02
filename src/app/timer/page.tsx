"use client"
import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaArrowLeft, FaThermometerHalf, FaWater, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

const TimerPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // 타이머 로직
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2029-07-21').getTime(); // 1.5°C 도달 예상 시점
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
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const warningData = [
    {         icon: <FaThermometerHalf className="w-8 h-8 text-red-500" />,
      title: "현재 지구 평균 기온 상승",
      value: "1.297°C",
      description: "지난 12개월 동안 평균 1.5°C를 꾸준히 초과",
      path: "https://www.bbc.com/news/articles/c1dpnxnvv2go"
    },
    {
      icon: <FaWater className="w-8 h-8 text-blue-500" />,
      title: "해수면 상승",
      value: "3.3mm/년",
      description: "2°C 상승 시 10cm 더 상승 예상",
      path: "https://www.cbsnews.com/news/increased-threats-of-sea-level-rise-worldwide/"
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-green-500" />,
      title: "생태계 위험",
      value: "최소 40%",
      description: "산호초 멸종 위험도",
      path: "https://abcnews.go.com/US/climate-change-threatening-40-worlds-corals-extinction-conservation/story?id=115769573"
    }
  ];

  const impactData = [
    {
      title: "극단적 기후 현상",
      details: [
        "극심한 열파 빈도 증가",
        "극단적 강수 사건 빈번화",
        "장기 가뭄 위험 증가",
        "태풍 강도 증가"
      ],
      path: "https://science.nasa.gov/climate-change/extreme-weather/"
    },
    {
      title: "생태계 영향",
      details: [
        "생물 다양성 감소",
        "해양 생태계 파괴",
        "영구 동토층 해빙",
        "산림 파괴 가속화"
      ],
      path: "https://defenders.org/issues/combating-climate-change"
    },
    {
      title: "인류 생존 위협",
      details: [
        "식량 안보 위협",
        "물 부족 심화",
        "거주 불가능 지역 확대",
        "기후 난민 증가"
      ],
      path: "https://www.zurich.com/media/magazine/2022/there-could-be-1-2-billion-climate-refugees-by-2050-here-s-what-you-need-to-know"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Link href="/" className="fixed top-6 left-6 text-white hover:text-gray-300">
        <FaArrowLeft className="w-6 h-6" />
      </Link>

      {/* 경고 배너 */}
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base">
          ⚠️ 지구는 이미 일시적으로 1.5°C 온도 상승 임계점에 도달했습니다
        </p>
      </div>

      {/* 메인 타이머 섹션 */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            1.5°C 임계점까지
          </h1>
          <p className="text-xl text-red-400">
            지구 평균 기온 1.5°C 영구 상승 예상 시점
          </p>
        </div>

        {/* 타이머 디스플레이 */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto mb-20">
          {[
            { value: timeLeft.years, label: "년" },
            { value: timeLeft.months, label: "월" },
            { value: timeLeft.days, label: "일" },
            { value: timeLeft.hours, label: "시간" },
            { value: timeLeft.minutes, label: "분" },
            { value: timeLeft.seconds, label: "초" }
          ].map((item, index) => (
            <div key={index} className="bg-red-600 p-6 rounded-xl text-center transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-lg text-white">{item.label}</div>
            </div>
          ))}
        </div>

        {/* 경고 지표 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {warningData.map((item, index) => (
            <Link href={item.path} key={index} className="block" target="_blank">
                <div className="bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-xl text-white">{item.title}</h3>
                </div>
                <div className="text-4xl font-bold text-red-500 mb-2">{item.value}</div>
                <p className="text-gray-400">{item.description}</p>
                </div>
            </Link>
          ))}
        </div>

        {/* 영향 분석 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((section, index) => (
            <Link href={section.path} key={index} className="block" target="_blank">
                <div className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
                <ul className="space-y-4">
                    {section.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <FaExclamationTriangle className="w-5 h-5 text-yellow-500 mt-1" />
                        <span>{detail}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </Link>
          ))}
        </div>

        {/* 행동 촉구 섹션 */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-center">
          <FaExclamationTriangle className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            지금이 마지막 기회입니다
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            1.5°C 상승은 돌이킬 수 없는 기후 재앙의 시작점입니다. 
            우리 모두의 즉각적인 행동이 필요한 때입니다.
          </p>
          <Link 
            href="/carbon-footprint" 
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            탄소 발자국 줄이기 실천하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
