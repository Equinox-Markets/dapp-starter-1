import { FC } from 'react'
import { useAccount, useBalance } from 'wagmi'
import ThemeSwitcher from './ThemeSwitcher'

const Dashboard: FC = () => {
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ token: 'ETH' })

  const balance = balanceData?.formatted || '0'

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Connected Account</h3>
          <p className="text-gray-500 dark:text-gray-400">{address || 'Not connected'}</p>
        </div>
        <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Balance</h3>
          <p className="text-gray-500 dark:text-gray-400">{balance} ETH</p>
        </div>
              {/* Add the ThemeSwitcher component */}
      <div className="mt-4">
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Dashboard



