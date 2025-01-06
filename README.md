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



PS D:\HKD\hkd\personal_blog> npm run build

> personal_blog@0.1.0 build
> next build

   ▲ Next.js 15.1.3
   - Environments: .env.local

   Creating an optimized production build ...
(node:6200) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  .(node:8248) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:14156) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Collecting page data
 ✓ Generating static pages (13/13)
(node:7072) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

> Build error occurred
[Error: ENOTEMPTY: directory not empty, rmdir 'D:\HKD\hkd\personal_blog\.next\export'] {
  errno: -4051,
  code: 'ENOTEMPTY',
  syscall: 'rmdir',
  path: 'D:\\HKD\\hkd\\personal_blog\\.next\\export'
}
PS D:\HKD\hkd\personal_blog> npm run build

> personal_blog@0.1.0 build
> next build

   ▲ Next.js 15.1.3
   - Environments: .env.local

   Creating an optimized production build ...
(node:17224) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:17088) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
   Collecting page data  ...(node:3848) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:672) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Collecting page data
(node:14296) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Generating static pages (13/13)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    2.34 kB         155 kB
├ ○ /_not-found                          979 B           106 kB
├ ○ /about                               148 B           106 kB
├ ○ /admin                               191 B           153 kB
├ ƒ /auth/confirm                        148 B           106 kB
├ ○ /category                            148 B           106 kB
├ ○ /contact                             148 B           106 kB
├ ○ /error                               266 B           106 kB
├ ○ /login                               25.8 kB         139 kB
├ ○ /logout                              529 B           106 kB
└ ƒ /privete                             148 B           106 kB
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-57d8ce9c0ef7fc01.js  52.9 kB
  ├ chunks/517-37be5f8d5cd24abb.js       50.5 kB
  └ other shared chunks (total)          2 kB


ƒ Middleware                             62.5 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

PS D:\HKD\hkd\personal_blog> 