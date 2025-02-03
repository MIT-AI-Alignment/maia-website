# MAIA website

The [MAIA website](https://aialignment.mit.edu/) is created using [SvelteKit](https://kit.svelte.dev/) and hosted on MIT Athena. This README should tell you everything you need to know about updating and deploying the site.

## 01 Setup

**Install Dependencies**
Make sure you have NodeJS and NPM already installed. Then Run:

```bash
npm install
```

## 02 Developing

**Start Development Server**
In the project root, start the development server locally:

```bash
npm run dev
```

## 03 Updating the site

### Routing

The site's pages are all in the `routes` folder, with a folder for each page. Shared components are in `routes/components`. The site uses Tailwind CSS, otherwise it should be very intuitive to anyone used to HTML. For more, consult [gculp@mit.edu](mailto:gculp@mit.edu) or the [Svelte docs](https://svelte.dev/).

### Common Changes Changes

Each semester we need to update AISF due dates, exec board etc. Because of this, there is a centralized location for common locations: [`./src/lib/config.ts`](./src/lib/config.ts)

```typescript
// Use this to make high-level changes to the website in one place.
export const CONFIG = {
    banner: {
        visible: true
    },
    aisf_ml: {
        visible: true,
        deadline: "Wednesday, February 12th, 11:59 PM EST",
        deadline_short: "",
        applicationLink: "https://airtable.com/appci3nEZe4nlb8oX/shrSLlrgeIFubZnGd"
    },
    aisf_gov: {
        visible: false,
        deadline: "",
        deadline_short: "",
        applicationLink: ""
    },
} as const; 
```

## 04 Building

Once you are ready to upload, you can generate the production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## 05 Deploying to Athena

!!! Info You must be on the `aialignment-www` email list (MAIA web admin) to access the locker, contact [spruce@mit.edu](mailto:spruce@mit.edu) if you aren't.

After building the app in part 04, You should see compiled output such as `index.html` in your `./build` folder. Then, copy the contents of the [`./build`](./build) folder into `/mit/aialignment/www` on Athena, run the `rsync` command below using your kerb, password, and MFA as normal to sign in.

```bash
npm run deploy --kerb=YOUR_KERB
```

> This command is equivalent to:
> ```bash
> rsync -avz build/ [YOUR_KERB]@athena.dialup.mit.edu:/mit/aialignment/www
> ```

<details>
<summary>More info on connecting</summary>

For more information on how to connect, Gatlen recommends the [SIPB inofficial guide to connecting to MIT Athena](https://sipb.mit.edu/doc/using-athena/).

The TL;DR on how to connect via SSH is:

1. SSH onto Athena using your kerb

```bash
ssh [kerberos]@athena.dialup.mit.edu
```

2. Follow the instructions on signing in. It should be your normal MIT kerb/password/MFA.
1. Changes can be made once connected, but it's honestly easier to follow the rsync instructions in part 05 below.

- [Official MIT Athena Docs Here](https://kb.mit.edu/confluence/pages/viewpage.action?pageId=3907090).

</details>
