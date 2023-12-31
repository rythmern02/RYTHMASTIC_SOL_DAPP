import Payment from "../components/Payment";
import { useWallet } from "@solana/wallet-adapter-react";
import dynamic from "next/dynamic";
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Login = () => {
    const wallet = useWallet()

    if(wallet.connected) return <Payment/>
  return (
    <div
    className="w-screen h-screen bg-blue text-black flex flex-col justify-center items-center"
  >
    <p className=" mb-10 text-white text-2xl font-extrabold">LOGIN TO CONTINUE...</p>
    <WalletMultiButtonDynamic />
  </div>
  )
}

export default Login