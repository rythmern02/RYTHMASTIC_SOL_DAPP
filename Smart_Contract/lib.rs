use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, TokenAccount};
use std::mem::size_of;

declare_id!("5nTVZ59kqCZYFuTvD7dBaHoW2bnf5R8douQA9NBueMdd");

#[program]
mod music_platform {
    use super::*;

    pub fn accept_payment(ctx: Context<AcceptPayment>) -> ProgramResult {
        let payer_wallet = &mut ctx.accounts.payer_wallet;
        payer_wallet.wallet = *ctx.accounts.authority.key();

        // Transfer SOL from payer to receiver
        let transfer_tx = anchor_lang::solana_program::system_instruction::transfer(
            ctx.accounts.authority.key(),
            ctx.accounts.receiver.key(),
            1000000000, // Adjust this amount as needed
        );
        anchor_lang::solana_program::program::invoke(
            &transfer_tx,
            &[
                ctx.accounts.authority.to_account_info(),
                ctx.accounts.receiver.to_account_info(),
            ],
        )?;

        // Transfer SPL tokens from payer to receiver
        let transfer_tokens_tx = token::transfer(
            CpiContext::new(ctx.accounts.token_program.clone(), Transfer {
                from: ctx.accounts.payer_wallet.to_account_info(),
                to: ctx.accounts.receiver_token_account.to_account_info(),
                authority: ctx.accounts.authority.to_account_info(),
            }),
            1000000000, // Adjust this amount as needed
        );
        transfer_tokens_tx
    }

    pub fn add_music(ctx: Context<AddMusic>, music_name: String) -> ProgramResult {
        let music_account = &mut ctx.accounts.music_account;
        music_account.music_name = music_name;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct AddMusic<'info> {
    #[account(
        init,
        seeds = [b"music".as_ref(), music_name.as_bytes()],
        bump,
        payer = authority,
        space = size_of::<MusicAccount>() + 8
    )]
    pub music_account: Account<'info, MusicAccount>,

    #[account(signer)]
    pub authority: AccountInfo<'info>,
}

#[account]
pub struct MusicAccount {
    pub music_name: String,
    // Add other fields for music data as needed
}

#[derive(Accounts)]
pub struct AcceptPayment<'info> {
    // ... (existing accounts)

    #[account(
        init,
        seeds = [b"music".as_ref(), music_name.as_bytes()],
        bump,
        payer = authority,
        space = size_of::<MusicAccount>() + 8
    )]
    pub music_account: Account<'info, MusicAccount>,
}
