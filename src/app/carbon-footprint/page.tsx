'use client';
import React from 'react';
import { FaLeaf, FaHome, FaCar, FaShoppingBag} from 'react-icons/fa';
import Link from 'next/link';

const CarbonFootprint = () => {
  const categories = [
    {
      title: "가정에서의 실천",
      icon: <FaHome className="w-8 h-8 text-green-500" />,
      tips: [
        "냉난방 온도 적정 유지 (여름 26도, 겨울 20도)",
        "사용하지 않는 전자기기 플러그 뽑기",
        "LED 조명 사용하기",
        "절수 샤워헤드 사용하기"
      ]
    },
    {
      title: "교통수단",
      icon: <FaCar className="w-8 h-8 text-blue-500" />,
      tips: [
        "대중교통 이용하기",
        "자전거나 도보 이용하기",
        "친환경 자동차 고려하기",
        "카풀 활용하기"
      ]
    },
    {
      title: "소비생활",
      icon: <FaShoppingBag className="w-8 h-8 text-purple-500" />,
      tips: [
        "장바구니 사용하기",
        "친환경 제품 선택하기",
        "과대포장 제품 피하기",
        "지역 농산물 구매하기"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4">
      {/* 상단 네비게이션 */}
      <nav className="mb-8">
        <Link href="/" className="text-green-600 hover:text-green-800 flex items-center gap-2">
          <FaLeaf /> 메인으로 돌아가기
        </Link>
      </nav>

      {/* 헤더 섹션 */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">탄소발자국 줄이기</h1>
        <p className="text-lg text-gray-600 mb-8">
          우리의 작은 실천이 지구의 미래를 바꿀 수 있습니다
        </p>
        
        {/* 탄소발자국 설명 카드 */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">탄소발자국이란?</h2>
          <p className="text-gray-700">
            개인이나 단체가 일상생활에서 발생시키는 온실가스의 총량을 의미합니다. 
            우리의 모든 활동은 직간접적으로 이산화탄소를 발생시키며, 
            이를 줄이는 것이 기후변화 대응의 첫걸음입니다.
          </p>
        </div>
      </div>

      {/* 실천 방법 카테고리 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              {category.icon}
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.tips.map((tip, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaLeaf className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 하단 실천 서약 섹션 */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-green-600 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">탄소중립 실천 서약</h2>
          <p className="mb-6">
            지구를 위한 작은 실천, 지금 시작해보세요!
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            실천 서약하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarbonFootprint;