// src/components/Dashboard.tsx
import { FC } from 'react'
import { useAccount, useBalance } from 'wagmi'
import Image from 'next/image'

const Dashboard: FC = () => {
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ token: 'ETH' })

  const balance = balanceData?.formatted || '0'

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
      {/* NFT Showcase */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="w-1/2 max-w-xs">
          <Image src="/robot.png" alt="NFT Image" width={250} height={250} />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Fantom Treasures</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fantom Treasures depict characters as futuristic treasure hunters, seeking out valuable digital assets in a high-tech world.
          </p>
        </div>
      </div>

      {/* Earn Profit */}
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Earn real profit with Fantom Treasures</h3>
        <p className="text-gray-500 dark:text-gray-400">Earn $WFTM from the platform&apos;s treasury with your NFT</p>
      </div>

      {/* Staked NFTs, Current Epoch, and Total Distributed $WFTM */}
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Staking Info</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Staked NFTs</p>
            <p className="text-gray-500 dark:text-gray-400">1,234</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Current Epoch</p>
            <p className="text-gray-500 dark:text-gray-400">7</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">Total Distributed $WFTM</p>
            <p className="text-gray-500 dark:text-gray-400">987,654</p>
          </div>
        </div>
      </div>

      {/* Claim Rewards */}
      <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Claim Rewards</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
         Claim Rewards
        </button>

  </div>

  {/* User's NFTs */}
  <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Your Fantom Treasure NFTs</h2>
    <p className="text-gray-500 dark:text-gray-400 mt-2">You do not own any Fantom Treasure NFTs. Get Your Fantom Treasure NFTs <a href="https://example.com" className="text-blue-500 dark:text-blue-400 underline">&apos;here&apos;</a>.</p>

    <a
      href="https://example.com"
      className="text-blue-500 hover:text-blue-600 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get Your Fantom Treasure NFTs
    </a>
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
)
}

export default Dashboard



