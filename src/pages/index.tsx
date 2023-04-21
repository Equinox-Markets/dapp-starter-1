// pages/index.tsx
import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Dashboard from '@/components/Dashboard'

const Home: FC = () => {
  return (
    <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
      <div className="absolute top-6 right-6">
        <ConnectWallet />
      </div>
      <ThemeSwitcher className="absolute bottom-6 right-6" />
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
          <h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
        </div>

        <Dashboard />

        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
          {/* ... other elements */}
        </div>

        <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
          {/* ... other elements */}
        </div>
      </div>
    </div>
  )
}

export default Home

