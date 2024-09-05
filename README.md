# MAIA website

The MAIA website is now created using [SvelteKit](https://kit.svelte.dev/), and hosted on MIT Athena. This readme should tell you everything you need to know about updating and deploying the site.

## Developing

Once you've cloned this repo, and installed dependencies by running `npm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

To deploy the site, copy the contents of the `/build` folder into `/mit/aialignment/www` on Athena. For more information, see the [MIT Athena docs](https://kb.mit.edu/confluence/pages/viewpage.action?pageId=3907090).

## Updating the site

### Routing

The site's pages are all in the `routes` folder, with a folder for each page. Shared components are in `routes/components`. The site uses Tailwind CSS, otherwise it should be very intuitive to anyone used to HTML. For more, consult me or the [Svelte docs](https://svelte.dev/).

### Deploying

After running `pnpm build`, you should see compiled output such as `index.html` in your `build/` folder. Then, run an `rsync` command to upload to the Athena locker:

```
rsync -avz build/ [YOUR_KERB]@athena.dialup.mit.edu:/mit/aialignment/www
```

You must be on the `aialignment-www` email list (MAIA web admin) to access the locker, contact [spruce@mit.edu](mailto:spruce@mit.edu) if you aren't.


