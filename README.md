## Notes

### Hours spent:

- Spent approximately 5-6 hours learning and understanding the core concepts of Next.js
- Dedicated around 12-14 hours to implement the project functionality
- Utilized Tailwind CSS, with some code adapted from various free template sources.

## Idea to implment last viewed clicks

- Use localStorage to store the last viewed data for quick and simple client-side storage.
- Leverage the file system to persist data on the server
- Use database to store and manage last viewed data, especially for multi-user environments

## Future implementation

- Implement user sessions to track and log user activity, ensuring a personalized experience.
- Add pagination or infinite scrolling to improve performance when handling large datasets
- Enhance error handling with user-friendly messages and retry mechanisms for API calls
- Use lazy loading for components and images to improve initial load times.

### Development note

- The API call was replaced with a local API due to the rate limit imposed by the free account white testing, which resulted in the IP address being blocked.

```
const options = {
                method: 'GET',
                headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG'}
            };

const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1';

const res = await fetch(api_url,options);
const data: Crypto[] = await res.json();
```

- Testing has not been included in this project due to time constraints. I would have used the JEST library to test the rendering of the expected text and added multiple test cases.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
