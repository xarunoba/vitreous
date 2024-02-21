# Vitreous 👁️

![Static Badge](https://img.shields.io/badge/Made_with-%E2%9D%A4%EF%B8%8F-red?style=for-the-badge) ![NPM License](https://img.shields.io/npm/l/%40xarunoba%2Fclai?style=for-the-badge)

An opinionated starter template for Nuxt 3.

* [Google Fonts](https://github.com/nuxt-modules/google-fonts)
* [Nuxt Icon](https://github.com/nuxt-modules/icon)
* [Tailwind CSS](https://github.com/nuxt-modules/tailwindcss)
* [ESLint](https://github.com/eslint/eslint)
    * [`antfu/eslint-config`](https://github.com/antfu/eslint-config)
    * [`azat-io/eslint-plugin-perfectionist`](https://github.com/azat-io/eslint-plugin-perfectionist)
    * [`francoismassart/eslint-plugin-tailwindcss`](https://github.com/francoismassart/eslint-plugin-tailwindcss)
* Dependabot Auto-merge for `minor` and `patch` updates
* [`simple-git-hooks`](https://github.com/toplenboren/simple-git-hooks) to integrate git hooks
    * [`lint-staged`](https://github.com/okonet/lint-staged) for pre-commit linting
    * [`@xarunoba/clai`](https://github.com/xarunoba/clai) for automatic installation of dependency updates during pull (post-merge)
* [VSCode ESLint Auto-fix](https://github.com/antfu/eslint-config?tab=readme-ov-file#vs-code-support-auto-fix)

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
pnpm dlx giget@latest gh:xarunoba/vitreous my-project
cd my-project
git init -b main
pnpm install
```

## Setup

Setup Git (if not yet initialized) and install the dependencies:

```bash
git init -b main
pnpm install
```

## Development Server

Start the development server on `http://localhost:11226`:

```bash
pnpm dev
```
