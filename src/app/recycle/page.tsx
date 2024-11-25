'use client'

import { useState } from 'react'

export default function RecyclePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const recyclingData = [
    {
      id: 'plastic',
      title: '플라스틱 분리배출',
      content: '플라스틱 용기는 내용물을 비우고 물로 헹군 후 말려서 배출해주세요. 부착된 라벨은 제거하여 별도로 배출합니다.',
      details: [
        '페트병은 라벨과 뚜껑을 반드시 분리해주세요',
        '깨끗이 세척 후 압축하여 배출해주세요',
        '오염된 플라스틱은 일반쓰레기로 배출해주세요',
        '투명 페트병은 별도로 분리배출해주세요'
      ],
      icon: '🔄'
    },
    {
      id: 'paper',
      title: '종이류 분리수거',
      content: '종이류는 물기에 젖지 않도록 하고, 테이프나 스테이플러를 제거한 후 묶어서 배출해주세요.',
      details: [],
      icon: '📄'
    },
    {
      id: 'can',
      title: '캔/페트병 압축하기',
      content: '캔과 페트병은 내용물을 비우고 가능한 압축하여 배출해주세요. 부피를 줄이면 수거 효율이 높아집니다.',
      details: [],
      icon: '🥤'
    },
    {
      id: 'packaging',
      title: '포장재 줄이기',
      content: '과대포장을 피하고 재사용 가능한 포장재를 선택하세요. 장바구니 사용으로 비닐봉투 사용을 줄입니다.',
      details: [],
      icon: '🎁'
    }
  ]

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">재활용 실천하기</h1>
        <p className="text-lg text-blue-600 mb-8">올바른 분리수거로 지구를 지켜요</p>
        
        <div className="space-y-4">
          {recyclingData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
                className="w-full p-4 text-left hover:bg-blue-100 transition-colors flex items-center justify-between"
              >
                <h2 className="text-xl font-semibold text-blue-700">{item.title}</h2>
                <span className="text-2xl">{item.icon}</span>
              </button>
              
              {activeSection === item.id && (
                <div className="p-6 bg-blue-50 border-t border-blue-100">
                  <p className="text-gray-700 mb-4">{item.content}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}