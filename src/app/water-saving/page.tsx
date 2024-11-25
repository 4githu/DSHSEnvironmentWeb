"use client"
import React, { useState } from 'react';
import { FaWater, FaShower, FaCloudRain, FaTint } from 'react-icons/fa';

type AnimationId = 'tap' | 'shower' | 'rainwater' | 'saving';

interface WaterSavingItem {
  id: AnimationId;
  title: string;
  icon: React.ReactNode;
  content: string;
  details: string[];
  animationType: string;
  savingAmount: string;
}

const WaterAnimation = ({ isRunning, type }: { isRunning: boolean, type: string }) => {
  return (
    <div className="relative h-60 w-full max-w-[200px] mx-auto">
      {type === 'tap' && (
        <div className="relative flex flex-col items-center">
          {/* 수도꼭지 */}
          <div className="w-12 h-16 bg-gray-400 rounded-t-lg relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-600 rounded-b" />
          </div>
          {/* 물방울 애니메이션 */}
          {isRunning && (
            <div className="relative w-2">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-0 w-1 bg-blue-400/50 rounded-full animate-water-drop"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {type === 'shower' && (
        <div className="relative flex flex-col items-center">
          {/* 샤워헤드 */}
          <div className="w-24 h-6 bg-gray-400 rounded-lg relative">
            <div className="absolute bottom-0 w-full flex justify-around">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full" />
              ))}
            </div>
          </div>
          {/* 물줄기 애니메이션 */}
          {isRunning && (
            <div className="flex justify-around w-20">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-blue-400/50 animate-shower-stream"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {type === 'rainwater' && (
        <div className="relative">
          {/* 구름 */}
          <div className="w-32 h-16 bg-gray-300 rounded-full mx-auto relative">
            <div className="absolute -bottom-4 w-full flex justify-around">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gray-300 rounded-full" />
              ))}
            </div>
          </div>
          {/* 빗방울 애니메이션 */}
          {isRunning && (
            <div className="mt-8 relative h-32">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-3 bg-blue-400/50 rounded-full animate-rain-fall"
                  style={{
                    left: `${(i * 8) + Math.random() * 4}%`,
                    animationDelay: `${Math.random() * 1}s`,
                    animationDuration: '1s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function WaterSavingPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [runningAnimations, setRunningAnimations] = useState<Record<AnimationId, boolean>>({
    tap: true,
    shower: true,
    rainwater: true,
    saving: true
  });

  const waterSavingData: WaterSavingItem[] = [
    {
      id: 'tap',
      title: '양치컵 사용하기',
      icon: <FaWater className="w-6 h-6 text-blue-400" />,
      content: '양치 시 컵을 사용하면 최대 90%의 물을 절약할 수 있습니다.',
      details: [
        '양치 시 수도꼭지를 잠그고 컵에 물을 받아서 사용하세요',
        '하루 3번 양치할 때 컵 사용 시 약 20L의 물을 절약할 수 있습니다',
        '가족 모두가 실천하면 월 2,400L의 물 절약 효과가 있습니다',
        '양치 후 컵을 세척하여 다음 사용을 위해 보관하세요'
      ],
      animationType: 'tap',
      savingAmount: '20L/일'
    },
    {
      id: 'shower',
      title: '짧은 샤워하기',
      icon: <FaShower className="w-6 h-6 text-blue-400" />,
      content: '샤워 시간을 1분만 줄여도 연간 약 7,000L의 물을 절약할 수 있습니다.',
      details: [
        '샤워 시간을 5분 이내로 줄이세요',
        '샤워기 틀어놓고 비누칠하지 않기',
        '물 온도 조절 후 샤워 시작하기',
        '타이머를 활용해 샤워 시간 체크하기'
      ],
      animationType: 'shower',
      savingAmount: '19L/분'
    },
    {
      id: 'rainwater',
      title: '빗물 재활용하기',
      icon: <FaCloudRain className="w-6 h-6 text-blue-400" />,
      content: '빗물을 모아 화분 물주기나 청소 등에 활용하면 수돗물 사용량을 줄일 수 있습니다.',
      details: [
        '빗물 저장통 설치하기',
        '모은 빗물로 화분에 물주기',
        '외부 청소나 세차에 활용하기',
        '정원 관리에 빗물 사용하기'
      ],
      animationType: 'rainwater',
      savingAmount: '가구당 최대 40%'
    },
    {
      id: 'saving',
      title: '절수기 설치하기',
      icon: <FaTint className="w-6 h-6 text-blue-400" />,
      content: '절수기 설치로 수도 사용량을 30~50% 절약할 수 있습니다.',
      details: [
        '수도꼭지와 샤워기에 절수기 설치',
        '이중 물내림 변기로 교체하기',
        '수도 압력 조절하기',
        '정기적인 절수기 점검과 청소하기'
      ],
      animationType: 'tap',
      savingAmount: '30~50%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-cyan-50/50">
      <header className="bg-blue-400/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">물 절약 캠페인</h1>
          <p className="text-xl">소중한 물을 아껴쓰는 방법</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {waterSavingData.map((item) => (
            <div key={item.id} 
                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h2 className="text-2xl font-semibold text-blue-600/80">{item.title}</h2>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-500 font-semibold">
                      절약량: {item.savingAmount}
                    </span>
                    <button
                      onClick={() => setRunningAnimations(prev => ({
                        ...prev,
                        [item.id]: !prev[item.id]
                      }))}
                      className={`px-4 py-2 rounded-lg transition-colors
                        ${runningAnimations[item.id] 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 text-gray-600'}`}
                    >
                      {runningAnimations[item.id] ? '물 잠그기' : '물 틀기'}
                    </button>
                  </div>
                </div>

                <WaterAnimation 
                  isRunning={runningAnimations[item.id]} 
                  type={item.animationType}
                />

                <div className="mt-6">
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  {activeSection === item.id && (
                    <ul className="space-y-2 bg-blue-50 p-4 rounded-lg">
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
                    className="mt-4 text-blue-500 hover:text-blue-600"
                  >
                    {activeSection === item.id ? '상세정보 접기' : '상세정보 보기'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-blue-600 mb-4">
            알고 계셨나요?
          </h3>
          <p className="text-gray-600">
            한 사람이 하루에 사용하는 물의 양은 평균 283L입니다.<br />
            위의 방법들을 모두 실천하면 최대 50% 이상의 물을 절약할 수 있습니다!
          </p>
        </div>
      </main>
    </div>
  );
}