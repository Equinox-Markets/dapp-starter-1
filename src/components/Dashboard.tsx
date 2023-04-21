// components/Dashboard.tsx
import { FC, useEffect, useState } from 'react'
import { useAccount, useBalance } from 'wagmi'

const Dashboard: FC = () => {
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ address })

  const balance = balanceData?.formatted || '0'

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Connected Account</h3>
          <p className="text-gray-500">{address || 'Not connected'}</p>
        </div>
        <div className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Balance</h3>
          <p className="text-gray-500">{balance} ETH</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

