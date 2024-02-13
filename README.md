# Vitreous 👁️

An opinionated starter template for Nuxt 3.

* Google Fonts
* Nuxt Icon
* Tailwind CSS
* ESLint
    * `antfu/eslint-config`
    * `azat-io/eslint-plugin-perfectionist`
    * `francoismassart/eslint-plugin-tailwindcss`
* Dependabot Auto-merge for `minor` and `patch` updates
* `simple-git-hooks` and `lint-staged` for pre-commit linting
* VSCode ESLint Auto-fix

## Checklist
Make sure to do these tasks to update the project's info in accordance to your needs.

- [ ] Change name in `package.json`
- [ ] Change author name in `LICENSE`
- [ ] Change SEO and other metadata in `app.vue`
- [ ] Change favicons, browserconfig, and site.webmanifest in `public` (I recommend using [RealFaviconGenerator](https://realfavicongenerator.net/))
- [ ] Cleanup the `README.md` file
- [ ] Remove placeholder `pages` and `layouts`
- [ ] Customize the dependabot according to your needs in `dependabot.yml` and `dependabot-auto-merge.yml` (Change `target-branch` to `develop`, `prefix` to `"chore: "`, etc.)

## Clone Repository

### Github Template

[Use this project as a template](https://github.com/Xarunoba/vitreous).

### Clone to Local

If you prefer to do it manually with the a blank Git History:

```
pnpm dlx giget@latest gh:Xarunoba/vitreous#master my-project
cd my-project
git init
pnpm install
```

## Setup

Setup Git (if not yet initialized) and install the dependencies:

```bash
git init
pnpm install
```

## Development Server

Start the development server on `http://localhost:11226`:

```bash
pnpm dev
```
