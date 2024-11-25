'use client';
import React, { useState } from 'react';
import { FaCar, FaLeaf, FaLightbulb, FaRecycle } from 'react-icons/fa';
import PledgeModal from '@/components/PledgeModal';

export default function CarbonFootprintPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const carbonReductionTips = [
    {
      icon: <FaCar className="w-8 h-8 text-green-500" />,
      title: "교통",
      tips: [
        "대중교통 이용하기",
        "자전거나 도보 이용",
        "친환경 자동차 사용"
      ]
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-green-500" />,
      title: "에너지",
      tips: [
        "불필요한 전등 끄기",
        "대기전력 차단하기",
        "에너지효율 제품 사용"
      ]
    },
    // ... 기존 팁 내용들 ...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 기존 내용 유지 */}
      <main className="container mx-auto px-4 py-8">
        {/* ... 기존 컨텐츠 ... */}

        {/* 서약 섹션 */}
        <div className="bg-gradient-to-b from-blue-50/50 to-green-50/50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">함께 실천해요!</h2>
            <p className="text-lg text-gray-600 mb-8">
              작은 실천이 모여 큰 변화를 만듭니다. 지금 바로 환경 보호 캠페인에 동참해 보세요!
            </p>
            <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h3 className="font-bold text-xl mb-4 text-green-600">탄소중립 실천으로</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>지구 온도 낮추기</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>미래세대 보호하기</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>지속가능한 발전</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xl mb-4 text-green-600">우리가 얻는 것</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>깨끗한 공기</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>건강한 생활</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>에너지 비용 절감</span>
                    </li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full 
                         hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105
                         shadow-lg hover:shadow-xl"
              >
                탄소중립 서약 작성하기
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* 모달 컴포넌트 */}
      <PledgeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="carbon"
      />
    </div>
  );
}