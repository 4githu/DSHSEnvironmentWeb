import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { FaLeaf, FaRecycle, FaWater, FaTemperatureHigh, FaHome } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '환경 보호 캠페인',
  description: '지구를 살리는 작은 실천',
  icons: {
    icon: '/logo.png',
  },
}

const navItems = [
  {
    path: '/',
    title: '홈',
    icon: <FaHome className="w-5 h-5" />
  },
  {
    path: '/carbon-footprint',
    title: '탄소 발자국',
    icon: <FaLeaf className="w-5 h-5 text-green-500" />
  },
  {
    path: '/recycle',
    title: '재활용',
    icon: <FaRecycle className="w-5 h-5 text-blue-500" />
  },
  {
    path: '/water-saving',
    title: '물 절약',
    icon: <FaWater className="w-5 h-5 text-cyan-500" />
  },
  {
    path: '/energy-saving',
    title: '에너지 절약',
    icon: <FaTemperatureHigh className="w-5 h-5 text-orange-500" />
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* 로고 */}
              <Link 
                href="/"
                className="flex items-center space-x-2 text-green-600 font-bold text-xl"
              >
                <FaLeaf className="w-6 h-6" />
                <span>환경 보호 캠페인</span>
              </Link>

              {/* 네비게이션 링크 */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>

              {/* 모바일 메뉴 (작은 화면에서만 표시) */}
              <div className="md:hidden flex space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* 상단 네비게이션 바의 높이만큼 여백 추가 */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}
