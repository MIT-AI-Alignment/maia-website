# MAIA website

The MAIA website is now created using [SvelteKit](https://kit.svelte.dev/), and hosted on MIT Athena. This readme should tell you everything you need to know about updating and deploying the site.

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or npm), start a development server:

```bash
pnpm dev
```

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

To deploy the site, copy the contents of the `/build` folder into `/mit/aialignment/www` on Athena. For more information, see the [MIT Athena docs](https://kb.mit.edu/confluence/pages/viewpage.action?pageId=3907090).

## Updating the site

### Routing

The site's pages are all in the `routes` folder, with a folder for each page. Shared components are in `routes/components`. The site uses Tailwind CSS, otherwise it should be very intuitive to anyone used to HTML. For more, consult me or the [Svelte docs](https://svelte.dev/).
