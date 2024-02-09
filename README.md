# Vitreous 👁️

An opinionated starter template for Nuxt 3.

* Google Fonts
* Nuxt Icon
* Tailwind CSS
* ESLint
    * `antfu/eslint-config`
    * `azat-io/eslint-plugin-perfectionist`
    * `francoismassart/eslint-plugin-tailwindcss`
* Dependabot auto-merge for minor and patch updates.
* `simple-git-hooks` and `lint-staged` for pre-commit lint fixing.
* VSCode ESLint Auto-Fix

## Checklist
Make sure to do these tasks to update the project's info in accordance to your needs.

[ ] Change name in `package.json`.
[ ] Change author name in `LICENSE`.
[ ] Change SEO and other metadata in `app.vue`.
[ ] Change favicons, browserconfig, and site.webmanifest in `public` (I recommend using [RealFaviconGenerator](https://realfavicongenerator.net/))
[ ] Cleanup the `README.md` file and remove pages/layouts.
[ ] Customize the dependabot according to your needs in `dependabot.yml` and `dependabot-auto-merge.yml`.

## Clone Repository

### Github Template

[Use this project as a template](https://github.com/Xarunoba/vitreous).

### Clone to Local

If you prefer to do it manually with the a blank Git History:

```
pnpm dlx giget@latest gh:Xarunoba/vitreous
cd Xarunoba-vitreous
git init
pnpm install
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

If you still haven't initialized Git, make sure to setup `simple-git-hooks`:

```bash
pnpm setup:simple-git-hooks
```

## Development Server

Start the development server on `http://localhost:11226`:

```bash
pnpm dev
```
