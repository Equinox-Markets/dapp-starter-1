import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useAccount, useBalance, useProvider } from 'wagmi';
import { APP_NAME } from '@/lib/consts';
import ConnectWallet from '@/components/ConnectWallet';
import ThemeSwitcher from '@/components/ThemeSwitcher';

// Import the ethers library
import { ethers } from 'ethers';

// Replace with your smart contract ABI and address
const contractAbi = [];
const contractAddress = '';

const Dashboard: FC = () => {
  const { address } = useAccount();
  const { data: balanceData } = useBalance({ token: 'ETH' });
  const provider = useProvider(); // Get the provider from useProvider hook


  const balance = balanceData?.formatted || '0';

  const [userNFTs, setUserNFTs] = useState([]);
  const [noNFTMessage, setNoNFTMessage] = useState('');

  // Connect to the smart contract
  const connectToContract = async () => {
    if (!provider) return;

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    return contract;
  };

  // Read user's wallet for the specific smart contract
  const handleConnectWallet = async () => {
    const contract = await connectToContract();
    if (!contract || !address) return;

    // Call the desired function in the smart contract to get the user's NFTs
    // Replace 'getUserNFTs' with the name of the function you want to call
    const nfts = await contract.getUserNFTs(address);

    if (nfts.length === 0) {
      setNoNFTMessage(
        'You do not own any NFTs. You can purchase them here: '
      );
    } else {
      setUserNFTs(nfts);
    }
  };

  // Execute a specific function in the smart contract for Claim Rewards
  const handleClaimRewards = async () => {
    const contract = await connectToContract();
    if (!contract) return;

    // Replace 'claimRewards' with the name of the function you want to call
    const tx = await contract.claimRewards();
    await tx.wait();
  };
  
  return (
    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
      {/* NFT Showcase */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="w-1/2 max-w-xs">
            <Image src="/images/robot.png" alt="NFT Image" width={250} height={250} />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Fantom Treasures</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fantom Treasures depict characters as futuristic treasure hunters, seeking out valuable digital assets in a high-tech world.
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Mint now
              </button>
            </div>
          </div>
        </div>
        <ThemeSwitcher className="absolute top-6 right-6" />
      </div>

     {/* My NFTs */}
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">My NFTs</h2>
      <div className="flex justify-center">
        {address ? (
          userNFTs.length > 0 ? (
            userNFTs.map((nft, index) => (
              // Replace with the JSX structure you want to display for each NFT
              <div key={index}>NFT {index + 1}: {nft}</div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              {noNFTMessage}
              <a
                href="https://example.com" // Replace with the actual website URL
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Purchase NFTs
              </a>
            </p>
          )
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Please connect your wallet to view your NFTs
          </p>
        )}
        </div>
      {!address && (
        <div className="flex justify-center mt-4">
          <ConnectWallet onClick={handleConnectWallet} />
        </div>
      )}
    </div>

     {/* Claim Rewards */}
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mt-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Claim Rewards</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleClaimRewards}
        >
          Claim Rewards
        </button>
      </div>
    </div>
  </div>
);

export default Dashboard;





