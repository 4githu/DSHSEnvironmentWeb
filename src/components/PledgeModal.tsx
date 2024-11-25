"use client"
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'campaign' | 'carbon';
}

export default function PledgeModal({ isOpen, onClose, type }: PledgeModalProps) {
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  
  const modalContent = {
    campaign: {
      title: "환경 보호 캠페인 참여",
      items: [
        "캠페인 소식 정기 구독",
        "캠페인 활동 참여",
        "주변에 캠페인 알리기",
        "SNS 공유하기"
      ],
      buttonText: "캠페인 참여하기"
    },
    carbon: {
      title: "탄소중립 실천 서약",
      items: [
        "대중교통 이용하기",
        "전기 절약하기",
        "일회용품 사용 줄이기",
        "로컬 푸드 이용하기",
        "재생에너지 사용하기"
      ],
      buttonText: "탄소중립 서약하기"
    }
  };

  const content = modalContent[type];

  if (!isOpen) return null;

  const handleClose = () => {
    setName('');
    setAgreed(false);
    setEmail('');
    setOrganization('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-green-600 mb-4">{content.title}</h2>
        
        <div className="space-y-4 mb-6">
          {type === 'campaign' && (
            <>
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="소속(선택사항)"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </>
          )}

          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="agree-checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1"
            />
            <label 
              htmlFor="agree-checkbox" 
              className="text-gray-600 text-sm"
            >
              {type === 'campaign' ? '다음 활동에 참여하겠습니다:' : '다음 활동을 실천하겠습니다:'}
              <ul className="ml-4 mt-2 space-y-2">
                {content.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </label>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            취소
          </button>
          <button
            onClick={() => {
              if (agreed && name && (type !== 'campaign' || email)) {
                confetti({
                  particleCount: 100,
                  spread: 70,
                  origin: { y: 0.6 }
                });
                handleClose();
              }
            }}
            disabled={!agreed || !name || (type === 'campaign' && !email)}
            className={`flex-1 px-4 py-2 rounded-lg ${
              agreed && name && (type !== 'campaign' || email)
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {content.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
} 