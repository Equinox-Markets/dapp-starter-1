// ConnectWallet.tsx
import { FC, MouseEvent } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'

type Visibility = 'always' | 'connected' | 'not_connected'

interface ConnectWalletProps {
  show?: Visibility;
  onClick?: () => void;
}

const ConnectWallet: FC<ConnectWalletProps> = ({ show = 'always', onClick }) => {
  const { isConnected } = useAccount()

  if ((show == 'connected' && !isConnected) || (show == 'not_connected' && isConnected)) return null

  return (
    <div
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        // Check if onClick prop is provided before calling it
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <ConnectKitButton />
    </div>
  );
};

export default ConnectWallet;



