'use client';
import React, { useState } from 'react';
import { FaCar, FaLightbulb } from 'react-icons/fa';
import PledgeModal from '@/components/PledgeModal';

export default function CarbonFootprintPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-green-100">
      {/* 상단 네비게이션은 layout.tsx에 있을 것으로 가정 */}
      
      {/* 메인 콘텐츠 */}
      <main className="container mx-auto px-4 py-8 ">
        {/* 뒤로가기 링크 */}
        <div className="mb-8">
          <a href="#" className="text-green-600 flex items-center gap-2">
            <span>뒤로가기</span>
          </a>
        </div>

        {/* 제목 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">탄소발자국 줄이기</h1>
          <p className="text-gray-600">우리의 작은 실천이 지구의 미래를 바꿀 수 있습니다</p>
        </div>

        {/* 설명 카드 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-xl font-bold mb-4">탄소발자국이란?</h2>
          <p className="text-gray-600">개인이나 단체가 일상생활에서 발생시키는 온실가스의 총량을 의미합니다. 우리의 모든 활동은 직간접적으로 이산화탄소를 발생시키며, 이를 줄이는 것이 기후변화 대응의 첫걸음입니다.</p>
        </div>

        {/* 카테고리 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 가정에서의 실천 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-green-600">🏠</span> 가정에서의 실천
            </h3>
            <ul className="space-y-2">
              <li>냉난방 온도 적정 유지 (여름 26도, 겨울 20도)</li>
              <li>사용하지 않는 전자기기 플러그 뽑기</li>
              <li>LED 조명 사용하기</li>
              <li>절수 샤워헤드 사용하기</li>
            </ul>
          </div>

          {/* 교통 수단 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-green-600">🚗</span> 교통 수단
            </h3>
            <ul className="space-y-2">
              <li>대중교통 이용하기</li>
              <li>자전거나 도보 이용하기</li>
              <li>친환경 자동차 고려하기</li>
              <li>카풀 활용하기</li>
            </ul>
          </div>

          {/* 소비 생활 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-green-600">🛍️</span> 소비 생활
            </h3>
            <ul className="space-y-2">
              <li>장바구니 사용하기</li>
              <li>친환경 제품 선택하기</li>
              <li>과대포장 제품 피하기</li>
              <li>지역 농산물 구매하기</li>
            </ul>
          </div>
        </div>

        {/* 서약 섹션 */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">탄소중립 실천 서약</h2>
          <p className="mb-6">지구를 위한 작은 실천, 지금 시작해보세요!</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-100 transition-colors"
          >
            실천 서약하기
          </button>
        </div>
      </main>

      {/* 서약 모달 */}
      <PledgeModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="carbon"
      />
    </div>
  );
}