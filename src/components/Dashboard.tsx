import { FC } from 'react'
import { useAccount, useBalance } from 'wagmi'
import ThemeSwitcher from './ThemeSwitcher'
import Image from 'next/image'

const Dashboard: FC = () => {
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ token: 'ETH' })

  const balance = balanceData?.formatted || '0'

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="shadow-md rounded-lg p-6 mt-6">
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
          </div>
          
          {/* Add the ThemeSwitcher component */}
          <div className="mt-4">
            <ThemeSwitcher />
          </div>
        </div>

        {/* NFT Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image src="/src/to/nft-image.png" alt="Fantom Treasures NFT" width={500} height={500} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Fantom Treasures</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              They will depict characters as futuristic treasure hunters, seeking out valuable digital assets in a high-tech world.
            </p>
          </div>
        </div>

        {/* Earn real profit section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Earn real profit with Fantom Treasures</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Earn $WFTM from the platform's treasury with your NFT</p>
        </div>

        {/* Stats section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Staked NFTs</h3>
            <p className="text-gray-500 dark:text-gray-400">1234</p>
          </div>
          <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
           <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Current Epoch</h3>
           <p className="text-gray-500 dark:text-gray-400">456</p>
          </div>
          <div className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
           <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Total Distributed $WFTM</h3>
           <p className="text-gray-500 dark:text-gray-400">7890</p>
          </div>
         </div>
        
            {/* Claim rewards section */}
    <div className="mt-12">
      <button className="bg-indigo-600 dark:bg-indigo-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-300">Claim Rewards</button>
    </div>

    {/* User's NFTs section */}
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Your Fantom Treasure NFTs</h2>
      <p className="mt-4 text-gray-700 dark:text-gray-300">You do not own any Fantom Treasure NFTs.</p>
      <a href="https://link-to-nft-purchase" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">Get Your Fantom Treasure NFTs</a>
    </div>

    {/* How to get rewards section */}
    <div className="mt-12">
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">How to get rewards with Fantom Treasures</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">1. Mint NFT</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Convince the user here why they should get an NFT</p>
          <button className="mt-4 bg-indigo-600 dark:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-300">Mint now</button>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">2. Stake</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Stake your NFT to earn rewards from Community Treasury on Fantom.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">3. Earn</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">Earn rewards in $FTM.</p>
        </div>
      </div>
    </div>
  </div>
</div>
)
}
export default Dashboard


