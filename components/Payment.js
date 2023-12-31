import React, { useEffect, useState } from 'react';
import { getProgramInstance } from '../utils/utils';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { SOLANA_HOST } from '../utils/const';
import { useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import Homepage from '../pages/Homepage';
const anchor = require('@project-serum/anchor');

const { web3 } = anchor;
const { SystemProgram } = web3;
const utf8 = anchor.utils.bytes.utf8;

const defaultAccounts = {
    tokenProgram: TOKEN_PROGRAM_ID,
    clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
    systemProgram: SystemProgram.programId,
}

const styles = {
    main: `w-screen h-screen bg-blue text-black flex flex-col justify-center items-center `,
    button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
    text: `text-4xl mb-10`,
    buttons: `flex items-center`,
}

const Payment = () => {
    const wallet = useWallet();
    console.log(wallet)
    const connection = new anchor.web3.Connection('https://api.devnet.solana.com');
    console.log(connection)
    const program = getProgramInstance(connection, wallet);
    console.log(program)
    const [payers, setPayers] = useState([]);
    const [isPaid, setPaid] = useState(false);

    useEffect(() => {
        if (wallet.connected) getAllWallets()
    }, [wallet.connected, isPaid])

    const getAllWallets = async () => {
        const payerList = await program.account.payerAccount.all()
        setPayers(payerList)

        payerList.forEach(payer => {
            if (payer.account.wallet.toBase58() == wallet.publicKey.toBase58())
                setPaid(true)
        })
    }

    const payClicked = async () => {
        let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress([utf8.encode('payer'), wallet.publicKey.toBuffer()],
            program.programId)
        let payerInfo;

        try {
            payerInfo = await program.account.payerAccount.fetch(payerSigner);

        } catch (e) {
            try {
                await program.rpc.acceptPayment({
                    accounts: {
                        payerWallet: payerSigner,
                        receiver: new PublicKey(
                            "3NFNBsqmk5kdngmTWoUGqYpLr2BbdAcJ79mMdQCZgUy5"
                        ),
                        authority: wallet.publicKey,
                        ...defaultAccounts,
                    },
                })
                alert('Transaction Successful!')
            } catch (e) {
                alert(e.message)
            }

        }
    }

    if (isPaid) return <Homepage />
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 h-screen flex items-center justify-center">
        <div className="bg-gray-800 p-8 w-full max-w-md rounded-lg">
          <h1 className="text-white text-3xl font-bold text-center mb-6">
            Make Payment
          </h1>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg mr-4" onClick={payClicked}>
              Pay 0.1
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg" onClick={getAllWallets}>
              VERIFY PAYMENT
            </button>
          </div>
        </div>
      </div>
    );
}

export default Payment;
