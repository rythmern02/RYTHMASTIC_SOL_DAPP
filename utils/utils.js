import * as anchor from '@project-serum/anchor';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { PROGRAM_ID, PROGRAM_IDIL, SOLANA_HOST } from './const';


export function getProgramInstance(connection, wallet){
    if(!wallet.publicKey) throw new WalletNotConnectedError;

    const provider = new anchor.AnchorProvider(
        connection,
        wallet,
        anchor.AnchorProvider.defaultOptions()
    );
    console.log('the provider is ', provider)
    const program = new anchor.Program(
        PROGRAM_IDIL,
        PROGRAM_ID,
        provider
    )
    console.log('the program is ', program)
    return program
}
