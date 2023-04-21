// pages/index.tsx
import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Dashboard from '@/components/Dashboard'
import Footer from '@/components/Footer'

const Home: FC = () => {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <Dashboard />
        <Footer />
      </div>
    </div>
  )
}

export default Home



