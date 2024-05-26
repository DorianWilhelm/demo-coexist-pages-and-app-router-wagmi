
# Next.js ^13.x coexisting pages **and** app router with Wagmi & Tanstack Query v5

Builds with `Error: No QueryClient set, use QueryClientProvider to set one` when trying to prerendering pages that use  [https://wagmi.sh/](Wagmi) hooks.

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Motivation

Goal is to find an incremental migration path for an existing Next.js ^13.x project with  [https://wagmi.sh/](Wagmi) from `pages router` to the `app router`.

## Problem

Following the Getting Started Guide from [wagmi](https://wagmi.sh/react/getting-started) results in `Error: No QueryClient set, use QueryClientProvider to set one`.

## hacky fix

Call getServerSideProps in the pages router pages that use wagmi hooks to skip prerendering.

## Branches

- feat/privy: Demoes adding privy to the repository.
