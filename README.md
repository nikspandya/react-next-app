# Intro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

In this project we use `yarn` instead of `npm`

First install all the dependencies by running following commands from project's root directory:

```bash
yarn install
```

Then run the following command to start the development server locally:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by the components or the pages in the `components/` dir or the `pages/index.tsx`. The page auto-updates as you edit the file.

_Additionally, we have configured an ESLint to making code more consistent and avoid bugs._

Therefore, when working on the project and, especially before pushing new code to the repo, please run the following command in the project's dir to check for mistakes:

```bash
yarn lint:fix
```

### followimg four tabs are vissible after starting the app

1. [Home](http://localhost:3000): For welcome message

2. [Developer](http://localhost:3000/developer): for adding/deleting developers
    * User can also chnage team lead by selecting a leader from dropdown menu
    * User can add/remove/mark developer to the developer list
    * User can see existing/newly added devloper lists

3. [SSG Articles](http://localhost:3000/article): for viewing SSG Articles coming from web
    * User can also click on the post and sees what inside it

4. [SSR Articles](http://localhost:3000/blog): for viewing SSR Articles coming from app api
