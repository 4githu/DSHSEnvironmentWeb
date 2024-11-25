"use client"
import React, { useState } from 'react';
import { FaTemperatureHigh, FaPowerOff, FaLightbulb, FaSun } from 'react-icons/fa';

const Thermostat = ({ isOn, temperature, onToggle, onTempChange }) => {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div 
        className={`rounded-full w-full h-full border-8 flex items-center justify-center
          ${isOn ? 'border-orange-400 bg-orange-50' : 'border-gray-300 bg-gray-50'}`}
      >
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">
            {temperature}°C
          </div>
          <button
            onClick={onToggle}
            className={`p-2 rounded-full transition-colors
              ${isOn ? 'bg-orange-400 text-white' : 'bg-gray-300 text-gray-600'}`}
          >
            <FaPowerOff />
          </button>
        </div>
      </div>
      {isOn && (
        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-2">
          <button
            onClick={() => onTempChange(1)}
            className="block w-8 h-8 bg-orange-400 text-white rounded-full"
          >+</button>
          <button
            onClick={() => onTempChange(-1)}
            className="block w-8 h-8 bg-orange-400 text-white rounded-full"
          >-</button>
        </div>
      )}
    </div>
  );
};

const LightSwitch = ({ isOn, onToggle }) => {
  return (
    <div className="relative w-32 h-48 mx-auto">
      <div 
        className={`w-full h-full flex flex-col items-center justify-center
          ${isOn ? 'bg-yellow-100' : 'bg-gray-100'}`}
      >
        <FaLightbulb 
          className={`text-4xl mb-4 ${isOn ? 'text-yellow-400' : 'text-gray-400'}`}
        />
        <button
          onClick={onToggle}
          className={`w-12 h-20 rounded-full relative transition-colors
            ${isOn ? 'bg-yellow-400' : 'bg-gray-400'}`}
        >
          <span 
            className={`absolute w-10 h-10 bg-white rounded-full left-1 transition-all
              ${isOn ? 'top-1' : 'top-9'}`}
          />
        </button>
      </div>
    </div>
  );
};

export default function EnergySavingPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [temperature, setTemperature] = useState(24);
  const [isHeatingOn, setIsHeatingOn] = useState(true);
  const [devices, setDevices] = useState({
    light1: true,
    light2: true,
    standby: true
  });

  const energySavingData = [
    {
      id: 'temperature',
      title: '냉난방 온도 조절하기',
      icon: <FaTemperatureHigh className="w-6 h-6 text-orange-400" />,
      content: '적정 실내 온도를 유지하면 에너지를 절약할 수 있습니다.',
      details: [
        '여름철 적정 온도 26°C',
        '겨울철 적정 온도 20°C',
        '온도 1°C 조절 시 7%의 에너지 절감',
        '내복 입기로 체감 온도 3°C 상승'
      ],
      control: (
        <Thermostat
          isOn={isHeatingOn}
          temperature={temperature}
          onToggle={() => setIsHeatingOn(!isHeatingOn)}
          onTempChange={(delta) => {
            if (isHeatingOn) {
              setTemperature(prev => Math.min(Math.max(prev + delta, 18), 30));
            }
          }}
        />
      )
    },
    {
      id: 'standby',
      title: '대기전력 차단하기',
      icon: <FaPowerOff className="w-6 h-6 text-red-400" />,
      content: '사용하지 않는 전자기기의 전원을 완전히 차단하세요.',
      details: [
        '멀티탭 스위치 끄기',
        '미사용 충전기 뽑기',
        '취침 전 전자기기 전원 끄기',
        '외출 시 콘센트 뽑기'
      ],
      control: (
        <div className="flex justify-center gap-8">
          <LightSwitch
            isOn={devices.light1}
            onToggle={() => setDevices(prev => ({ ...prev, light1: !prev.light1 }))}
          />
          <LightSwitch
            isOn={devices.light2}
            onToggle={() => setDevices(prev => ({ ...prev, light2: !prev.light2 }))}
          />
        </div>
      )
    }
    // ... 다른 데이터 항목들
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-yellow-50/30">
      <header className="bg-orange-400/60 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">에너지 절약</h1>
          <p className="text-xl">에너지 절약으로 지구 온도 낮추기</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mt-12 bg-orange-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-orange-600 mb-4">
            에너지 절약 효과
          </h3>
          <p className="text-gray-600">
            현재 설정된 온도({temperature}°C)로 
            {isHeatingOn ? ' 약 ' + Math.abs(24 - temperature) * 7 + '%의 에너지를 ' : ' 전원이 꺼져 100%의 에너지를 '}
            {temperature > 24 ? '더 소비하고' : '절약하고'} 있습니다.
          </p>
        </div>

        <div className="space-y-8">
          {energySavingData.map((item) => (
            <div key={item.id} 
                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {item.icon}
                  <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
                </div>

                <div className="mb-6">
                  {item.control}
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  {activeSection === item.id && (
                    <ul className="space-y-2">
                      {item.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-400">•</span>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={() => setActiveSection(activeSection === item.id ? null : item.id)}
                    className="mt-4 text-orange-500 hover:text-orange-600"
                  >
                    {activeSection === item.id ? '상세정보 접기' : '상세정보 보기'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}