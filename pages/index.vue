<template>
  <div class="flex flex-col gap-y-2 rounded-md bg-slate-100 p-4">
    <img
      alt="Vite logo"
      class="mx-auto w-20"
      draggable="false"
      src="/android-chrome-512x512.png"
    >
    <h1 class="select-none text-center text-lg font-medium">
      Vitreous
    </h1>
    <p class="mb-4 text-center font-light italic">
      Opinionated Nuxt 3 Starter
    </p>
    <NuxtLink class="flex items-center justify-center gap-2 rounded-md bg-slate-200 p-2 hover:bg-slate-300" target="_blank" to="https://github.com/Xarunoba/vitreous">
      <Icon name="ph:github-logo-duotone" /> <span class="font-medium">Github</span>
    </NuxtLink>
  </div>
</template>
