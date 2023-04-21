
import { FC } from 'react'
import Image from 'next/image'

import { useAccount, useBalance } from 'wagmi'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'

const Dashboard: FC = () => {
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ token: 'ETH' })

  const balance = balanceData?.formatted || '0'

  return (
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        {/* NFT Showcase */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="w-1/2 max-w-xs">
            <Image src="/images/robot.png" alt="NFT Image" width={250} height={250} />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Fantom Treasures</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fantom Treasures depict characters as futuristic treasure hunters, seeking out valuable digital assets in a high-tech world.
            </p>
          </div>
        </div>
      </div>

      {/* My NFTs */}
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My NFTs</h2>
        <div className="flex justify-center">
          <p className="text-gray-500 dark:text-gray-400">{address ? 'Your NFTs will be displayed here' : 'Please connect your wallet to view your NFTs'}</p>
        </div>
        {!address && (
          <div className="flex justify-center mt-4">
            <ConnectWallet />
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        {/* How to Get Rewards */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">How to get rewards with Fantom Treasures</h2>
          <ol className="list-decimal list-inside text-gray-500 dark:text-gray-400">
            <li>
              <h3 className="font-semibold">Mint NFT</h3>
              <p>Convince the user here why they should get an NFT</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Mint now
              </button>
            </li>
            <li>
              <h3 className="font-semibold">Stake</h3>
              <p>Stake your NFT to earn rewards from Community Treasury on Fantom.</p>
            </li>
            <li>
              <h3 className="font-semibold">Earn</h3>
              <p>Earn rewards in $FTM.</p>
            </li>
          </ol>
        </div>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        {/* Claim Rewards */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Claim Rewards</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Claim Rewards
          </button>
        </div>
      </div>

      {/* How to Get Rewards */}
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          How to get rewards with Fantom Treasures
        </h2>
        <ol className="list-decimal list-inside text-gray-500 dark:text-gray-400">
          <li>
            <h3 className="font-semibold">Mint NFT</h3>
            <p>Convince the user here why they should get an NFT</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Mint now
            </button>
          </li>
          <li>
            <h3 className="font-semibold">Stake</h3>
            <p>Stake your NFT to earn rewards from Community Treasury on Fantom.</p>
          </li>
          <li>
            <h3 className="font-semibold">Earn</h3>
            <p>Earn rewards in $FTM.</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
  )
}

export default Dashboard




