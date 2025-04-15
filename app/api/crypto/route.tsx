import cryptos from './cryp_obj.json'

export async function GET(request: Request) {

    return new Response(JSON.stringify(cryptos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }


