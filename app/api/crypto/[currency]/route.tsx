import crypto_usd from '../cryp_obj_usd.json'
import crypto_gbp from '../cryp_obj_gbp.json'
import crypto_inr from '../cryp_obj_inr.json'
import crypto_eur from '../cryp_obj_eur.json'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ currency: string }> }
) {
  const { currency } = await params;

  const curr = currency.toLowerCase();
  let cryptos;

    if(curr == 'usd') {
      cryptos = crypto_usd;
    } else if(curr == 'gbp') {
      cryptos = crypto_gbp;
    } else if(curr == 'eur') {
      cryptos = crypto_eur;
    } else if(curr == 'inr') {
      cryptos = crypto_inr;
    }

    return NextResponse.json(cryptos, {status:200})
  }


