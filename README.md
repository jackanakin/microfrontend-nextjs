# Microfrontends with NextJS

Microfrontends allow teams to work independently of each other by splitting the application into smaller, shareable, and modular components. The primary goal for a microfrontend strategy is to improve collaboration across teams of developers.

## Structure
- repository
   - api (sample api for login and cookie example)
   - apps
     - remote1 (microfrontend managed by Team 1)
     - remoteN...
     - shell (also main or host app, encapsulate all remote apps)
        - .env (REMOTE1_URL)
        - next.config.js (rewrite microfrontends source)
  -  packages
     - eslint-config-acme (eslint config)
     - shared (components, interfaces, etc. used by multiple apps)
       - components (UI elements)
       - utils (utilities)
       - contexts (context providers)
       - ...

## Development Build
It's still not perfect.

> git clone https://github.com/jackanakin/microfrontend-nextjs

#### Microfrontend
> cd microfrontend-nextjs
> 
> pnpm update
> 
> pnpm run dev

1. May take some while, no fix yet.
2. Go to [localhost:3000](http://localhost:3000).
3. LOGIN button action requires API to be running (se below)

#### NESTJS API (not mandatory)
> cd microfrontend-nextjs/api
>
> yarn
>
> yarn dev

Will start a sample API on port 3002 for login and cookie demonstration.

## What's Included?

The example is a monorepo built with [Turborepo](https://turborepo.org/) with the following setup:

- Everything is in [TypeScript](https://www.typescriptlang.org/)
- Next.js is used for the applications in [./apps](./apps)
- Shared packages used by the apps in [./packages](./packages)
- [Tailwind CSS](https://tailwindcss.com) for utility CSS in React components and to build the design system
- The ESLint config lives in [eslint-config-acme](./packages/eslint-config-acme)
- [Changesets](https://github.com/changesets/changesets) to manage versioning and publishing of packages. Learn more in the [Versioning & Publishing Packages](#versioning--publishing-packages) section.

## How it Works

There are many strategies for designing microfrontends and your approach will be dictated by how you want to structure your applications and teams. We'll share a few different approaches and how they work.

### packages/shared/components

[./packages/shared/components](./packages/shared/components) features multiple components with CSS Modules and [Tailwind](https://tailwindcss.com/). The components are installed in the app as a dependency and the compilation step is handled by [SWC](https://swc.rs/).

All the CSS used by the app and components is unified by Tailwind, so having components outside the app doens't increase the CSS bundle size.

HMR and React Fast Refresh work as expected even though the components live outside the app and have a different build process.

### Multi Zones

[Multi Zones](https://nextjs.org/docs/advanced-features/multi-zones) are a way of having independent Next.js applications that merge on a common domain. This is a method for building separation of concerns in large teams.

In this example, [./apps/shell](./apps/shell) is our main app, and [./apps/remote1](./apps/remote1) is a separate app that handles all routes for [`/remote1/**`](./apps/main/next.config.js). In the demo, you'll notice that navigating to `/remote1` keeps you in the same domain. We have multiple apps in the same domain that are built independent to each other.

You'll notice that transitions between `/remote1/*` and `/` are not as smooth as you're used to with typical Next.js applications. You will get a full page refresh because Next.js apps can't share their JS and don't have common chunks, prefetching is not possible because the build outputs are different.

### Module Federation

Module federation is a strategy for building applications in a large organization with many teams that want to prioritize shipping velocity.

### Generating Changesets

To generate a changeset, run the following command in the root of the project:

```bash
pnpm changeset
```

The Changeset CLI will ask you a couple of questions:

1. **Which packages would you like to include?** – This shows which packages have changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

Turborepo will run the `build` script for all publishable dependencies of the `shell` app, excluding the `shell` app itself, and then publishes the new versions to npm.

