import { PublicKey } from "@solana/web3.js";

const PROGRAM_IDIL = {
    "version": "0.1.0",
    "name": "music_platform",
    "instructions": [
        {
            "name": "acceptPayment",
            "accounts": [
                {
                    "name": "payerWallet",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "receiver",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "tokenProgram",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "clock",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "PayerAccount",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "wallet",
                        "type": "publicKey"
                    }
                ]
            }
        }
    ]
};

const PROGRAM_ID = new PublicKey('5nTVZ59kqCZYFuTvD7dBaHoW2bnf5R8douQA9NBueMdd');

const SOLANA_HOST = 'api.devnet.solana.com';

export { PROGRAM_IDIL, PROGRAM_ID, SOLANA_HOST };

